/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useRef, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Reference } from 'react-popper';
import { KEY_CODES } from '@zendeskgarden/container-utilities';
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
import '../../styled/select/StyledFauxInput.js';
import { StyledInput } from '../../styled/select/StyledInput.js';
import '../../styled/select/StyledSelect.js';
import '../../styled/multiselect/StyledMultiselectInput.js';
import '../../styled/multiselect/StyledMultiselectItemsContainer.js';
import '../../styled/multiselect/StyledMultiselectItemWrapper.js';
import '../../styled/multiselect/StyledMultiselectMoreAnchor.js';
import useDropdownContext from '../../utils/useDropdownContext.js';

const Trigger = _ref => {
  let {
    children,
    refKey = 'ref',
    ...triggerProps
  } = _ref;
  const {
    hasMenuRef,
    itemSearchRegistry,
    downshift: {
      getRootProps,
      getToggleButtonProps,
      getInputProps,
      isOpen,
      highlightedIndex,
      selectItemAtIndex,
      setHighlightedIndex
    }
  } = useDropdownContext();
  const hiddenInputRef = useRef(null);
  const triggerRef = useRef(null);
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
  }, [isOpen, hasMenuRef]);
  useEffect(() => {
    if (hasMenuRef.current === false) {
      hasMenuRef.current = true;
    }
  }, [hasMenuRef]);
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
  }, [searchString, searchItems, itemSearchRegistry, highlightedIndex, selectItemAtIndex, setHighlightedIndex]);
  const renderChildren = popperRef => {
    const {
      ref: rootPropsRefCallback,
      ...rootProps
    } = getRootProps();
    const listboxToggleProps = getToggleButtonProps({
      ...rootProps,
      role: null,
      'aria-labelledby': undefined,
      ...triggerProps,
      ...children.props
    });
    const menuToggleProps = {
      ...listboxToggleProps,
      'aria-haspopup': 'true',
      'aria-controls': listboxToggleProps['aria-owns'],
      'aria-owns': null
    };
    const toggleButtonProps = hasMenuRef.current ? menuToggleProps : listboxToggleProps;
    return React__default.cloneElement(React__default.Children.only(children), {
      ...toggleButtonProps,
      [refKey]: childRef => {
        popperRef(childRef);
        triggerRef.current = childRef;
        rootPropsRefCallback(childRef);
      }
    });
  };
  return React__default.createElement(Reference, null, _ref2 => {
    let {
      ref: popperReference
    } = _ref2;
    return React__default.createElement(React__default.Fragment, null, renderChildren(popperReference), React__default.createElement(StyledInput, getInputProps({
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
    })));
  });
};
Trigger.propTypes = {
  children: PropTypes.any,
  refKey: PropTypes.string
};

export { Trigger };
