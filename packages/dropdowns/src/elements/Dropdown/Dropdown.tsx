/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import Downshift, { ControllerStateAndHelpers, StateChangeOptions } from 'downshift';
import { Manager } from 'react-popper';
import { KEY_CODES, composeEventHandlers } from '@zendeskgarden/container-utilities';
import { DropdownContext, DROPDOWN_TYPE } from '../../utils/useDropdownContext';

export const REMOVE_ITEM_STATE_TYPE = 'REMOVE_ITEM';

export interface IDropdownProps {
  /** Opens the dropdown */
  isOpen?: boolean;
  /** Identifies the currently selected item */
  selectedItem?: any;
  /** Identifies the currently selected items */
  selectedItems?: any[];
  /** Highlights an element at a selected index */
  highlightedIndex?: number;
  /** Sets the value of the input element*/
  inputValue?: string;
  /**
   * Handles item selection
   *
   * @param {any|null} selectedItem The selected item
   * @param {Object} stateAndHelpers [Downshift state and helpers](https://github.com/downshift-js/downshift#onselect)
   * */
  onSelect?: (selectedItem: any | null, stateAndHelpers: ControllerStateAndHelpers<any>) => void;
  /**
   * Handles state change
   *
   * @param {Object} options [Downshift internal state changes](https://github.com/downshift-js/downshift#onstatechange)
   * @param {Object} stateAndHelpers [Downshift state and helpers](https://github.com/downshift-js/downshift#onstatechange)
   * */
  onStateChange?: (
    options: StateChangeOptions<any>,
    stateAndHelpers: ControllerStateAndHelpers<any>
  ) => void;
  /**
   * Handles input value change
   *
   * @param {string} inputValue Value of the input element
   * @param {Object} stateAndHelpers [Downshift state and helpers](https://github.com/downshift-js/downshift#oninputvaluechange)
   * */
  onInputValueChange?: (
    inputValue: string,
    stateAndHelpers: ControllerStateAndHelpers<any>
  ) => void;
  /** Passes customization props to the [Downshift](https://www.downshift-js.com/) component */
  downshiftProps?: Record<string, any>;
}

