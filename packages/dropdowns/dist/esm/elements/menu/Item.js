/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { mergeRefs } from 'react-merge-refs';
import SvgPlusStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/plus-stroke.svg.js';
import SvgChevronRightStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg.js';
import SvgChevronLeftStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg.js';
import SvgCheckLgStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/check-lg-stroke.svg.js';
import { OPTION_TYPE } from '../../types/index.js';
import '../../views/combobox/StyledCombobox.js';
import '../../views/combobox/StyledContainer.js';
import '../../views/combobox/StyledField.js';
import '../../views/combobox/StyledFloatingListbox.js';
import '../../views/combobox/StyledHint.js';
import '../../views/combobox/StyledInput.js';
import '../../views/combobox/StyledInputGroup.js';
import '../../views/combobox/StyledInputIcon.js';
import '../../views/combobox/StyledLabel.js';
import '../../views/combobox/StyledListbox.js';
import '../../views/combobox/StyledListboxSeparator.js';
import '../../views/combobox/StyledMessage.js';
import '../../views/combobox/StyledOptGroup.js';
import '../../views/combobox/StyledOption.js';
import '../../views/combobox/StyledOptionContent.js';
import '../../views/combobox/StyledOptionIcon.js';
import '../../views/combobox/StyledOptionMeta.js';
import '../../views/combobox/StyledOptionSelectionIcon.js';
import '../../views/combobox/StyledOptionTypeIcon.js';
import '../../views/combobox/StyledTag.js';
import '../../views/combobox/StyledTagsButton.js';
import '../../views/combobox/StyledTrigger.js';
import '../../views/combobox/StyledValue.js';
import '../../views/menu/StyledMenu.js';
import '../../views/menu/StyledFloatingMenu.js';
import { StyledItem } from '../../views/menu/StyledItem.js';
import { StyledItemAnchor } from '../../views/menu/StyledItemAnchor.js';
import { StyledItemContent } from '../../views/menu/StyledItemContent.js';
import '../../views/menu/StyledItemGroup.js';
import { StyledItemIcon } from '../../views/menu/StyledItemIcon.js';
import '../../views/menu/StyledItemMeta.js';
import { StyledItemTypeIcon } from '../../views/menu/StyledItemTypeIcon.js';
import '../../views/menu/StyledSeparator.js';
import { ItemMeta } from './ItemMeta.js';
import useMenuContext from '../../context/useMenuContext.js';
import useItemGroupContext from '../../context/useItemGroupContext.js';
import { ItemContext } from '../../context/useItemContext.js';
import { toItem } from './utils.js';

const renderActionIcon = itemType => {
  switch (itemType) {
    case 'add':
      return React__default.createElement(SvgPlusStroke, null);
    case 'next':
      return React__default.createElement(SvgChevronRightStroke, null);
    case 'previous':
      return React__default.createElement(SvgChevronLeftStroke, null);
    default:
      return React__default.createElement(SvgCheckLgStroke, null);
  }
};
const ItemComponent = forwardRef(({
  children,
  value,
  label = value,
  href,
  isSelected,
  icon,
  isDisabled,
  isExternal,
  type,
  name,
  onClick,
  onKeyDown,
  onMouseEnter,
  ...other
}, ref) => {
  const {
    type: selectionType
  } = useItemGroupContext();
  const {
    focusedValue,
    getAnchorProps,
    getItemProps,
    isCompact
  } = useMenuContext();
  const item = {
    ...toItem({
      value,
      label,
      name,
      type,
      isSelected,
      isDisabled,
      href,
      isExternal
    }),
    type: selectionType
  };
  const anchorProps = getAnchorProps({
    item
  });
  if (anchorProps && (type === 'add' || type === 'danger')) {
    throw new Error(`Menu link item '${value}' can't use type '${type}'`);
  }
  const {
    ref: _itemRef,
    ...itemProps
  } = getItemProps({
    item,
    onClick,
    onKeyDown,
    onMouseEnter
  });
  const contextValue = useMemo(() => ({
    isDisabled,
    type
  }), [isDisabled, type]);
  const itemChildren = React__default.createElement(React__default.Fragment, null, React__default.createElement(StyledItemTypeIcon, {
    $isCompact: isCompact,
    $type: type
  }, renderActionIcon(type)), !!icon && React__default.createElement(StyledItemIcon, {
    $isDisabled: isDisabled,
    $type: type
  }, icon), React__default.createElement(StyledItemContent, null, children || label));
  const menuItemProps = {
    ...other,
    ...itemProps,
    ref: mergeRefs([_itemRef, ref])
  };
  return React__default.createElement(ItemContext.Provider, {
    value: contextValue
  }, anchorProps ? React__default.createElement("li", menuItemProps, React__default.createElement(StyledItemAnchor, Object.assign({
    $isCompact: isCompact,
    $isActive: value === focusedValue
  }, anchorProps), itemChildren)) : React__default.createElement(StyledItem, Object.assign({
    $isCompact: isCompact,
    $isActive: value === focusedValue,
    $type: type
  }, menuItemProps), itemChildren));
});
ItemComponent.displayName = 'Item';
ItemComponent.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.any,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  isExternal: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(OPTION_TYPE),
  value: PropTypes.string.isRequired
};
const Item = ItemComponent;
Item.Meta = ItemMeta;

export { Item };
