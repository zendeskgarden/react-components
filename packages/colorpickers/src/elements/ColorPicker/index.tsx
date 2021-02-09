/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useState,
  useEffect,
  useCallback,
  useReducer,
  forwardRef,
  ChangeEvent,
  HTMLAttributes
} from 'react';
import PropTypes from 'prop-types';
import { Label } from '@zendeskgarden/react-forms';
import { ColorWell } from './ColorWell';
import { isValidHex } from '../../utils/validation';
import { hsvToHsl, hslToRgb, rgbToHsl, rgbToHex } from '../../utils/conversion';
import {
  StyledHue,
  StyledSliderGroup,
  StyledLabel,
  StyledInput,
  StyledAlpha,
  StyledSliders,
  StyledHexField,
  StyledRGBAField,
  StyledInputGroup,
  StyledPreview,
  StyledColorPicker,
  StyledCheckered,
  StyledAlphaGradient,
  StyledAlphaField,
  StyledHueField
} from '../../styled';
import { getInitialState, reducer } from './reducer';
import { IColor, IHSVColor, IRGBColor } from '../../utils/types';
import { parseToHsl, parseToRgb, rgb as rgbToString } from 'polished';
export interface IColorPickerLabels {
  hueSlider?: string;
  alphaSlider?: string;
  hex?: string;
  red?: string;
  green?: string;
  blue?: string;
  alpha?: string;
}

function getControlledState(controlledColor: IColor | string): IColor {
  if (typeof controlledColor === 'string') {
    if (isValidHex(controlledColor)) {
      const { hue, saturation, lightness } = parseToHsl(controlledColor);
      const { red, green, blue } = parseToRgb(controlledColor);

      return {
        hue,
        saturation: saturation * 100,
        lightness: lightness * 100,
        red,
        green,
        blue,
        alpha: 100,
        hex: controlledColor
      };
    }

    if (controlledColor.includes('rgb')) {
      const { hue, saturation, lightness } = parseToHsl(controlledColor);
      const { red, green, blue, alpha } = parseToRgb(controlledColor) as IRGBColor;
      const hex = rgbToHex(red, green, blue);

      return {
        hue,
        saturation: saturation * 100,
        lightness: lightness * 100,
        red,
        green,
        blue,
        alpha: alpha === undefined ? 100 : alpha,
        hex
      };
    }

    return {
      hue: 0,
      saturation: 0,
      lightness: 0,
      red: 255,
      green: 255,
      blue: 255,
      alpha: 100,
      hex: '#ffffff'
    };
  }

  const { red, green, blue, alpha = 100 } = controlledColor as any;
  const hex = rgbToString({ red, green, blue });
  const { saturation, lightness } = parseToHsl(hex);

  return {
    hue: controlledColor.hue,
    saturation: saturation * 100,
    lightness: lightness * 100,
    red,
    green,
    blue,
    alpha,
    hex
  };
}

