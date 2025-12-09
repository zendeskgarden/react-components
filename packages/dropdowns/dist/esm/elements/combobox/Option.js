/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useMemo, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { mergeRefs } from 'react-merge-refs';
import SvgPlusStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/plus-stroke.svg.js';
import SvgChevronRightStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg.js';
import SvgChevronLeftStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg.js';
import SvgCheckLgStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/check-lg-stroke.svg.js';
import SvgCircleSmFill from '../../node_modules/@zendeskgarden/svg-icons/src/12/circle-sm-fill.svg.js';
import { OPTION_TYPE } from '../../types/index.js';
import useComboboxContext from '../../context/useComboboxContext.js';
import { OptionContext } from '../../context/useOptionContext.js';
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
import { StyledOption } from '../../views/combobox/StyledOption.js';
import { StyledOptionContent } from '../../views/combobox/StyledOptionContent.js';
import { StyledOptionIcon } from '../../views/combobox/StyledOptionIcon.js';
import '../../views/combobox/StyledOptionMeta.js';
import { StyledOptionSelectionIcon } from '../../views/combobox/StyledOptionSelectionIcon.js';
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
import { OptionMeta } from './OptionMeta.js';
import { toOption } from './utils.js';

const OptionComponent = forwardRef(({
  children,
  hasSelection,
  icon,
  isDisabled,
  isHidden,
  isSelected,
  label,
  type,
  value,
  tagProps,
  ...props
}, ref) => {
  const contextValue = useMemo(() => ({
    isDisabled,
    type
  }), [isDisabled, type]);
  const {
    activeValue,
    getOptionProps,
    isCompact
  } = useComboboxContext();
  const isActive = value === activeValue;
  const optionRef = useRef(null);
  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        if (optionRef.current && optionRef.current.scrollIntoView) {
          optionRef.current.scrollIntoView({
            block: 'nearest'
          });
        }
      });
    }
  }, [isActive]);
  const renderActionIcon = iconType => {
    switch (iconType) {
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
  const option = toOption({
    value,
    label,
    isDisabled,
    isHidden,
    isSelected
  });
  const optionProps = getOptionProps({
    option,
    ref: mergeRefs([optionRef, ref])
  });
  return React__default.createElement(OptionContext.Provider, {
    value: contextValue
  }, React__default.createElement(StyledOption, Object.assign({
    $isActive: isActive,
    $isCompact: isCompact,
    $type: type
  }, props, optionProps), !!hasSelection && type === 'next' && React__default.createElement(StyledOptionSelectionIcon, {
    $isCompact: isCompact
  }, React__default.createElement(SvgCircleSmFill, null)), React__default.createElement(StyledOptionTypeIcon, {
    $isCompact: isCompact,
    $type: type
  }, renderActionIcon(type)), !!icon && React__default.createElement(StyledOptionIcon, {
    $isDisabled: isDisabled,
    $type: type
  }, icon), React__default.createElement(StyledOptionContent, null, children || label || value)));
});
OptionComponent.displayName = 'Option';
OptionComponent.propTypes = {
  hasSelection: PropTypes.bool,
  icon: PropTypes.any,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  isHidden: PropTypes.bool,
  label: PropTypes.string,
  tagProps: PropTypes.object,
  type: PropTypes.oneOf(OPTION_TYPE),
  value: PropTypes.string.isRequired
};
const Option = OptionComponent;
Option.Meta = OptionMeta;

export { Option };
