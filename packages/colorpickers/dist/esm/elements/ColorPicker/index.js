/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useReducer, useRef, useMemo, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Field } from '@zendeskgarden/react-forms';
import { ColorWell } from './ColorWell.js';
import { StyledColorPicker } from '../../styled/ColorPicker/StyledColorPicker.js';
import { StyledHueRange } from '../../styled/ColorPicker/StyledHueRange.js';
import { StyledAlphaRange } from '../../styled/ColorPicker/StyledAlphaRange.js';
import { StyledPreview } from '../../styled/ColorPicker/StyledPreview.js';
import '../../styled/ColorPicker/StyledColorWell.js';
import '../../styled/ColorPicker/StyledColorWellThumb.js';
import { StyledSliderGroup } from '../../styled/ColorPicker/StyledSliderGroup.js';
import { StyledHexField } from '../../styled/ColorPicker/StyledHexField.js';
import { StyledLabel } from '../../styled/ColorPicker/StyledLabel.js';
import { StyledInput } from '../../styled/ColorPicker/StyledInput.js';
import { StyledInputGroup } from '../../styled/ColorPicker/StyledInputGroup.js';
import { StyledRGBAField } from '../../styled/ColorPicker/StyledRGBAField.js';
import { StyledSliders } from '../../styled/ColorPicker/StyledSliders.js';
import '../../styled/ColorPickerDialog/StyledButton.js';
import '../../styled/ColorPickerDialog/StyledButtonPreview.js';
import '../../styled/ColorPickerDialog/StyledTooltipDialog.js';
import '../../styled/ColorPickerDialog/StyledTooltipBody.js';
import '../../styled/ColorSwatch/StyledColorSwatch.js';
import '../../styled/ColorSwatch/StyledColorSwatchInput.js';
import '../../styled/ColorSwatch/StyledColorSwatchLabel.js';
import '../../styled/ColorSwatch/StyledIcon.js';
import '../../styled/ColorSwatch/StyledCell.js';
import { reducer, getInitialState, convertStringToColor, areColorsEqual } from './reducer.js';

