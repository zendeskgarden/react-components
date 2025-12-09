/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import DEFAULT_THEME from '../elements/theme/index.js';
import PALETTE_V8 from '../elements/palette/v8.js';
import { rgba, darken, lighten } from 'polished';
import memoize from 'lodash.memoize';

const DEFAULT_SHADE = 600;
const adjust = (color, expected, actual) => {
  if (expected !== actual) {
    const amount = Math.abs(expected - actual) / 100 * 0.05;
    return expected > actual ? darken(amount, color) : lighten(amount, color);
  }
  return color;
};
const CACHE = new WeakMap();
const KEYS = {
  colors: 0,
  palette: 0
};
CACHE.set(DEFAULT_THEME.colors, KEYS.colors);
CACHE.set(DEFAULT_THEME.palette, KEYS.palette);
const toKey = ({
  hue,
  shade,
  theme,
  transparency
}) => {
  let retVal = `${typeof hue === 'object' ? JSON.stringify(hue) : hue}`;
  if (shade !== undefined) {
    retVal += `,${shade}`;
  }
  if (theme !== undefined) {
    let themeColorsKey;
    if (theme.colors) {
      themeColorsKey = CACHE.get(theme.colors);
      if (themeColorsKey === undefined) {
        themeColorsKey = ++KEYS.colors;
        CACHE.set(theme.colors, themeColorsKey);
      }
    }
    let themePaletteKey;
    if (theme.palette) {
      themePaletteKey = CACHE.get(theme.palette);
      if (themePaletteKey === undefined) {
        themePaletteKey = ++KEYS.palette;
        CACHE.set(theme.palette, themePaletteKey);
      }
    }
    retVal += `,{${themeColorsKey},${themePaletteKey}}`;
  }
  if (transparency !== undefined) {
    retVal += `,${transparency}`;
  }
  return retVal;
};
const getColorV8 = memoize((hue, shade = DEFAULT_SHADE, theme, transparency) => {
  let retVal;
  if (isNaN(shade)) {
    return undefined;
  }
  const palette = {
    background: PALETTE_V8.white,
    foreground: PALETTE_V8.grey[800],
    ...(theme && theme.palette ? {
      ...theme.palette,
      ...PALETTE_V8
    } : {
      ...DEFAULT_THEME.palette,
      ...PALETTE_V8
    })
  };
  const colors = theme && theme.colors ? theme.colors : DEFAULT_THEME.colors;
  let _hue;
  if (typeof hue === 'string') {
    _hue = colors[hue] || hue;
  } else {
    _hue = hue;
  }
  if (Object.prototype.hasOwnProperty.call(palette, _hue)) {
    _hue = palette[_hue];
  }
  if (typeof _hue === 'object') {
    retVal = _hue[shade];
    if (!retVal) {
      const _shade = Object.keys(_hue).map(hueKey => parseInt(hueKey, 10)).reduce((previous, current) => {
        return Math.abs(current - shade) < Math.abs(previous - shade) ? current : previous;
      });
      retVal = adjust(_hue[_shade], shade, _shade);
    }
  } else {
    retVal = adjust(_hue, shade, DEFAULT_SHADE);
  }
  if (transparency) {
    retVal = rgba(retVal, transparency);
  }
  return retVal;
}, (hue, shade, theme, transparency) => toKey({
  hue,
  shade,
  theme,
  transparency
}));

export { DEFAULT_SHADE, getColorV8 };
