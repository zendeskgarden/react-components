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
import { DEFAULT_THEME, useText } from '@zendeskgarden/react-theming';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import SvgChevronDownStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg.js';
import { ColorSwatch } from '../ColorSwatch/index.js';
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

const ColorSwatchDialog = forwardRef((_ref, ref) => {
  let {
    name,
    colors,
    isCheckboxGroup,
    selectedRowIndex,
    selectedColIndex,
    defaultSelectedRowIndex,
    defaultSelectedColIndex,
    placement = 'bottom-start',
    onSelect,
    hasArrow = false,
    isAnimated = true,
    zIndex = 1000,
    isOpen,
    focusInset,
    disabled,
    buttonProps,
    onDialogChange,
    children,
    'aria-label': ariaLabel,
    ...props
  } = _ref;
  const isControlled = selectedRowIndex !== undefined && selectedColIndex !== undefined;
  const isDialogControlled = isOpen !== undefined && isOpen !== null;
  const buttonRef = useRef(null);
  const colorSwatchRef = useRef(null);
  const [referenceElement, setReferenceElement] = useState(null);
  const [rowIndex, setRowIndex] = useState(defaultSelectedRowIndex);
  const [colIndex, setColIndex] = useState(defaultSelectedColIndex);
  const theme = useTheme() || DEFAULT_THEME;
  let backgroundColor;
  if (isControlled) {
    if (selectedRowIndex !== null && selectedColIndex !== null) {
      backgroundColor = colors[selectedRowIndex][selectedColIndex].value;
    }
  } else if (rowIndex !== undefined && colIndex !== undefined) {
    backgroundColor = colors[rowIndex][colIndex].value;
  }
  const ariaLabelText = useText(ColorSwatchDialog, {
    'aria-label': ariaLabel
  }, 'aria-label', 'Color swatch');
  useEffect(() => {
    if (isDialogControlled) {
      if (isOpen) {
        setReferenceElement(buttonRef.current);
      } else {
        setReferenceElement(null);
      }
    }
  }, [isOpen, isDialogControlled]);
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
    if (referenceElement && colorSwatchRef.current) {
      const input = colorSwatchRef.current.querySelector('[tabindex="0"]');
      input?.focus();
    }
  }, [referenceElement]);
  const handleSelect = (row, col) => {
    if (isControlled === false) {
      if (row === null || col === null) {
        setRowIndex(undefined);
        setColIndex(undefined);
      } else {
        setRowIndex(row);
        setColIndex(col);
      }
    }
    onSelect && onSelect(row, col);
  };
  return React__default.createElement(React__default.Fragment, null, children ? (cloneElement(Children.only(children), {
    onClick,
    ref: buttonRef
  })) : React__default.createElement(StyledButton, Object.assign({
    disabled: disabled,
    focusInset: focusInset,
    ref: buttonRef,
    onClick: onClick
  }, buttonProps), React__default.createElement(StyledButtonPreview, {
    $backgroundColor: backgroundColor
  }), React__default.createElement(Button.EndIcon, {
    isRotated: referenceElement !== null
  }, React__default.createElement(SvgChevronDownStroke, null))), React__default.createElement(StyledTooltipDialog, Object.assign({
    ref: ref,
    zIndex: zIndex,
    hasArrow: hasArrow,
    focusOnMount: false,
    placement: placement,
    offset: theme.space.base,
    isAnimated: isAnimated,
    referenceElement: referenceElement,
    onClose: closeDialog,
    "aria-label": ariaLabelText
  }, props), React__default.createElement(StyledTooltipBody, null, React__default.createElement(ColorSwatch, {
    name: name,
    colors: colors,
    ref: colorSwatchRef,
    isCheckboxGroup: isCheckboxGroup,
    selectedRowIndex: selectedRowIndex,
    selectedColIndex: selectedColIndex,
    defaultSelectedRowIndex: rowIndex,
    defaultSelectedColIndex: colIndex,
    onSelect: handleSelect
  }))));
});
ColorSwatchDialog.propTypes = {
  ...ColorSwatch.propTypes,
  placement: PropTypes.oneOf(PLACEMENT),
  onDialogChange: PropTypes.func,
  disabled: PropTypes.bool,
  buttonProps: PropTypes.object,
  zIndex: PropTypes.number,
  hasArrow: PropTypes.bool,
  isAnimated: PropTypes.bool,
  focusInset: PropTypes.bool,
  isOpen: PropTypes.bool
};
ColorSwatchDialog.displayName = 'ColorSwatchDialog';

export { ColorSwatchDialog };
