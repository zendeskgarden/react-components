/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { DefaultTheme, ThemeProps } from 'styled-components';
import Downshift, { ControllerStateAndHelpers, StateChangeOptions } from 'downshift';
import { Manager } from 'react-popper';
import { withTheme, isRtl } from '@zendeskgarden/react-theming';
import { KEY_CODES, composeEventHandlers } from '@zendeskgarden/container-utilities';

export const REMOVE_ITEM_STATE_TYPE = 'REMOVE_ITEM';
export const TAB_SELECT_ITEM_STATE_TYPE = 'TAB_ITEM';

export interface IDropdownContext {
  itemIndexRef: React.MutableRefObject<number>;
  previousItemRef: React.MutableRefObject<any>;
  previousIndexRef: React.MutableRefObject<any>;
  nextItemsHashRef: React.MutableRefObject<object>;
  popperReferenceElementRef: React.MutableRefObject<any>;
  selectedItems?: any[];
  downshift: ControllerStateAndHelpers<any>;
  containsMultiselectRef: React.MutableRefObject<boolean>;
}

export const DropdownContext = React.createContext<IDropdownContext | undefined>(undefined);

export interface IDropdownProps {
  isOpen?: boolean;
  selectedItem?: any;
  selectedItems?: any[];
  highlightedIndex?: number;
  inputValue?: string;
  onSelect?: (selectedItem: any | null, stateAndHelpers: ControllerStateAndHelpers<any>) => void;
  onStateChange?: (
    options: StateChangeOptions<any>,
    stateAndHelpers: ControllerStateAndHelpers<any>
  ) => void;
  onInputValueChange?: (
    inputValue: string,
    stateAndHelpers: ControllerStateAndHelpers<any>
  ) => void;
  downshiftProps?: object;
}

/**
 * Component that provides state and a11y through the context API
 * to its consumers.
 */
const Dropdown: React.FunctionComponent<IDropdownProps & ThemeProps<DefaultTheme>> = props => {
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
  const nextItemsHashRef = useRef<object>({});
  const containsMultiselectRef = useRef(false);

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
          !downshift.isOpen
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
      getInputProps: (p: any) => getInputProps(customGetInputProps(p, downshift, isRtl(props))),
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
        onInputValueChange={onInputValueChange}
        onStateChange={(changes, stateAndHelpers) => {
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

            // Reset input value when item is selected
            stateAndHelpers.setState({ inputValue: '' });
          }

          onStateChange && onStateChange(changes, stateAndHelpers);
        }}
        stateReducer={(_state, changes) => {
          /**
           * Set inputValue to an empty string during any event that updates the inputValue
           */
          switch (changes.type) {
            case Downshift.stateChangeTypes.controlledPropUpdatedSelectedItem:
            case Downshift.stateChangeTypes.mouseUp:
            case Downshift.stateChangeTypes.keyDownSpaceButton:
            case Downshift.stateChangeTypes.blurButton:
              return {
                ...changes,
                inputValue: ''
              };
            case Downshift.stateChangeTypes.keyDownEnter:
            case Downshift.stateChangeTypes.clickItem:
            case TAB_SELECT_ITEM_STATE_TYPE as any: {
              const updatedState = { ...changes, inputValue: '' };

              if (containsMultiselectRef.current) {
                updatedState.isOpen = true;
                updatedState.highlightedIndex = _state.highlightedIndex;
              }

              return updatedState;
            }
            case REMOVE_ITEM_STATE_TYPE as any:
              return { ...changes, isOpen: false };
            default:
              return changes;
          }
        }}
        {...downshiftProps}
      >
        {downshift => (
          <DropdownContext.Provider
            value={{
              itemIndexRef,
              previousItemRef,
              previousIndexRef,
              nextItemsHashRef,
              popperReferenceElementRef,
              selectedItems,
              downshift: transformDownshift(downshift),
              containsMultiselectRef
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

export default withTheme(Dropdown) as React.FunctionComponent<IDropdownProps>;