export interface IColorPickerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'onChange'> {
  /** A hex string, RGB string, RGB object, or color picker state that represents the current color */
  color?: string | IColor;
  /**
   * Handles color picker changes
   *
   * @param {Object} state An color picker's state
   */
  onChange?: (color: IColor) => void;
  /** Replaces the default labels within the color picker */
  labels?: IColorPickerLabels;
  /** Autofocuses the hex input element */
  autofocus?: boolean;
  defaultColor?: string | IColor;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const ColorPicker = forwardRef<HTMLDivElement, IColorPickerProps>(
  ({ color, defaultColor, labels = {}, autofocus, onChange, ...props }, ref) => {
    const isControlled = color !== null && color !== undefined;

    const [uncontrolledState, dispatch] = useReducer(
      reducer,
      getInitialState(defaultColor || '#ffffff')
    );

    useEffect(() => {
      if (isControlled === false) {
        onChange && onChange(uncontrolledState);
      }
    }, [uncontrolledState, onChange, isControlled]);

    const state = isControlled ? getControlledState(color as any) : uncontrolledState;

    const [hexInput, setHexInput] = useState<string>(state.hex);
    const [redInput, setRedInput] = useState<string | number>(state.red);
    const [greenInput, setGreenInput] = useState<string | number>(state.green);
    const [blueInput, setBlueInput] = useState<string | number>(state.blue);
    const [alphaInput, setAlphaInput] = useState<string | number>(state.alpha);

    const handleColorWellChange = useCallback(
      (hsv: IHSVColor) => {
        const hsl = hsvToHsl(hsv.h, hsv.s * 100, hsv.v * 100);
        const rgb = hslToRgb(hsl.h, hsl.s, hsl.l);
        const hex = rgbToString(rgb.r, rgb.g, rgb.b);

        setHexInput(hex);
        setRedInput(rgb.r);
        setGreenInput(rgb.g);
        setBlueInput(rgb.b);

        if (isControlled) {
          onChange &&
            onChange({
              hue: hsv.h,
              saturation: hsl.s,
              lightness: hsl.l,
              hex,
              red: rgb.r,
              green: rgb.g,
              blue: rgb.b,
              alpha: state.alpha
            });
        } else {
          dispatch({
            type: 'SATURATION_CHANGE',
            payload: hsv
          });
        }
      },
      [isControlled, onChange, state.alpha]
    );

    useEffect(() => {
      if (isControlled) {
        setHexInput(state.hex);
        setRedInput(state.red);
        setGreenInput(state.green);
        setBlueInput(state.blue);
        setAlphaInput(state.alpha);
      }
    }, [state.hex, state.red, state.green, state.blue, state.alpha, color, isControlled]);

    return (
      <StyledColorPicker ref={ref} {...props}>
        <ColorWell
          hue={state.hue}
          saturation={state.saturation}
          lightness={state.lightness}
          onChange={handleColorWellChange}
        />
        <StyledSliderGroup>
          <StyledPreview
            rgb={{
              red: state.red,
              green: state.green,
              blue: state.blue,
              alpha: state.alpha
            }}
          />
          <StyledSliders>
            <StyledHueField>
              <Label hidden>{labels.hueSlider || 'Hue slider'}</Label>
              <StyledHue
                step={1}
                max={359}
                value={state.hue}
                onChange={e => {
                  const hue = Number(e.target.value);
                  const rgb = hslToRgb(hue, state.saturation, state.lightness);
                  const hex = rgbToString({
                    red: rgb.r,
                    green: rgb.g,
                    blue: rgb.b
                  });

                  setHexInput(hex);
                  setRedInput(rgb.r);
                  setGreenInput(rgb.g);
                  setBlueInput(rgb.b);

                  if (isControlled) {
                    onChange &&
                      onChange({
                        saturation: state.saturation,
                        lightness: state.lightness,
                        hue: Number(e.target.value),
                        hex,
                        red: rgb.r,
                        green: rgb.g,
                        blue: rgb.b,
                        alpha: state.alpha
                      });
                  } else {
                    dispatch({ type: 'HUE_CHANGE', payload: e.target.value });
                  }
                }}
              />
            </StyledHueField>
            <StyledAlphaField>
              <Label hidden>{labels.alphaSlider || 'Alpha slider'}</Label>
              <StyledAlpha
                max={1}
                step={0.01}
                value={state.alpha / 100}
                rgb={{
                  red: state.red,
                  green: state.green,
                  blue: state.blue
                }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setAlphaInput(Math.round(Number(e.target.value) * 100));

                  if (isControlled) {
                    onChange &&
                      onChange({
                        saturation: state.saturation,
                        lightness: state.lightness,
                        hue: state.hue,
                        hex: state.hex,
                        red: state.red,
                        green: state.green,
                        blue: state.blue,
                        alpha: Number(e.target.value) * 100
                      });
                  } else {
                    dispatch({ type: 'ALPHA_SLIDER_CHANGE', payload: e.target.value });
                  }
                }}
              />
              <StyledCheckered />
              <StyledAlphaGradient
                rgb={{
                  red: state.red,
                  green: state.green,
                  blue: state.blue,
                  alpha: state.alpha
                }}
              />
            </StyledAlphaField>
          </StyledSliders>
        </StyledSliderGroup>
        <StyledInputGroup>
          <StyledHexField>
            <StyledLabel isRegular>{labels.hex || 'Hex'}</StyledLabel>
            <StyledInput
              isCompact
              maxLength={7}
              value={hexInput}
              /* eslint-disable jsx-a11y/no-autofocus */
              autoFocus={autofocus}
              onChange={e => {
                setHexInput(e.target.value);
                if (isValidHex(e.target.value)) {
                  const rgb = parseToRgb(e.target.value);
                  const hsl = rgbToHsl(rgb.red, rgb.green, rgb.blue);

                  setRedInput(rgb.red);
                  setGreenInput(rgb.green);
                  setBlueInput(rgb.blue);

                  if (isControlled) {
                    onChange &&
                      onChange({
                        hue: hsl.h,
                        saturation: hsl.s,
                        lightness: hsl.l,
                        hex: e.target.value,
                        red: rgb.red,
                        green: rgb.green,
                        blue: rgb.blue,
                        alpha: state.alpha
                      });
                  } else {
                    dispatch({ type: 'HEX_CHANGE', payload: e.target.value });
                  }
                }
              }}
              onBlur={e => {
                if (!e.target.value.includes('#')) {
                  const hexInputString = `#${e.target.value}`;

                  if (isValidHex(hexInputString)) {
                    setHexInput(hexInputString);
                    const rgb = parseToRgb(hexInputString);
                    const hsl = rgbToHsl(rgb.red, rgb.green, rgb.blue);

                    setRedInput(rgb.red);
                    setGreenInput(rgb.green);
                    setBlueInput(rgb.blue);

                    if (isControlled) {
                      onChange &&
                        onChange({
                          hue: hsl.h,
                          saturation: hsl.s,
                          lightness: hsl.l,
                          hex: hexInputString,
                          red: rgb.red,
                          green: rgb.green,
                          blue: rgb.blue,
                          alpha: state.alpha
                        });
                    } else {
                      dispatch({ type: 'HEX_CHANGE', payload: hexInputString });
                    }
                  }
                }
              }}
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
              value={redInput}
              onChange={e => {
                const red = Number(e.target.value);
                const hsl = rgbToHsl(red, state.green, state.blue);
                const hex = rgbToString(red, state.green, state.blue);

                setRedInput(e.target.value);

                if (e.target.value === '') {
                  return;
                }

                if (isNaN(red)) {
                  return;
                }

                if (red > 255) {
                  setRedInput(state.red);

                  return;
                }

                setHexInput(hex);
                setGreenInput(state.green);
                setBlueInput(state.blue);

                if (isControlled) {
                  onChange &&
                    onChange({
                      hex,
                      red: e.target.value === '' ? state.red : red,
                      green: state.green,
                      blue: state.blue,
                      hue: hsl.h,
                      lightness: hsl.l,
                      saturation: hsl.s,
                      alpha: state.alpha
                    });
                } else {
                  dispatch({ type: 'RED_CHANGE', payload: e.target.value });
                }
              }}
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
              value={greenInput}
              onChange={e => {
                const green = Number(e.target.value);
                const hsl = rgbToHsl(state.red, green, state.blue);
                const hex = rgbToString(state.red, green, state.blue);

                setGreenInput(e.target.value);

                if (e.target.value === '') {
                  return;
                }

                if (isNaN(green)) {
                  return;
                }

                if (green > 255) {
                  setGreenInput(state.green);

                  return;
                }

                setHexInput(hex);
                setRedInput(state.red);
                setBlueInput(state.blue);

                if (isControlled) {
                  onChange &&
                    onChange({
                      hex,
                      red: state.red,
                      green: e.target.value === '' ? state.green : green,
                      blue: state.blue,
                      hue: hsl.h,
                      lightness: hsl.l,
                      saturation: hsl.s,
                      alpha: state.alpha
                    });
                } else {
                  dispatch({ type: 'GREEN_CHANGE', payload: e.target.value });
                }
              }}
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
              value={blueInput}
              onChange={e => {
                setBlueInput(e.target.value);

                const blue = Number(e.target.value);
                const hsl = rgbToHsl(state.red, state.green, blue);
                const hex = rgbToString(state.red, state.green, blue);

                if (e.target.value === '') {
                  return;
                }

                if (isNaN(blue)) {
                  return;
                }

                if (blue > 255) {
                  setBlueInput(state.blue);

                  return;
                }

                setHexInput(hex);
                setRedInput(state.red);
                setGreenInput(state.green);

                if (isControlled) {
                  onChange &&
                    onChange({
                      hex,
                      red: state.red,
                      green: state.green,
                      blue: e.target.value === '' ? state.blue : blue,
                      hue: hsl.h,
                      lightness: hsl.l,
                      saturation: hsl.s,
                      alpha: state.alpha
                    });
                } else {
                  dispatch({ type: 'BLUE_CHANGE', payload: e.target.value });
                }
              }}
            />
          </StyledRGBAField>
          <StyledRGBAField>
            <StyledLabel isRegular>{labels.alpha || 'A'}</StyledLabel>
            <StyledInput
              isCompact
              type="number"
              min="0"
              max="100"
              value={alphaInput}
              onChange={e => {
                const alpha = Number(e.target.value);

                if (alpha <= 100) {
                  setAlphaInput(e.target.value);
                }

                if (isControlled) {
                  if (e.target.value === '') {
                    return;
                  }

                  if (isNaN(alpha)) {
                    return;
                  }

                  if (alpha > 100) {
                    setAlphaInput(state.alpha);

                    return;
                  }

                  onChange &&
                    onChange({
                      ...state,
                      alpha: e.target.value === '' ? state.alpha : alpha
                    });
                } else {
                  dispatch({
                    type: 'ALPHA_CHANGE',
                    payload: e.target.value
                  });
                }
              }}
            />
          </StyledRGBAField>
        </StyledInputGroup>
      </StyledColorPicker>
    );
  }
);

ColorPicker.displayName = 'ColorPicker';

ColorPicker.propTypes = {
  color: PropTypes.oneOfType<any>([PropTypes.object, PropTypes.string]),
  onChange: PropTypes.func,
  labels: PropTypes.object,
  defaultColor: PropTypes.oneOfType<any>([PropTypes.object, PropTypes.string])
};
