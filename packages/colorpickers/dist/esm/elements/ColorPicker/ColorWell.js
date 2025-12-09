/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useContext, useRef, useState, useEffect, useMemo, useCallback } from 'react';
import throttle from 'lodash.throttle';
import { ThemeContext } from 'styled-components';
import { hslToHsv } from '../../utils/conversion.js';
import { getThumbPosition, getNextHsv } from '../../utils/saturation.js';
import '../../styled/ColorPicker/StyledColorPicker.js';
import '../../styled/ColorPicker/StyledHueRange.js';
import '../../styled/ColorPicker/StyledAlphaRange.js';
import '../../styled/ColorPicker/StyledPreview.js';
import { StyledColorWell } from '../../styled/ColorPicker/StyledColorWell.js';
import { StyledColorWellThumb } from '../../styled/ColorPicker/StyledColorWellThumb.js';
import '../../styled/ColorPicker/StyledSliderGroup.js';
import '../../styled/ColorPicker/StyledHexField.js';
import '../../styled/ColorPicker/StyledLabel.js';
import '../../styled/ColorPicker/StyledInput.js';
import '../../styled/ColorPicker/StyledInputGroup.js';
import '../../styled/ColorPicker/StyledRGBAField.js';
import '../../styled/ColorPicker/StyledSliders.js';
import '../../styled/ColorPickerDialog/StyledButton.js';
import '../../styled/ColorPickerDialog/StyledButtonPreview.js';
import '../../styled/ColorPickerDialog/StyledTooltipDialog.js';
import '../../styled/ColorPickerDialog/StyledTooltipBody.js';
import '../../styled/ColorSwatch/StyledColorSwatch.js';
import '../../styled/ColorSwatch/StyledColorSwatchInput.js';
import '../../styled/ColorSwatch/StyledColorSwatchLabel.js';
import '../../styled/ColorSwatch/StyledIcon.js';
import '../../styled/ColorSwatch/StyledCell.js';

const ColorWell = React__default.memo(_ref => {
  let {
    hue,
    saturation,
    lightness,
    onChange
  } = _ref;
  const {
    rtl
  } = useContext(ThemeContext);
  const containerRef = useRef(null);
  const hsv = hslToHsv(hue, saturation, lightness);
  const mouseActiveRef = useRef(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const {
    topFromMouse,
    leftFromMouse
  } = getThumbPosition(x, y, rtl, containerRef);
  const [topPosition, setTopPosition] = useState(0);
  const [leftPosition, setLeftPosition] = useState(0);
  useEffect(() => {
    setTopPosition(100 - hsv.v);
    setLeftPosition(rtl ? 100 - hsv.s : hsv.s);
  }, [hsv.s, hsv.v, rtl]);
  const throttledChange = useMemo(() => {
    return throttle(e => {
      if (containerRef.current) {
        const nextHsv = getNextHsv(e, hue, containerRef.current, rtl);
        onChange && onChange(nextHsv, e);
      }
    }, 50);
  }, [hue, rtl, onChange]);
  const handleMouseMove = useCallback(e => {
    mouseActiveRef.current = true;
    setX(e.pageX);
    setY(e.pageY);
    throttledChange(e);
  }, [throttledChange]);
  const handleMouseUp = useCallback(() => {
    mouseActiveRef.current = true;
    setTimeout(() => {
      mouseActiveRef.current = false;
    });
    throttledChange.cancel();
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  }, [throttledChange, handleMouseMove]);
  const handleMouseDown = useCallback(e => {
    mouseActiveRef.current = true;
    e.persist();
    handleMouseMove(e);
    throttledChange(e);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }, [throttledChange, handleMouseMove, handleMouseUp]);
  useEffect(() => {
    return () => {
      throttledChange.cancel();
    };
  }, [throttledChange]);
  return (
    React__default.createElement(StyledColorWell, {
      $hue: hue,
      ref: containerRef,
      role: "presentation",
      onMouseDown: handleMouseDown
    }, React__default.createElement(StyledColorWellThumb, {
      $top: mouseActiveRef.current ? topFromMouse : topPosition,
      $left: mouseActiveRef.current ? leftFromMouse : leftPosition
    }))
  );
});
ColorWell.displayName = 'ColorWell';

export { ColorWell };
