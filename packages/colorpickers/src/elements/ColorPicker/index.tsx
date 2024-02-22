/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useCallback, useReducer, forwardRef, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { Field, Label } from '@zendeskgarden/react-forms';
import { ColorWell } from './ColorWell';
import {
  StyledHueRange,
  StyledSliderGroup,
  StyledLabel,
  StyledInput,
  StyledAlphaRange,
  StyledSliders,
  StyledHexField,
  StyledRGBAField,
  StyledInputGroup,
  StyledPreview,
  StyledColorPicker
} from '../../styled';
import { areColorsEqual, convertStringToColor, getInitialState, reducer } from './reducer';
import { IColor, IColorPickerProps, IHSVColor } from '../../types';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const ColorPicker = forwardRef<HTMLDivElement, IColorPickerProps>(
  ({ color, defaultColor, isOpaque, labels = {}, autofocus, onChange, ...props }, ref) => {
    const [state, dispatch] = useReducer(reducer, getInitialState(color || defaultColor));
    const previousComputedColorRef = useRef<IColor>(state.color);
    const previousStateColorRef = useRef<IColor>(state.color);

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
      if (
        !areColorsEqual(previousStateColorRef.current, state.color) &&
        !areColorsEqual(color, state.color)
      ) {
        onChange && onChange(state.color);
      }

      previousStateColorRef.current = state.color;
    }, [color, onChange, state.color]);

    if (previousComputedColorRef.current !== computedColor) {
      dispatch({ type: 'RESET_COLOR', payload: computedColor });

      previousComputedColorRef.current = computedColor;
    }

    const handleColorWellChange = useCallback((hsv: IHSVColor) => {
      dispatch({
        type: 'SATURATION_CHANGE',
        payload: hsv
      });
    }, []);

    const handleHueChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'HUE_CHANGE', payload: e.target.value });
    }, []);

    const handleAlphaSliderChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'ALPHA_SLIDER_CHANGE', payload: e.target.value });
    }, []);

    const handleHexChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'HEX_CHANGE', payload: e.target.value });
    }, []);

    const handleRedChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'RED_CHANGE', payload: e.target.value });
    }, []);

    const handleGreenChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'GREEN_CHANGE', payload: e.target.value });
    }, []);

    const handleBlueChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'BLUE_CHANGE', payload: e.target.value });
    }, []);

    const handleAlphaChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'ALPHA_CHANGE', payload: e.target.value });
    }, []);

    const handleBlur = useCallback(() => {
      dispatch({ type: 'RESET_COLOR', payload: computedColor });
    }, [computedColor]);

    return (
      <StyledColorPicker ref={ref} isOpaque={isOpaque} {...props}>
        <ColorWell
          hue={computedColor.hue}
          saturation={computedColor.saturation}
          lightness={computedColor.lightness}
          onChange={handleColorWellChange}
        />
        <StyledSliderGroup>
          <StyledPreview
            red={computedColor.red}
            green={computedColor.green}
            blue={computedColor.blue}
            alpha={computedColor.alpha}
            isOpaque={isOpaque}
          />
          <StyledSliders isOpaque={isOpaque}>
            <Field>
              <Label hidden>{labels.hueSlider || 'Hue slider'}</Label>
              <StyledHueRange
                step={1}
                max={360}
                value={computedColor.hue}
                isOpaque={isOpaque}
                onChange={handleHueChange}
              />
            </Field>
            {!isOpaque && (
              <Field>
                <Label hidden>{labels.alphaSlider || 'Alpha slider'}</Label>
                <StyledAlphaRange
                  max={1}
                  step={0.01}
                  value={computedColor.alpha / 100}
                  onChange={handleAlphaSliderChange}
                  red={computedColor.red}
                  green={computedColor.green}
                  blue={computedColor.blue}
                />
              </Field>
            )}
          </StyledSliders>
        </StyledSliderGroup>
        <StyledInputGroup>
          <StyledHexField>
            <StyledLabel isRegular>{labels.hex || 'Hex'}</StyledLabel>
            <StyledInput
              isCompact
              maxLength={7}
              value={state.hexInput}
              /* eslint-disable jsx-a11y/no-autofocus */
              autoFocus={autofocus}
              spellCheck={false}
              onBlur={handleBlur}
              onChange={handleHexChange}
            />
          </StyledHexField>
          <StyledRGBAField>
            <StyledLabel isRegular>{labels.red || 'R'}</StyledLabel>
            <StyledInput
              isCompact
              type="number"
              min="0"
              max="255"
              maxLength={3}
              value={state.redInput}
              onBlur={handleBlur}
              onChange={handleRedChange}
            />
          </StyledRGBAField>
          <StyledRGBAField>
            <StyledLabel isRegular>{labels.green || 'G'}</StyledLabel>
            <StyledInput
              isCompact
              type="number"
              min="0"
              max="255"
              maxLength={3}
              value={state.greenInput}
              onBlur={handleBlur}
              onChange={handleGreenChange}
            />
          </StyledRGBAField>
          <StyledRGBAField>
            <StyledLabel isRegular>{labels.blue || 'B'}</StyledLabel>
            <StyledInput
              isCompact
              type="number"
              min="0"
              max="255"
              maxLength={3}
              value={state.blueInput}
              onBlur={handleBlur}
              onChange={handleBlueChange}
            />
          </StyledRGBAField>
          {!isOpaque && (
            <StyledRGBAField>
              <StyledLabel isRegular>{labels.alpha || 'A'}</StyledLabel>
              <StyledInput
                isCompact
                type="number"
                min="0"
                max="100"
                value={state.alphaInput}
                onBlur={handleBlur}
                onChange={handleAlphaChange}
              />
            </StyledRGBAField>
          )}
        </StyledInputGroup>
      </StyledColorPicker>
    );
  }
);

ColorPicker.defaultProps = {
  defaultColor: '#fff'
};

ColorPicker.displayName = 'ColorPicker';

ColorPicker.propTypes = {
  color: PropTypes.oneOfType<any>([PropTypes.object, PropTypes.string]),
  isOpaque: PropTypes.bool,
  onChange: PropTypes.func,
  labels: PropTypes.object,
  defaultColor: PropTypes.oneOfType<any>([PropTypes.object, PropTypes.string])
};
