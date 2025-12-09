/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { useText, DEFAULT_THEME, useDocument } from '@zendeskgarden/react-theming';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import useComboboxContext from '../../context/useComboboxContext.js';
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
import { StyledTag } from '../../views/combobox/StyledTag.js';
import '../../views/combobox/StyledTagsButton.js';
import '../../views/combobox/StyledTrigger.js';
import '../../views/combobox/StyledValue.js';
import '../../views/menu/StyledMenu.js';
import '../../views/menu/StyledFloatingMenu.js';
import '../../views/menu/StyledItem.js';
import '../../views/menu/StyledItemAnchor.js';
import '../../views/menu/StyledItemContent.js';
import '../../views/menu/StyledItemGroup.js';
import '../../views/menu/StyledItemIcon.js';
import '../../views/menu/StyledItemMeta.js';
import '../../views/menu/StyledItemTypeIcon.js';
import '../../views/menu/StyledSeparator.js';
import { TagAvatar } from './TagAvatar.js';

const TagComponent = forwardRef(({
  children,
  option,
  removeLabel,
  tooltipZIndex,
  ...props
}, ref) => {
  const {
    getTagProps,
    isCompact,
    removeSelection
  } = useComboboxContext();
  const text = option.label || option.value;
  const ariaLabel = useText(
  Tag, props, 'aria-label', `${text}, press delete or backspace to remove`, !option.disabled);
  const tagProps = getTagProps({
    option,
    'aria-label': ariaLabel
  });
  const theme = useContext(ThemeContext) || DEFAULT_THEME;
  const doc = useDocument(theme);
  const handleClick = () => removeSelection(option.value);
  return React__default.createElement(StyledTag, Object.assign({
    "aria-disabled": option.disabled,
    tabIndex: option.disabled ? undefined : 0
  }, tagProps, props, {
    size: isCompact ? 'medium' : 'large',
    ref: ref
  }), children || React__default.createElement("span", null, text), !option.disabled && (removeLabel ?
  React__default.createElement(Tooltip, {
    appendToNode: doc?.body,
    content: removeLabel,
    zIndex: tooltipZIndex
  }, React__default.createElement(StyledTag.Close, {
    "aria-label": removeLabel,
    onClick: handleClick
  })) : React__default.createElement(StyledTag.Close, {
    onClick: handleClick
  })));
});
TagComponent.displayName = 'Tag';
TagComponent.propTypes = {
  hue: PropTypes.string,
  isPill: PropTypes.bool,
  isRegular: PropTypes.bool,
  removeLabel: PropTypes.string
};
const Tag = TagComponent;
Tag.Avatar = TagAvatar;

export { Tag };
