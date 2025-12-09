/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { useText } from '@zendeskgarden/react-theming';
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
import { StyledListboxSeparator } from '../../views/combobox/StyledListboxSeparator.js';
import '../../views/combobox/StyledMessage.js';
import { StyledOptGroup } from '../../views/combobox/StyledOptGroup.js';
import { StyledOption } from '../../views/combobox/StyledOption.js';
import { StyledOptionContent } from '../../views/combobox/StyledOptionContent.js';
import '../../views/combobox/StyledOptionIcon.js';
import '../../views/combobox/StyledOptionMeta.js';
import '../../views/combobox/StyledOptionSelectionIcon.js';
import { StyledOptionTypeIcon } from '../../views/combobox/StyledOptionTypeIcon.js';
import '../../views/combobox/StyledTag.js';
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

const OptGroup = forwardRef((_ref, ref) => {
  let {
    children,
    content,
    icon,
    legend,
    'aria-label': ariaLabel,
    onMouseDown,
    ...props
  } = _ref;
  const {
    getOptGroupProps,
    isCompact
  } = useComboboxContext();
  const handleMouseDown = event => event.preventDefault();
  const groupAriaLabel = useText(OptGroup, {
    'aria-label': ariaLabel
  }, 'aria-label', 'Group', !legend );
  const optGroupProps = getOptGroupProps({
    'aria-label': groupAriaLabel || legend
  });
  return React__default.createElement(StyledOption, Object.assign({
    $isCompact: isCompact,
    $type: "group",
    onMouseDown: composeEventHandlers(onMouseDown, handleMouseDown),
    role: "none"
  }, props, {
    ref: ref
  }), React__default.createElement(StyledOptionContent, null, !!(content || legend) && React__default.createElement(StyledOption, {
    as: "div",
    $isCompact: isCompact,
    $type: "header"
  }, !!icon && React__default.createElement(StyledOptionTypeIcon, {
    $isCompact: isCompact,
    $type: "header"
  }, icon), content || legend), React__default.createElement(StyledOptGroup, Object.assign({
    $isCompact: isCompact
  }, optGroupProps), React__default.createElement(StyledListboxSeparator, {
    role: "none"
  }), children)));
});
OptGroup.displayName = 'OptGroup';
OptGroup.propTypes = {
  content: PropTypes.any,
  icon: PropTypes.any,
  legend: PropTypes.string
};

export { OptGroup };
