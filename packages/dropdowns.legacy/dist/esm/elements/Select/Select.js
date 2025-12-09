/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useState, useRef, useEffect, useCallback } from 'react';
import { KEY_CODES, composeEventHandlers } from '@zendeskgarden/container-utilities';
import SvgChevronDownStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg.js';
import { VALIDATION } from '@zendeskgarden/react-forms';
import PropTypes from 'prop-types';
import { Reference } from 'react-popper';
import { mergeRefs } from 'react-merge-refs';
import '../../styled/menu/StyledMenu.js';
import '../../styled/menu/StyledMenuWrapper.js';
import '../../styled/menu/StyledSeparator.js';
import '../../styled/items/StyledAddItem.js';
import '../../styled/items/StyledItem.js';
import '../../styled/items/StyledItemMeta.js';
import '../../styled/items/StyledNextItem.js';
import '../../styled/items/StyledNextIcon.js';
import '../../styled/items/StyledPreviousItem.js';
import '../../styled/items/StyledPreviousIcon.js';
import '../../styled/items/StyledItemIcon.js';
import '../../styled/items/header/StyledHeaderIcon.js';
import '../../styled/items/header/StyledHeaderItem.js';
import '../../styled/items/media/StyledMediaBody.js';
import '../../styled/items/media/StyledMediaFigure.js';
import '../../styled/items/media/StyledMediaItem.js';
import { StyledFauxInput } from '../../styled/select/StyledFauxInput.js';
import { StyledInput } from '../../styled/select/StyledInput.js';
import { StyledSelect } from '../../styled/select/StyledSelect.js';
import '../../styled/multiselect/StyledMultiselectInput.js';
import '../../styled/multiselect/StyledMultiselectItemsContainer.js';
import '../../styled/multiselect/StyledMultiselectItemWrapper.js';
import '../../styled/multiselect/StyledMultiselectMoreAnchor.js';
import useDropdownContext from '../../utils/useDropdownContext.js';
import useFieldContext from '../../utils/useFieldContext.js';

const Select = React__default.forwardRef((_ref, ref) => {
  let {
    children,
    start,
    ...props
  } = _ref;
  const {
    popperReferenceElementRef,
    itemSearchRegistry,
    downshift: {
      getToggleButtonProps,
      getInputProps,
      isOpen,
      highlightedIndex,
      setHighlightedIndex,
      selectItemAtIndex,
      closeMenu
    }
  } = useDropdownContext();
  const {
    isLabelHovered
  } = useFieldContext();
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const hiddenInputRef = useRef();
  const triggerRef = useRef();
  const previousIsOpenRef = useRef(undefined);
  const [searchString, setSearchString] = useState('');
  const searchTimeoutRef = useRef();
  const currentSearchIndexRef = useRef(0);
  useEffect(() => {
    if (hiddenInputRef.current && isOpen && !previousIsOpenRef.current) {
      hiddenInputRef.current.focus();
    }
    if (triggerRef.current && !isOpen && previousIsOpenRef.current) {
      triggerRef.current.focus();
    }
    previousIsOpenRef.current = isOpen;
  }, [isOpen, triggerRef]);
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    searchTimeoutRef.current = window.setTimeout(() => {
      setSearchString('');
    }, 500);
    return () => {
      clearTimeout(searchTimeoutRef.current);
    };
  }, [searchString]);
  const searchItems = useCallback((searchValue, startIndex, endIndex) => {
    for (let index = startIndex; index < endIndex; index++) {
      const itemTextValue = itemSearchRegistry.current[index];
      if (itemTextValue && itemTextValue.toUpperCase().indexOf(searchValue.toUpperCase()) === 0) {
        return index;
      }
    }
    return undefined;
  }, [itemSearchRegistry]);
  const onInputKeyDown = useCallback(e => {
    if (e.keyCode === KEY_CODES.SPACE) {
      if (searchString) {
        e.preventDefault();
        e.stopPropagation();
      } else if (highlightedIndex !== null && highlightedIndex !== undefined) {
        e.preventDefault();
        e.stopPropagation();
        selectItemAtIndex(highlightedIndex);
        closeMenu();
      }
    }
    if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 65 || e.keyCode > 90) && e.keyCode !== KEY_CODES.SPACE) {
      return;
    }
    const character = String.fromCharCode(e.which || e.keyCode);
    if (!character || character.length === 0) {
      return;
    }
    if (!searchString) {
      if (highlightedIndex === null || highlightedIndex === undefined) {
        currentSearchIndexRef.current = -1;
      } else {
        currentSearchIndexRef.current = highlightedIndex;
      }
    }
    const newSearchString = searchString + character;
    setSearchString(newSearchString);
    let matchingIndex = searchItems(newSearchString, currentSearchIndexRef.current + 1, itemSearchRegistry.current.length);
    if (matchingIndex === undefined) {
      matchingIndex = searchItems(newSearchString, 0, currentSearchIndexRef.current);
    }
    if (matchingIndex !== undefined) {
      setHighlightedIndex(matchingIndex);
    }
  }, [searchString, searchItems, itemSearchRegistry, highlightedIndex, selectItemAtIndex, closeMenu, setHighlightedIndex]);
  const {
    type,
    ...selectProps
  } = getToggleButtonProps({
    tabIndex: props.disabled ? undefined : 0,
    onMouseEnter: composeEventHandlers(props.onMouseEnter, () => setIsHovered(true)),
    onMouseLeave: composeEventHandlers(props.onMouseLeave, () => setIsHovered(false)),
    onFocus: composeEventHandlers(props.onFocus, () => setIsFocused(true)),
    onBlur: composeEventHandlers(props.onBlur, () => setIsFocused(false)),
    ...props
  });
  const isContainerHovered = isLabelHovered && !isOpen;
  const isContainerFocused = isFocused || isOpen;
  return React__default.createElement(Reference, null, _ref2 => {
    let {
      ref: popperReference
    } = _ref2;
    return React__default.createElement(StyledFauxInput, Object.assign({
      isHovered: isContainerHovered,
      isFocused: isContainerFocused
    }, selectProps, {
      role: "none",
      ref: selectRef => {
        popperReference(selectRef);
        mergeRefs([triggerRef, ref, popperReferenceElementRef])(selectRef);
      }
    }), !!start && React__default.createElement(StyledFauxInput.StartIcon, {
      isHovered: isHovered || isLabelHovered && !isOpen,
      isFocused: isContainerFocused,
      isDisabled: props.disabled
    }, start), React__default.createElement(StyledSelect, null, children), React__default.createElement(StyledInput, getInputProps({
      readOnly: true,
      $isHidden: true,
      tabIndex: -1,
      ref: hiddenInputRef,
      value: '',
      onClick: e => {
        if (isOpen) {
          e.nativeEvent.preventDownshiftDefault = true;
        }
      },
      onKeyDown: onInputKeyDown
    })), !props.isBare && React__default.createElement(StyledFauxInput.EndIcon, {
      isHovered: isHovered || isLabelHovered && !isOpen,
      isFocused: isContainerFocused,
      isDisabled: props.disabled,
      isRotated: isOpen
    }, React__default.createElement(SvgChevronDownStroke, null)));
  });
});
Select.displayName = 'Select';
Select.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  disabled: PropTypes.bool,
  focusInset: PropTypes.bool,
  validation: PropTypes.oneOf(VALIDATION),
  start: PropTypes.any
};

export { Select };
