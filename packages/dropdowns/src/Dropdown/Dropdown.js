/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { Manager } from 'react-popper';
import { withTheme, isRtl } from '@zendeskgarden/react-theming';
import { KEY_CODES, composeEventHandlers } from '@zendeskgarden/container-selection';

export const DropdownContext = React.createContext();

/**
 * Component that provides state and a11y through the context API
 * to its consumers.
 */
function Dropdown(props) {
  const {
    children,
    isOpen,
    selectedItem,
    selectedItems,
    highlightedIndex,
    inputValue,
    onSelect,
    onStateChange,
    downshiftProps
  } = props;
  // Refs used to handle custom Garden keyboard nav
  const itemIndexRef = useRef(0);
  const previousItemRef = useRef(undefined);
  const previousIndexRef = useRef(undefined);
  const nextItemsHashRef = useRef({});

  // Used to inform Menu (Popper) that a full-width menu is needed
  const popperReferenceElementRef = useRef(null);

  /**
   * Add additional keyboard nav to the basics provided by Downshift
   **/
  const customGetInputProps = ({ onKeyDown, ...other }, downshift, rtl) => {
    return {
      onKeyDown: composeEventHandlers(onKeyDown, e => {
        const PREVIOUS_KEY = rtl ? KEY_CODES.RIGHT : KEY_CODES.LEFT;
        const NEXT_KEY = rtl ? KEY_CODES.LEFT : KEY_CODES.RIGHT;

        if (downshift.isOpen) {
          // Select highlighted item on TAB
          if (e.keyCode === KEY_CODES.TAB) {
            e.preventDefault();
            e.stopPropagation();

            downshift.selectHighlightedItem();
          }

          // Select previous item if available
          if (
            e.keyCode === PREVIOUS_KEY &&
            previousIndexRef.current !== null &&
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

              downshift.selectItemAtIndex(downshift.highlightedIndex);
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

  const transformDownshift = ({ getInputProps, getToggleButtonProps, ...downshift }) => {
    return {
      getInputProps: p => getInputProps(customGetInputProps(p, downshift, isRtl(props))),
      // The default aria-label provided by Downshift is invalid due to our DOM structure
      getToggleButtonProps: p => getToggleButtonProps({ 'aria-label': undefined, ...p }),
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
        onStateChange={(changes, stateAndHelpers) => {
          if (
            Object.prototype.hasOwnProperty.call(changes, 'selectedItem') &&
            changes.selectedItem !== null
          ) {
            if (selectedItems) {
              const { itemToString } = stateAndHelpers;
              const existingItemIndex = selectedItems.findIndex(item => {
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
              changes.selectedItems = updatedSelectedItems;
              delete changes.selectedItem;

              onSelect && onSelect(updatedSelectedItems, stateAndHelpers);
            } else {
              onSelect && onSelect(changes.selectedItem, stateAndHelpers);
            }
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
            case Downshift.stateChangeTypes.keyDownEnter:
            case Downshift.stateChangeTypes.clickItem:
            case Downshift.stateChangeTypes.clickButton:
            case Downshift.stateChangeTypes.keyDownSpaceButton:
            case Downshift.stateChangeTypes.blurButton:
              return {
                ...changes,
                inputValue: ''
              };
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
              downshift: transformDownshift(downshift)
            }}
          >
            {children}
          </DropdownContext.Provider>
        )}
      </Downshift>
    </Manager>
  );
}

Dropdown.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  selectedItem: PropTypes.any,
  selectedItems: PropTypes.arrayOf(PropTypes.any),
  highlightedIndex: PropTypes.number,
  inputValue: PropTypes.string,
  onSelect: PropTypes.func,
  onStateChange: PropTypes.func,
  downshiftProps: PropTypes.object
};

export default withTheme(Dropdown);
