/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import SvgCheckLgStroke from '../../../node_modules/@zendeskgarden/svg-icons/src/16/check-lg-stroke.svg.js';
import { mergeRefs } from 'react-merge-refs';
import '../../../styled/menu/StyledMenu.js';
import '../../../styled/menu/StyledMenuWrapper.js';
import '../../../styled/menu/StyledSeparator.js';
import '../../../styled/items/StyledAddItem.js';
import { StyledItem } from '../../../styled/items/StyledItem.js';
import '../../../styled/items/StyledItemMeta.js';
import '../../../styled/items/StyledNextItem.js';
import '../../../styled/items/StyledNextIcon.js';
import '../../../styled/items/StyledPreviousItem.js';
import '../../../styled/items/StyledPreviousIcon.js';
import { StyledItemIcon } from '../../../styled/items/StyledItemIcon.js';
import '../../../styled/items/header/StyledHeaderIcon.js';
import '../../../styled/items/header/StyledHeaderItem.js';
import '../../../styled/items/media/StyledMediaBody.js';
import '../../../styled/items/media/StyledMediaFigure.js';
import '../../../styled/items/media/StyledMediaItem.js';
import '../../../styled/select/StyledFauxInput.js';
import '../../../styled/select/StyledInput.js';
import '../../../styled/select/StyledSelect.js';
import '../../../styled/multiselect/StyledMultiselectInput.js';
import '../../../styled/multiselect/StyledMultiselectItemsContainer.js';
import '../../../styled/multiselect/StyledMultiselectItemWrapper.js';
import '../../../styled/multiselect/StyledMultiselectMoreAnchor.js';
import useDropdownContext from '../../../utils/useDropdownContext.js';
import useMenuContext from '../../../utils/useMenuContext.js';
import { ItemContext } from '../../../utils/useItemContext.js';

const Item = React__default.forwardRef((_ref, forwardRef) => {
  let {
    value,
    disabled,
    isDanger,
    component = StyledItem,
    hasIcon,
    children,
    ...other
  } = _ref;
  const {
    selectedItems,
    hasMenuRef,
    itemSearchRegistry,
    downshift: {
      isOpen,
      selectedItem,
      highlightedIndex,
      getItemProps,
      setHighlightedIndex,
      itemToString
    }
  } = useDropdownContext();
  const {
    itemIndexRef,
    isCompact
  } = useMenuContext();
  const itemRef = useRef();
  const Component = component;
  if ((value === undefined || value === null) && !disabled) {
    throw new Error('All Item components require a `value` prop');
  }
  const currentIndex = itemIndexRef.current;
  const isFocused = highlightedIndex === currentIndex;
  let isSelected;
  useEffect(() => {
    if (!disabled && itemRef.current) {
      const itemTextValue = itemRef.current.innerText;
      if (itemTextValue) {
        itemSearchRegistry.current[currentIndex] = itemTextValue;
      }
    }
  });
  if (value) {
    if (selectedItems) {
      isSelected = selectedItems.some(item => {
        return itemToString(item) === itemToString(value);
      });
    } else {
      isSelected = itemToString(selectedItem) === itemToString(value);
    }
  } else {
    isSelected = false;
  }
  useEffect(() => {
    if (isOpen && !disabled && !selectedItems && isSelected) {
      setHighlightedIndex(currentIndex);
    }
  }, [currentIndex, disabled, isOpen, isSelected, selectedItems, setHighlightedIndex]);
  const contextValue = useMemo(() => ({
    isDisabled: disabled
  }), [disabled]);
  const ref = mergeRefs([itemRef, forwardRef]);
  if (disabled) {
    return React__default.createElement(ItemContext.Provider, {
      value: contextValue
    }, React__default.createElement(Component, Object.assign({
      ref: ref,
      disabled: disabled,
      $isDanger: isDanger,
      $isCompact: isCompact
    }, other), !!isSelected && !hasIcon && React__default.createElement(StyledItemIcon, {
      $isCompact: isCompact,
      $isVisible: isSelected,
      $isDisabled: disabled
    }, React__default.createElement(SvgCheckLgStroke, null)), children));
  }
  itemIndexRef.current++;
  return React__default.createElement(ItemContext.Provider, {
    value: contextValue
  }, React__default.createElement(Component, Object.assign({
    $isCompact: isCompact,
    $isDanger: isDanger,
    $isFocused: isFocused
  }, getItemProps({
    item: value,
    ref,
    ...(hasMenuRef.current && {
      role: 'menuitem',
      'aria-selected': null
    }),
    ...other
  })), !!isSelected && !hasIcon && React__default.createElement(StyledItemIcon, {
    $isCompact: isCompact,
    $isVisible: isSelected
  }, React__default.createElement(SvgCheckLgStroke, null)), children));
});
Item.displayName = 'Item';
Item.propTypes = {
  value: PropTypes.any,
  disabled: PropTypes.bool
};

export { Item };
