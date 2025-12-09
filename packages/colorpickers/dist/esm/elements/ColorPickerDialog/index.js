/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useRef, useState, useEffect, cloneElement, Children } from 'react';
import { useTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '@zendeskgarden/react-buttons';
import { PLACEMENT } from '@zendeskgarden/react-modals';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import SvgChevronDownStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg.js';
import { ColorPicker } from '../ColorPicker/index.js';
import '../../styled/ColorPicker/StyledColorPicker.js';
import '../../styled/ColorPicker/StyledHueRange.js';
import '../../styled/ColorPicker/StyledAlphaRange.js';
import '../../styled/ColorPicker/StyledPreview.js';
import '../../styled/ColorPicker/StyledColorWell.js';
import '../../styled/ColorPicker/StyledColorWellThumb.js';
import '../../styled/ColorPicker/StyledSliderGroup.js';
import '../../styled/ColorPicker/StyledHexField.js';
import '../../styled/ColorPicker/StyledLabel.js';
import '../../styled/ColorPicker/StyledInput.js';
import '../../styled/ColorPicker/StyledInputGroup.js';
import '../../styled/ColorPicker/StyledRGBAField.js';
import '../../styled/ColorPicker/StyledSliders.js';
import { StyledButton } from '../../styled/ColorPickerDialog/StyledButton.js';
import { StyledButtonPreview } from '../../styled/ColorPickerDialog/StyledButtonPreview.js';
import { StyledTooltipDialog } from '../../styled/ColorPickerDialog/StyledTooltipDialog.js';
import { StyledTooltipBody } from '../../styled/ColorPickerDialog/StyledTooltipBody.js';
import '../../styled/ColorSwatch/StyledColorSwatch.js';
import '../../styled/ColorSwatch/StyledColorSwatchInput.js';
import '../../styled/ColorSwatch/StyledColorSwatchLabel.js';
import '../../styled/ColorSwatch/StyledIcon.js';
import '../../styled/ColorSwatch/StyledCell.js';
import { useText, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const ColorPickerDialog = forwardRef((_ref, ref) => {
  let {
    color,
    defaultColor,
    placement = 'bottom-start',
    onChange,
    onClose,
    labels,
    hasArrow = false,
    isAnimated = true,
    isOpaque,
    isOpen,
    zIndex = 1000,
    focusInset,
    disabled,
    buttonProps,
    onDialogChange,
    'aria-label': ariaLabel,
    children,
    ...props
  } = _ref;
  const isControlled = color !== null && color !== undefined;
  const isDialogControlled = isOpen !== undefined && isOpen !== null;
  const buttonRef = useRef(null);
  const colorPickerRef = useRef(null);
  const [referenceElement, setReferenceElement] = useState();
  const [uncontrolledColor, setUncontrolledColor] = useState(defaultColor);
  const ariaLabelText = useText(ColorPickerDialog, {
    'aria-label': ariaLabel
  }, 'aria-label', 'Color picker');
  const theme = useTheme() || DEFAULT_THEME;
  const openDialog = () => {
    setReferenceElement(buttonRef.current);
    onDialogChange && onDialogChange({
      isOpen: true
    });
  };
  const closeDialog = () => {
    setReferenceElement(null);
    onDialogChange && onDialogChange({
      isOpen: false
    });
  };
  const onClick = composeEventHandlers(props.onClick, () => {
    if (referenceElement) {
      closeDialog();
    } else {
      openDialog();
    }
  });
  useEffect(() => {
    if (isDialogControlled) {
      if (isOpen) {
        setReferenceElement(buttonRef.current);
      } else {
        setReferenceElement(null);
      }
    }
  }, [isOpen, isDialogControlled]);
  return React__default.createElement(React__default.Fragment, null, children ? (cloneElement(Children.only(children), {
    onClick,
    ref: buttonRef
  })) : React__default.createElement(StyledButton, Object.assign({
    disabled: disabled,
    focusInset: focusInset,
    ref: buttonRef,
    onClick: onClick
  }, buttonProps), React__default.createElement(StyledButtonPreview, {
    $backgroundColor: isControlled ? color : uncontrolledColor
  }), React__default.createElement(Button.EndIcon, {
    isRotated: referenceElement != null
  }, React__default.createElement(SvgChevronDownStroke, null))), React__default.createElement(StyledTooltipDialog, Object.assign({
    ref: ref,
    hasArrow: hasArrow,
    zIndex: zIndex,
    isAnimated: isAnimated,
    focusOnMount: false,
    placement: placement,
    offset: theme.space.base,
    referenceElement: referenceElement,
    onClose: () => {
      closeDialog();
      onClose && onClose(isControlled ? color : uncontrolledColor);
    },
    "aria-label": ariaLabelText
  }, props), React__default.createElement(StyledTooltipBody, null, React__default.createElement(ColorPicker, {
    autofocus: true,
    color: color,
    isOpaque: isOpaque,
    labels: labels,
    ref: colorPickerRef,
    defaultColor: uncontrolledColor,
    onChange: isControlled ? onChange : setUncontrolledColor
  }))));
});
ColorPickerDialog.propTypes = {
  ...ColorPicker.propTypes,
  placement: PropTypes.oneOf(PLACEMENT),
  onClose: PropTypes.func,
  onDialogChange: PropTypes.func,
  disabled: PropTypes.bool,
  labels: PropTypes.object,
  buttonProps: PropTypes.object,
  zIndex: PropTypes.number,
  hasArrow: PropTypes.bool,
  isAnimated: PropTypes.bool,
  isOpen: PropTypes.bool,
  focusInset: PropTypes.bool
};
ColorPickerDialog.displayName = 'ColorPickerDialog';

export { ColorPickerDialog };
