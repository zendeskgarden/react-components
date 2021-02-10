/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { parseToHsl, parseToRgb, rgb as rgbToString } from 'polished';
import { hsvToHsl, rgbToHsl, hslToRgb, rgbToHex } from '../../utils/conversion';
import { IColor, IRGBColor, IHSVColor } from '../../utils/types';
import { isValidHex } from '../../utils/validation';

type ColorPickerActionTypes =
  | { type: 'SATURATION_CHANGE'; payload: IHSVColor }
  | { type: 'HUE_CHANGE'; payload: string }
  | { type: 'ALPHA_SLIDER_CHANGE'; payload: string }
  | { type: 'HEX_CHANGE'; payload: string }
  | { type: 'RED_CHANGE'; payload: string }
  | { type: 'GREEN_CHANGE'; payload: string }
  | { type: 'BLUE_CHANGE'; payload: string }
  | { type: 'ALPHA_CHANGE'; payload: string };

type ReducerType = (state: IColor, action: ColorPickerActionTypes) => IColor;

export function toState(color?: string | IColor) {
  const white = {
    hue: 0,
    saturation: 0,
    lightness: 0,
    red: 255,
    green: 255,
    blue: 255,
    alpha: 100,
    hex: '#ffffff'
  };

  if (color === undefined) {
    return white;
  }

  if (typeof color === 'string') {
    if (color.includes('#') && isValidHex(color) === false) {
      return white;
    }

    const { hue, saturation, lightness } = parseToHsl(color);
    const { red, green, blue, alpha } = parseToRgb(color) as IRGBColor;
    const hex = rgbToHex(red, green, blue);

    return {
      hue,
      saturation: saturation * 100,
      lightness: lightness * 100,
      red,
      green,
      blue,
      alpha: alpha === undefined ? 100 : alpha * 100,
      hex
    };
  }

  const { red, green, blue, alpha = 100 } = color;
  const hex = rgbToString({ red, green, blue });
  const { saturation, lightness } = parseToHsl(hex);

  return {
    hue: color.hue,
    saturation: saturation * 100,
    lightness: lightness * 100,
    red,
    green,
    blue,
    alpha,
    hex
  };
}

export const reducer: ReducerType = (state, action) => {
  switch (action.type) {
    case 'SATURATION_CHANGE': {
      const hsl = hsvToHsl(action.payload.h, action.payload.s * 100, action.payload.v * 100);
      const rgb = hslToRgb(state.hue, hsl.s, hsl.l);
      const hex = rgbToString(rgb.r, rgb.g, rgb.b);

      return {
        ...state,
        saturation: hsl.s,
        lightness: hsl.l,
        hex,
        red: rgb.r,
        green: rgb.g,
        blue: rgb.b
      };
    }
    case 'HUE_CHANGE': {
      const hue = Number(action.payload);
      const rgb = hslToRgb(hue, state.saturation, state.lightness);
      const hex = rgbToString({
        red: rgb.r,
        green: rgb.g,
        blue: rgb.b
      });

      return {
        ...state,
        hue,
        hex,
        red: rgb.r,
        green: rgb.g,
        blue: rgb.b
      };
    }
    case 'ALPHA_SLIDER_CHANGE': {
      return {
        ...state,
        alpha: Math.round(Number(action.payload) * 100)
      };
    }
    case 'HEX_CHANGE': {
      if (isValidHex(action.payload)) {
        const rgb = parseToRgb(action.payload);
        const hsl = rgbToHsl(rgb.red, rgb.green, rgb.blue);

        return {
          ...state,
          hue: hsl.h,
          saturation: hsl.s,
          lightness: hsl.l,
          hex: action.payload,
          red: rgb.red,
          green: rgb.green,
          blue: rgb.blue
        };
      }

      return state;
    }
    case 'RED_CHANGE': {
      const red = Number(action.payload);

      if (isNaN(red)) return state;
      if (red > 255) return state;

      const hsl = rgbToHsl(red, state.green, state.blue);
      const hex = rgbToString(red, state.green, state.blue);

      return {
        ...state,
        hex,
        red: action.payload === '' ? state.red : red,
        hue: hsl.h,
        lightness: hsl.l,
        saturation: hsl.s
      };
    }
    case 'GREEN_CHANGE': {
      const green = Number(action.payload);

      if (isNaN(green)) return state;
      if (green > 255) return state;

      const hsl = rgbToHsl(state.red, green, state.blue);
      const hex = rgbToString(state.red, green, state.blue);

      return {
        ...state,
        hex,
        green: action.payload === '' ? state.green : green,
        hue: hsl.h,
        lightness: hsl.l,
        saturation: hsl.s
      };
    }
    case 'BLUE_CHANGE': {
      const blue = Number(action.payload);

      if (isNaN(blue)) return state;
      if (blue > 255) return state;

      const hsl = rgbToHsl(state.red, state.green, blue);
      const hex = rgbToString(state.red, state.green, blue);

      return {
        ...state,
        hex,
        blue: action.payload === '' ? state.blue : blue,
        hue: hsl.h,
        lightness: hsl.l,
        saturation: hsl.s
      };
    }
    case 'ALPHA_CHANGE': {
      const alpha = Number(action.payload);

      if (isNaN(alpha)) return state;
      if (alpha > 100) return state;

      return {
        ...state,
        alpha
      };
    }
    default:
      throw new Error('Unknown reducer case.');
  }
};
