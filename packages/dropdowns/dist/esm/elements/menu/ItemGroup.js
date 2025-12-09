/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useText } from '@zendeskgarden/react-theming';
import useMenuContext from '../../context/useMenuContext.js';
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
import '../../views/menu/StyledItemAnchor.js';
import { StyledItemContent } from '../../views/menu/StyledItemContent.js';
import { StyledItemGroup } from '../../views/menu/StyledItemGroup.js';
import '../../views/menu/StyledItemIcon.js';
import '../../views/menu/StyledItemMeta.js';
import { StyledItemTypeIcon } from '../../views/menu/StyledItemTypeIcon.js';
import { StyledSeparator } from '../../views/menu/StyledSeparator.js';
import { ItemGroupContext } from '../../context/useItemGroupContext.js';

const ItemGroup = forwardRef((_ref, ref) => {
  let {
    children,
    content,
    legend,
    icon,
    'aria-label': ariaLabel,
    type,
    ...props
  } = _ref;
  const {
    isCompact,
    getItemGroupProps
  } = useMenuContext();
  const groupAriaLabel = useText(ItemGroup, {
    'aria-label': ariaLabel
  }, 'aria-label', 'Group', !legend );
  const groupProps = getItemGroupProps({
    'aria-label': groupAriaLabel || legend
  });
  const contextValue = useMemo(() => ({
    type
  }), [type]);
  return React__default.createElement(ItemGroupContext.Provider, {
    value: contextValue
  }, React__default.createElement(StyledItem, Object.assign({
    $isCompact: isCompact,
    $type: "group"
  }, props, {
    role: "none",
    ref: ref
  }), React__default.createElement(StyledItemContent, null, !!(content || legend) && React__default.createElement(StyledItem, {
    as: "div",
    $isCompact: isCompact,
    $type: "header"
  }, !!icon && React__default.createElement(StyledItemTypeIcon, {
    $isCompact: isCompact,
    $type: "header"
  }, icon), content || legend), React__default.createElement(StyledItemGroup, Object.assign({
    $isCompact: isCompact
  }, groupProps), React__default.createElement(StyledSeparator, {
    role: "none"
  }), children))));
});
ItemGroup.displayName = 'ItemGroup';
ItemGroup.propTypes = {
  content: PropTypes.any,
  icon: PropTypes.any,
  legend: PropTypes.string,
  type: PropTypes.oneOf(['checkbox', 'radio', undefined])
};

export { ItemGroup };
