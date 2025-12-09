/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import isEqual from 'lodash.isequal';
import { parseToHsl, parseToRgb, rgb, hsl } from 'polished';
import { hsvToHsl } from '../../utils/conversion.js';
import { isValidHex } from '../../utils/validation.js';

function convertStringToColor(colorString) {
  if (colorString.includes('#') && !isValidHex(colorString)) {
    return undefined;
  }
  const {
    hue,
    saturation,
    lightness
  } = parseToHsl(colorString);
  const {
    red,
    green,
    blue,
    alpha
  } = parseToRgb(colorString);
  const computedAlpha = alpha === undefined ? 100 : alpha * 100;
  const computedHex = rgb({
    red,
    green,
    blue
  });
  return {
    hue,
    saturation: saturation * 100,
    lightness: lightness * 100,
    red,
    green,
    blue,
    alpha: computedAlpha,
    hex: computedHex
  };
}
const areColorsEqual = (a, b) => {
  if (a === undefined || b === undefined) {
    return false;
  }
  const colorA = typeof a === 'string' ? convertStringToColor(a) : a;
  const colorB = typeof b === 'string' ? convertStringToColor(b) : b;
  if (colorA === undefined || colorB === undefined) {
    return false;
  }
  return isEqual(colorA, colorB);
};
function getInitialState(color) {
  const whiteColor = {
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
    return getInitialState(whiteColor);
  }
  if (typeof color === 'string') {
    const computedColor = convertStringToColor(color);
    return getInitialState(computedColor || whiteColor);
  }
  return {
    color,
    hexInput: color.hex,
    redInput: color.red.toString(),
    blueInput: color.blue.toString(),
    greenInput: color.green.toString(),
    alphaInput: color.alpha.toString()
  };
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'SATURATION_CHANGE':
      {
        const hsl$1 = hsvToHsl(action.payload.h, action.payload.s * 100, action.payload.v * 100);
        const hex = hsl({
          hue: action.payload.h,
          saturation: hsl$1.s / 100,
          lightness: hsl$1.l / 100
        });
        const rgb = parseToRgb(hex);
        return {
          ...state,
          color: {
            ...state.color,
            saturation: hsl$1.s,
            lightness: hsl$1.l,
            hex,
            red: rgb.red,
            green: rgb.green,
            blue: rgb.blue
          }
        };
      }
    case 'HUE_CHANGE':
      {
        const hue = Number(action.payload);
        const hex = hsl({
          hue,
          saturation: state.color.saturation / 100,
          lightness: state.color.lightness / 100
        });
        const rgb = parseToRgb(hex);
        return {
          ...state,
          color: {
            ...state.color,
            hue,
            hex,
            red: rgb.red,
            green: rgb.green,
            blue: rgb.blue
          }
        };
      }
    case 'ALPHA_SLIDER_CHANGE':
      {
        return {
          ...state,
          color: {
            ...state.color,
            alpha: Math.round(Number(action.payload) * 100)
          }
        };
      }
    case 'HEX_CHANGE':
      {
        let color = state.color;
        if (isValidHex(action.payload)) {
          const rgb = parseToRgb(action.payload);
          const hsl = parseToHsl(`rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`);
          color = {
            ...color,
            hue: hsl.hue,
            saturation: hsl.saturation * 100,
            lightness: hsl.lightness * 100,
            hex: action.payload,
            red: rgb.red,
            green: rgb.green,
            blue: rgb.blue
          };
        }
        return {
          ...state,
          hexInput: action.payload,
          color
        };
      }
    case 'RED_CHANGE':
      {
        let red = parseInt(action.payload, 10);
        let color = state.color;
        if (!isNaN(red)) {
          if (red >= 255) {
            red = 255;
          }
          if (red < 0) {
            red = 0;
          }
          const hsl = parseToHsl(`rgb(${red}, ${color.green}, ${color.blue})`);
          const hex = rgb(red, color.green, color.blue);
          color = {
            ...color,
            hex,
            red: action.payload === '' ? color.red : red,
            hue: hsl.hue,
            saturation: hsl.saturation * 100,
            lightness: hsl.lightness * 100
          };
        }
        return {
          ...state,
          redInput: action.payload,
          color
        };
      }
    case 'GREEN_CHANGE':
      {
        let green = parseInt(action.payload, 10);
        let color = state.color;
        if (!isNaN(green)) {
          if (green >= 255) {
            green = 255;
          }
          if (green < 0) {
            green = 0;
          }
          const hsl = parseToHsl(`rgb(${color.red}, ${green}, ${color.blue})`);
          const hex = rgb(color.red, green, color.blue);
          color = {
            ...color,
            hex,
            green: action.payload === '' ? color.green : green,
            hue: hsl.hue,
            saturation: hsl.saturation * 100,
            lightness: hsl.lightness * 100
          };
        }
        return {
          ...state,
          greenInput: action.payload,
          color
        };
      }
    case 'BLUE_CHANGE':
      {
        let blue = parseInt(action.payload, 10);
        let color = state.color;
        if (!isNaN(blue)) {
          if (blue >= 255) {
            blue = 255;
          }
          if (blue < 0) {
            blue = 0;
          }
          const hsl = parseToHsl(`rgb(${color.red}, ${color.green}, ${blue})`);
          const hex = rgb(color.red, color.green, blue);
          color = {
            ...color,
            hex,
            blue: action.payload === '' ? color.blue : blue,
            hue: hsl.hue,
            saturation: hsl.saturation * 100,
            lightness: hsl.lightness * 100
          };
        }
        return {
          ...state,
          blueInput: action.payload,
          color
        };
      }
    case 'ALPHA_CHANGE':
      {
        let alpha = parseInt(action.payload, 10);
        let color = state.color;
        if (!isNaN(alpha)) {
          if (alpha > 100) {
            alpha = 100;
          }
          if (alpha < 0) {
            alpha = 0;
          }
          color = {
            ...color,
            alpha
          };
        }
        return {
          ...state,
          alphaInput: action.payload,
          color
        };
      }
    case 'RESET_COLOR':
      {
        return getInitialState(action.payload);
      }
    default:
      throw new Error('Unknown reducer case.');
  }
};

export { areColorsEqual, convertStringToColor, getInitialState, reducer };