export const Dropdown: React.FunctionComponent<IDropdownProps> = props => {
  const {
    children,
    isOpen,
    selectedItem,
    selectedItems,
    highlightedIndex,
    inputValue,
    onSelect,
    onStateChange,
    onInputValueChange,
    downshiftProps
  } = props;
  // Refs used to handle custom Garden keyboard nav
  const itemIndexRef = useRef<number>(0);
  const previousItemRef = useRef<number | undefined>(undefined);
  const previousIndexRef = useRef<number | undefined>(undefined);
  const nextItemsHashRef = useRef<Record<string, unknown>>({});
  const containsMultiselectRef = useRef(false);
  const itemSearchRegistry = useRef([]);
  const [dropdownType, setDropdownType] = useState<DROPDOWN_TYPE>('');
  const themeContext = useContext(ThemeContext);

  // Ref used to determine ARIA attributes for menu dropdowns
  const hasMenuRef = useRef(false);

  // Used to inform Menu (Popper) that a full-width menu is needed
  const popperReferenceElementRef = useRef<any>(null);

  /**
   * Add additional keyboard nav to the basics provided by Downshift
   **/
  const customGetInputProps = (
    { onKeyDown, ...other }: any,
    downshift: ControllerStateAndHelpers<any>,
    rtl: any
  ) => {
    return {
      onKeyDown: composeEventHandlers(onKeyDown, (e: KeyboardEvent) => {
        const PREVIOUS_KEY = rtl ? KEY_CODES.RIGHT : KEY_CODES.LEFT;
        const NEXT_KEY = rtl ? KEY_CODES.LEFT : KEY_CODES.RIGHT;

        if (downshift.isOpen) {
          // Select previous item if available
          if (
            e.keyCode === PREVIOUS_KEY &&
            previousIndexRef.current !== null &&
            previousIndexRef.current !== undefined &&
            !downshift.inputValue
          ) {
            e.preventDefault();
            e.stopPropagation();

            downshift.selectItemAtIndex(previousIndexRef.current);
          }

          // Select current next item if available
          if (e.keyCode === NEXT_KEY) {
            const nextItemIndexes = Object.values(nextItemsHashRef.current);

            if (nextItemIndexes.includes(downshift.highlightedIndex)) {
              e.preventDefault();
              e.stopPropagation();

              downshift.selectItemAtIndex(downshift.highlightedIndex!);
            }
          }
        } else if (
          (e.keyCode === KEY_CODES.ENTER || e.keyCode === KEY_CODES.SPACE) &&
          !downshift.isOpen &&
          dropdownType !== 'combobox'
        ) {
          e.preventDefault();
          e.stopPropagation();

          downshift.openMenu();
        }
      }),
      ...other
    };
  };

  const transformDownshift = ({ getInputProps, getToggleButtonProps, ...downshift }: any) => {
    return {
      getInputProps: (p: any) => getInputProps(customGetInputProps(p, downshift, themeContext.rtl)),
      // The default aria-label provided by Downshift is invalid due to our DOM structure
      getToggleButtonProps: (p: any) => getToggleButtonProps({ 'aria-label': undefined, ...p }),
      ...downshift
    };
  };

  return (
    <Manager>
      <Downshift
        suppressRefError // https://github.com/downshift-js/downshift/issues/529 Allows us to provide props through context
        isOpen={isOpen}
        highlightedIndex={highlightedIndex}
        selectedItem={selectedItem || null} // Ensures that selectedItem never becomes controlled internally by Downshift
        inputValue={inputValue}
        onInputValueChange={(inputVal, stateAndHelpers) => {
          if (onInputValueChange) {
            if (stateAndHelpers.isOpen) {
              onInputValueChange(inputVal, stateAndHelpers);
            } else if (dropdownType === 'multiselect') {
              onInputValueChange('', stateAndHelpers);
            }
          }
        }}
        onStateChange={(changes, stateAndHelpers) => {
          if (
            dropdownType === 'autocomplete' &&
            changes.isOpen === false &&
            !changes.selectedItem
          ) {
            onSelect && onSelect(selectedItem, stateAndHelpers);
          }
          if (
            Object.prototype.hasOwnProperty.call(changes, 'selectedItem') &&
            changes.selectedItem !== null
          ) {
            if (selectedItems) {
              const { itemToString } = stateAndHelpers;
              const existingItemIndex = selectedItems.findIndex((item: any) => {
                return itemToString(item) === itemToString(changes.selectedItem);
              });
              const updatedSelectedItems = Array.from(selectedItems);

              if (existingItemIndex === -1) {
                updatedSelectedItems.splice(updatedSelectedItems.length, 0, changes.selectedItem);
              } else {
                updatedSelectedItems.splice(existingItemIndex, 1);
              }

              /**
               * Customize the changes returned from `onStateChange` as
               * Downshift has no concept of a "multiselect".
               **/
              (changes as any).selectedItems = updatedSelectedItems;
              delete changes.selectedItem;

              onSelect && onSelect(updatedSelectedItems, stateAndHelpers);
            } else {
              onSelect && onSelect(changes.selectedItem, stateAndHelpers);
            }

            // Reset input value when item is selected for multiselect - to clear input for next use
            if (dropdownType === 'multiselect') {
              stateAndHelpers.setState({ inputValue: '' });
            }
          }

          onStateChange && onStateChange(changes, stateAndHelpers);
        }}
        stateReducer={(_state, changes) => {
          /**
           * Close the menu when the combobox input is cleared by the user
           */
          switch (changes.type) {
            case Downshift.stateChangeTypes.changeInput:
              if (changes.inputValue === '' && dropdownType === 'combobox') {
                return { ...changes, isOpen: false };
              }

              return changes;
            default:
              return changes;
          }
        }}
        {...downshiftProps}
      >
        {downshift => (
          <DropdownContext.Provider
            /* eslint-disable react/jsx-no-constructed-context-values */
            value={{
              hasMenuRef,
              itemIndexRef,
              previousItemRef,
              previousIndexRef,
              nextItemsHashRef,
              popperReferenceElementRef,
              selectedItems,
              downshift: transformDownshift(downshift),
              containsMultiselectRef,
              itemSearchRegistry,
              setDropdownType
            }}
          >
            {children}
          </DropdownContext.Provider>
        )}
      </Downshift>
    </Manager>
  );
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
  selectedItem: PropTypes.any,
  selectedItems: PropTypes.arrayOf(PropTypes.any),
  highlightedIndex: PropTypes.number,
  inputValue: PropTypes.string,
  onSelect: PropTypes.func,
  onStateChange: PropTypes.func,
  downshiftProps: PropTypes.object
};
