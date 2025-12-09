/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useRef, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import Downshift from 'downshift';
import { Manager } from 'react-popper';
import { composeEventHandlers, KEY_CODES } from '@zendeskgarden/container-utilities';
import { DropdownContext } from '../../utils/useDropdownContext.js';

const REMOVE_ITEM_STATE_TYPE = 'REMOVE_ITEM';
const Dropdown = props => {
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
  const itemIndexRef = useRef(0);
  const previousItemRef = useRef(undefined);
  const previousIndexRef = useRef(undefined);
  const nextItemsHashRef = useRef({});
  const containsMultiselectRef = useRef(false);
  const itemSearchRegistry = useRef([]);
  const [dropdownType, setDropdownType] = useState('');
  const {
    rtl
  } = useContext(ThemeContext);
  const hasMenuRef = useRef(false);
  const popperReferenceElementRef = useRef(null);
  const customGetInputProps = ({
    onKeyDown,
    ...other
  }, downshift) => {
    return {
      onKeyDown: composeEventHandlers(onKeyDown, e => {
        const PREVIOUS_KEY = rtl ? KEY_CODES.RIGHT : KEY_CODES.LEFT;
        const NEXT_KEY = rtl ? KEY_CODES.LEFT : KEY_CODES.RIGHT;
        if (downshift.isOpen) {
          if (e.keyCode === PREVIOUS_KEY && previousIndexRef.current !== null && previousIndexRef.current !== undefined && !downshift.inputValue) {
            e.preventDefault();
            e.stopPropagation();
            downshift.selectItemAtIndex(previousIndexRef.current);
          }
          if (e.keyCode === NEXT_KEY) {
            const nextItemIndexes = Object.values(nextItemsHashRef.current);
            if (nextItemIndexes.includes(downshift.highlightedIndex)) {
              e.preventDefault();
              e.stopPropagation();
              downshift.selectItemAtIndex(downshift.highlightedIndex);
            }
          }
        } else if ((e.keyCode === KEY_CODES.ENTER || e.keyCode === KEY_CODES.SPACE) && !downshift.isOpen && dropdownType !== 'combobox') {
          e.preventDefault();
          e.stopPropagation();
          downshift.openMenu();
        }
      }),
      ...other
    };
  };
  const transformDownshift = ({
    getInputProps,
    getToggleButtonProps,
    ...downshift
  }) => {
    return {
      getInputProps: p => getInputProps(customGetInputProps(p, downshift)),
      getToggleButtonProps: p => getToggleButtonProps({
        'aria-label': undefined,
        ...p
      }),
      ...downshift
    };
  };
  return React__default.createElement(Manager, null, React__default.createElement(Downshift, Object.assign({
    suppressRefError: true
    ,
    isOpen: isOpen,
    highlightedIndex: highlightedIndex,
    selectedItem: selectedItem || null
    ,
    inputValue: inputValue,
    onInputValueChange: (inputVal, stateAndHelpers) => {
      if (onInputValueChange) {
        if (stateAndHelpers.isOpen) {
          onInputValueChange(inputVal, stateAndHelpers);
        } else if (dropdownType === 'multiselect') {
          onInputValueChange('', stateAndHelpers);
        }
      }
    },
    onStateChange: (changes, stateAndHelpers) => {
      if (dropdownType === 'autocomplete' && changes.isOpen === false && !changes.selectedItem) {
        onSelect && onSelect(selectedItem, stateAndHelpers);
      }
      if (Object.prototype.hasOwnProperty.call(changes, 'selectedItem') && changes.selectedItem !== null) {
        if (selectedItems) {
          const {
            itemToString
          } = stateAndHelpers;
          const existingItemIndex = selectedItems.findIndex(item => {
            return itemToString(item) === itemToString(changes.selectedItem);
          });
          const updatedSelectedItems = Array.from(selectedItems);
          if (existingItemIndex === -1) {
            updatedSelectedItems.splice(updatedSelectedItems.length, 0, changes.selectedItem);
          } else {
            updatedSelectedItems.splice(existingItemIndex, 1);
          }
          changes.selectedItems = updatedSelectedItems;
          delete changes.selectedItem;
          onSelect && onSelect(updatedSelectedItems, stateAndHelpers);
        } else {
          onSelect && onSelect(changes.selectedItem, stateAndHelpers);
        }
        if (dropdownType === 'multiselect') {
          stateAndHelpers.setState({
            inputValue: ''
          });
        }
      }
      onStateChange && onStateChange(changes, stateAndHelpers);
    },
    stateReducer: (_state, changes) => {
      switch (changes.type) {
        case Downshift.stateChangeTypes.changeInput:
          if (changes.inputValue === '' && dropdownType === 'combobox') {
            return {
              ...changes,
              isOpen: false
            };
          }
          return changes;
        default:
          return changes;
      }
    }
  }, downshiftProps), downshift => React__default.createElement(DropdownContext.Provider, {
    value: {
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
    }
  }, children)));
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

export { Dropdown, REMOVE_ITEM_STATE_TYPE };
