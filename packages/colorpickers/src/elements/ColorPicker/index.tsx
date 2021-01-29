/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useReducer, forwardRef, ChangeEvent, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { Label } from '@zendeskgarden/react-forms';
import { ColorWell } from './ColorWell';
import {
  StyledHue,
  StyledSliderGroup,
  StyledInput,
  StyledLabel,
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
import {
  getInitialState,
  reducer,
  IRGBColor,
  IHSVColor,
  IColorPickerState,
  SATURATION_CHANGE,
  HUE_CHANGE,
  ALPHA_SLIDER_CHANGE,
  HEX_CHANGE,
  RED_CHANGE,
  GREEN_CHANGE,
  BLUE_CHANGE,
  ALPHA_CHANGE
} from './reducer';

export interface IColorPickerLabels {
  hueSlider?: string;
  alphaSlider?: string;
  hex?: string;
  red?: string;
  green?: string;
  blue?: string;
  alpha?: string;
}

export interface IColorPickerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'onChange'> {
  /** A hex string, RGB string, RGB object, or color picker state that represents the current color */
  color: string | IRGBColor | IColorPickerState;
  /** A callback that is fired when an the color picker state is changed */
  onChange?: (state: IColorPickerState) => void;
  /** Replaces the default labels within the color picker */
  labels?: IColorPickerLabels;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const ColorPicker = forwardRef<HTMLDivElement, IColorPickerProps>(
  ({ color, labels = {}, onChange, ...props }, ref) => {
    const [state, dispatch] = useReducer(reducer, getInitialState(color));

    useEffect(() => {
      onChange && onChange(state);
    }, [state, onChange]);

    return (
      <StyledColorPicker ref={ref} {...props}>
        <ColorWell
          hue={state.hue}
          saturation={state.saturation}
          lightness={state.lightness}
          onChange={(hsv: IHSVColor) => {
            dispatch({
              type: SATURATION_CHANGE,
              payload: hsv
            });
          }}
        />

        <StyledSliderGroup>
          <StyledPreview
            rgb={{ red: state.red, green: state.green, blue: state.blue, alpha: state.alpha }}
          />
          <StyledSliders>
            <StyledHueField>
              <Label hidden>{labels.hueSlider || 'Hue slider'}</Label>
              <StyledHue
                step={1}
                max={359}
                value={state.hue}
                onChange={e => {
                  dispatch({ type: HUE_CHANGE, payload: e.target.value });
                }}
              />
            </StyledHueField>
            <StyledAlphaField>
              <Label hidden>{labels.alphaSlider || 'Alpha slider'}</Label>
              <StyledAlpha
                max={1}
                step={0.01}
                value={state.alpha / 100}
                rgb={{ red: state.red, green: state.green, blue: state.blue }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  dispatch({ type: ALPHA_SLIDER_CHANGE, payload: e.target.value });
                }}
              />
              <StyledCheckered />
              <StyledAlphaGradient
                rgb={{ red: state.red, green: state.green, blue: state.blue, alpha: state.alpha }}
              />
            </StyledAlphaField>
          </StyledSliders>
        </StyledSliderGroup>

        <StyledInputGroup>
          <StyledHexField>
            <StyledLabel>{labels.hex || 'Hex'}</StyledLabel>
            <StyledInput
              isCompact
              maxLength={7}
              value={state.hex}
              onChange={e => {
                dispatch({ type: HEX_CHANGE, payload: e.target.value });
              }}
            />
          </StyledHexField>
          <StyledRGBAField>
            <StyledLabel>{labels.red || 'R'}</StyledLabel>
            <StyledInput
              isCompact
              type="number"
              min="0"
              max="255"
              maxLength={3}
              value={state.redInput}
              onChange={e => {
                dispatch({ type: RED_CHANGE, payload: e.target.value });
              }}
            />
          </StyledRGBAField>
          <StyledRGBAField>
            <StyledLabel>{labels.green || 'G'}</StyledLabel>
            <StyledInput
              isCompact
              type="number"
              min="0"
              max="255"
              maxLength={3}
              value={state.greenInput}
              onChange={e => {
                dispatch({ type: GREEN_CHANGE, payload: e.target.value });
              }}
            />
          </StyledRGBAField>
          <StyledRGBAField>
            <StyledLabel>{labels.blue || 'B'}</StyledLabel>
            <StyledInput
              isCompact
              type="number"
              min="0"
              max="255"
              maxLength={3}
              value={state.blueInput}
              onChange={e => {
                dispatch({ type: BLUE_CHANGE, payload: e.target.value });
              }}
            />
          </StyledRGBAField>
          <StyledRGBAField>
            <StyledLabel>{labels.alpha || 'A'}</StyledLabel>
            <StyledInput
              isCompact
              type="number"
              min="0"
              max="100"
              value={state.alphaInput}
              onChange={e => {
                dispatch({
                  type: ALPHA_CHANGE,
                  payload: e.target.value
                });
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
  color: PropTypes.oneOfType<any>([PropTypes.object, PropTypes.string]).isRequired,
  onChange: PropTypes.func,
  labels: PropTypes.object
};