const ColorPicker = forwardRef(({
  color,
  defaultColor = '#fff',
  isOpaque,
  labels = {},
  autofocus,
  onChange,
  ...props
}, ref) => {
  const [state, dispatch] = useReducer(reducer, getInitialState(color || defaultColor));
  const previousComputedColorRef = useRef(state.color);
  const previousStateColorRef = useRef(state.color);
  const computedColor = useMemo(() => {
    let retVal = state.color;
    if (color) {
      if (typeof color === 'string') {
        const convertedColor = convertStringToColor(color);
        if (convertedColor) {
          retVal = convertedColor;
        }
      } else {
        retVal = color;
      }
    }
    if (isOpaque) {
      retVal.alpha = 100;
    }
    if (areColorsEqual(retVal, previousComputedColorRef.current)) {
      return previousComputedColorRef.current;
    }
    return retVal;
  }, [color, isOpaque, state.color]);
  useEffect(() => {
    if (!areColorsEqual(previousStateColorRef.current, state.color) && !areColorsEqual(color, state.color)) {
      onChange && onChange(state.color);
    }
    previousStateColorRef.current = state.color;
  }, [color, onChange, state.color]);
  if (previousComputedColorRef.current !== computedColor) {
    dispatch({
      type: 'RESET_COLOR',
      payload: computedColor
    });
    previousComputedColorRef.current = computedColor;
  }
  const handleColorWellChange = useCallback(hsv => {
    dispatch({
      type: 'SATURATION_CHANGE',
      payload: hsv
    });
  }, []);
  const handleHueChange = useCallback(e => {
    dispatch({
      type: 'HUE_CHANGE',
      payload: e.target.value
    });
  }, []);
  const handleAlphaSliderChange = useCallback(e => {
    dispatch({
      type: 'ALPHA_SLIDER_CHANGE',
      payload: e.target.value
    });
  }, []);
  const handleHexChange = useCallback(e => {
    dispatch({
      type: 'HEX_CHANGE',
      payload: e.target.value
    });
  }, []);
  const handleRedChange = useCallback(e => {
    dispatch({
      type: 'RED_CHANGE',
      payload: e.target.value
    });
  }, []);
  const handleGreenChange = useCallback(e => {
    dispatch({
      type: 'GREEN_CHANGE',
      payload: e.target.value
    });
  }, []);
  const handleBlueChange = useCallback(e => {
    dispatch({
      type: 'BLUE_CHANGE',
      payload: e.target.value
    });
  }, []);
  const handleAlphaChange = useCallback(e => {
    dispatch({
      type: 'ALPHA_CHANGE',
      payload: e.target.value
    });
  }, []);
  const handleBlur = useCallback(() => {
    dispatch({
      type: 'RESET_COLOR',
      payload: computedColor
    });
  }, [computedColor]);
  return React__default.createElement(StyledColorPicker, Object.assign({
    ref: ref,
    $isOpaque: isOpaque
  }, props), React__default.createElement(ColorWell, {
    hue: computedColor.hue,
    saturation: computedColor.saturation,
    lightness: computedColor.lightness,
    onChange: handleColorWellChange
  }), React__default.createElement(StyledSliderGroup, null, React__default.createElement(StyledPreview, {
    $red: computedColor.red,
    $green: computedColor.green,
    $blue: computedColor.blue,
    $alpha: computedColor.alpha,
    $isOpaque: isOpaque
  }), React__default.createElement(StyledSliders, {
    $isOpaque: isOpaque
  }, React__default.createElement(Field, null, React__default.createElement(Field.Label, {
    hidden: true
  }, labels.hueSlider || 'Hue slider'), React__default.createElement(StyledHueRange, {
    step: 1,
    max: 360,
    value: computedColor.hue,
    $isOpaque: isOpaque,
    onChange: handleHueChange
  })), !isOpaque && React__default.createElement(Field, null, React__default.createElement(Field.Label, {
    hidden: true
  }, labels.alphaSlider || 'Alpha slider'), React__default.createElement(StyledAlphaRange, {
    max: 1,
    step: 0.01,
    value: computedColor.alpha / 100,
    onChange: handleAlphaSliderChange,
    $red: computedColor.red,
    $green: computedColor.green,
    $blue: computedColor.blue
  })))), React__default.createElement(StyledInputGroup, null, React__default.createElement(StyledHexField, null, React__default.createElement(StyledLabel, {
    isRegular: true
  }, labels.hex || 'Hex'), React__default.createElement(StyledInput, {
    isCompact: true,
    maxLength: 7,
    value: state.hexInput
    ,
    autoFocus: autofocus,
    spellCheck: false,
    onBlur: handleBlur,
    onChange: handleHexChange
  })), React__default.createElement(StyledRGBAField, null, React__default.createElement(StyledLabel, {
    isRegular: true
  }, labels.red || 'R'), React__default.createElement(StyledInput, {
    isCompact: true,
    type: "number",
    min: "0",
    max: "255",
    maxLength: 3,
    value: state.redInput,
    onBlur: handleBlur,
    onChange: handleRedChange
  })), React__default.createElement(StyledRGBAField, null, React__default.createElement(StyledLabel, {
    isRegular: true
  }, labels.green || 'G'), React__default.createElement(StyledInput, {
    isCompact: true,
    type: "number",
    min: "0",
    max: "255",
    maxLength: 3,
    value: state.greenInput,
    onBlur: handleBlur,
    onChange: handleGreenChange
  })), React__default.createElement(StyledRGBAField, null, React__default.createElement(StyledLabel, {
    isRegular: true
  }, labels.blue || 'B'), React__default.createElement(StyledInput, {
    isCompact: true,
    type: "number",
    min: "0",
    max: "255",
    maxLength: 3,
    value: state.blueInput,
    onBlur: handleBlur,
    onChange: handleBlueChange
  })), !isOpaque && React__default.createElement(StyledRGBAField, null, React__default.createElement(StyledLabel, {
    isRegular: true
  }, labels.alpha || 'A'), React__default.createElement(StyledInput, {
    isCompact: true,
    type: "number",
    min: "0",
    max: "100",
    value: state.alphaInput,
    onBlur: handleBlur,
    onChange: handleAlphaChange
  }))));
});
ColorPicker.displayName = 'ColorPicker';
ColorPicker.propTypes = {
  color: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  isOpaque: PropTypes.bool,
  onChange: PropTypes.func,
  labels: PropTypes.object,
  defaultColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export { ColorPicker };
