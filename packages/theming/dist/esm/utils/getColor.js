/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { getScale, toHex as toHex$1, parseToRgba } from 'color2k';
import { getContrast, rgba, darken, lighten } from 'polished';
import get from 'lodash.get';
import memoize from 'lodash.memoize';
import DEFAULT_THEME from '../elements/theme/index.js';

const adjust = (color, expected, actual) => {
  if (expected !== actual) {
    const amount = Math.abs(expected - actual) / 100 * 0.05;
    return expected > actual ? darken(amount, color) : lighten(amount, color);
  }
  return color;
};
const toShade = (shade, offset, transparency, scheme) => {
  let _shade;
  if (shade === undefined) {
    const darkShade = transparency === undefined ? 600 : 500;
    _shade = scheme === 'dark' ? darkShade : 700;
  } else {
    _shade = parseInt(shade.toString(), 10);
    if (isNaN(_shade)) {
      throw new TypeError(`Error: unexpected '${typeof shade}' type for color shade "${shade}"`);
    }
  }
  return _shade + (offset || 0);
};
const toHex = (hue, shade, offset, transparency, scheme) => {
  const _shade = toShade(shade, offset, transparency, scheme);
  let retVal = hue[_shade];
  if (!retVal) {
    const closestShade = Object.keys(hue).map(hueShade => parseInt(hueShade, 10)).reduce((previous, current) => {
      return Math.abs(current - _shade) < Math.abs(previous - _shade) ? current : previous;
    });
    retVal = adjust(hue[closestShade], _shade, closestShade);
  }
  return retVal;
};
const isValidColor = maybeColor => {
  let retVal = ['currentcolor', 'inherit', 'transparent'].includes(maybeColor);
  if (!retVal) {
    try {
      retVal = !!parseToRgba(maybeColor);
    } catch {
      retVal = false;
    }
  }
  return retVal;
};
function findNearestIndex(target, arr) {
  let startIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (typeof target !== 'number' || isNaN(target)) {
    throw new Error('Target must be a number.');
  }
  if (!Array.isArray(arr)) {
    throw new Error('Second argument must be an array.');
  }
  let left = startIndex;
  let right = arr.length - 1;
  if (target < arr[left]) return left;
  if (target > arr[right]) return right;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return arr[left] - target < target - arr[right] ? left : right;
}
const OFFSET_TO_TARGET_RATIO = {
  100: 1.08,
  200: 1.2,
  300: 1.35,
  400: 2,
  500: 2.8,
  600: 3.3,
  700: 5,
  800: 10,
  900: 13,
  1000: 16,
  1100: 17.5,
  1200: 19
};
const generateColorScale = memoize(color => {
  const scaleSize = 200;
  const _scale = getScale('#FFF', color, '#000');
  const scale = x => _scale(x / scaleSize);
  const colors = [];
  const contrastRatios = [];
  for (let i = 0; i <= scaleSize; i++) {
    const _color = toHex$1(scale(i));
    colors.push(_color);
    contrastRatios.push(getContrast('#FFF', _color));
  }
  const palette = {};
  let startIndex = 0;
  for (const offset in OFFSET_TO_TARGET_RATIO) {
    if (Object.prototype.hasOwnProperty.call(OFFSET_TO_TARGET_RATIO, offset)) {
      const ratio = OFFSET_TO_TARGET_RATIO[offset];
      const nearestIndex = findNearestIndex(ratio, contrastRatios, startIndex);
      startIndex = nearestIndex + 1;
      palette[offset] = colors[nearestIndex];
    }
  }
  return palette;
});
const toColor = (colors, palette, opacity, scheme, hue, shade, offset, transparency) => {
  let retVal;
  let _hue = colors[hue]  || hue;
  if (Object.prototype.hasOwnProperty.call(palette, _hue)) {
    _hue = palette[_hue];
  }
  if (typeof _hue === 'object') {
    retVal = toHex(_hue, shade, offset, transparency, scheme);
  } else if (isValidColor(_hue)) {
    if (shade === undefined) {
      retVal = _hue;
    } else {
      _hue = generateColorScale(_hue);
      retVal = toHex(_hue, shade, offset, transparency, scheme);
    }
  }
  if (retVal && transparency) {
    const alpha = transparency > 1 ? opacity[transparency] : transparency;
    if (alpha === undefined) {
      throw new Error('Error: invalid `transparency` parameter');
    }
    retVal = rgba(retVal, alpha);
  }
  return retVal;
};
const toProperty = (object, path) => {
  const retVal = get(object, path);
  if (typeof retVal === 'string') {
    return retVal;
  } else if (retVal === undefined) {
    throw new ReferenceError(`Error: color variable '${path}' is not defined`);
  } else {
    throw new TypeError(`Error: unexpected '${typeof retVal}' type for color variable "${path}"`);
  }
};
const fromRgba = value => {
  let retVal;
  const regex = /rgba\s*\(\s*(?<property>[#\w.]+)\s*,\s*(?<alpha>[\w.]+)\s*\)/gu;
  const _rgba = regex.exec(value);
  if (_rgba && _rgba.groups) {
    const property = _rgba.groups.property;
    const transparency = parseFloat(_rgba.groups.alpha);
    retVal = {
      property,
      transparency
    };
  } else {
    throw new Error(`Error: invalid \`rgba\` value "${value}"`);
  }
  return retVal;
};
const fromVariable = (variable, variables, palette) => {
  const retVal = {};
  let property = toProperty(variables, variable);
  if (property.startsWith('rgba')) {
    const value = fromRgba(property);
    property = value.property;
    retVal.transparency = value.transparency;
  }
  const [key, value] = property.split(/\.(?<value>.*)/u);
  if (key === 'palette') {
    retVal.hue = toProperty(palette, value);
  } else {
    retVal.hue = key;
    if (value !== undefined) {
      retVal.shade = parseInt(value, 10);
    }
  }
  return retVal;
};
const CACHE = new WeakMap();
const KEYS = {
  colors: 0,
  palette: 0,
  opacity: 0
};
CACHE.set(DEFAULT_THEME.colors, KEYS.colors);
CACHE.set(DEFAULT_THEME.palette, KEYS.palette);
CACHE.set(DEFAULT_THEME.opacity, KEYS.opacity);
const toKey = _ref => {
  let {
    dark,
    hue,
    light,
    offset,
    shade,
    theme,
    transparency,
    variable
  } = _ref;
  let themeColorsKey;
  if (theme.colors) {
    themeColorsKey = CACHE.get(theme.colors);
    if (themeColorsKey === undefined) {
      themeColorsKey = ++KEYS.colors;
      CACHE.set(theme.colors, themeColorsKey);
    }
  }
  let themeOpacityKey;
  if (theme.opacity) {
    themeOpacityKey = CACHE.get(theme.opacity);
    if (themeOpacityKey === undefined) {
      themeOpacityKey = ++KEYS.opacity;
      CACHE.set(theme.opacity, themeOpacityKey);
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
  let retVal = `{${themeColorsKey},${themePaletteKey},${themeOpacityKey}}`;
  if (variable !== undefined) {
    retVal += `,${variable}`;
  }
  if (hue !== undefined) {
    retVal += `,${hue}`;
  }
  if (shade !== undefined) {
    retVal += `,${shade}`;
  }
  if (offset !== undefined) {
    retVal += `,${offset}`;
  }
  if (transparency !== undefined) {
    retVal += `,${transparency}`;
  }
  if (dark !== undefined) {
    retVal += `,${JSON.stringify(dark)}`;
  }
  if (light !== undefined) {
    retVal += `,${JSON.stringify(light)}`;
  }
  return retVal;
};
const getColor = memoize(_ref2 => {
  let {
    dark,
    hue,
    light,
    offset,
    shade,
    theme,
    transparency,
    variable
  } = _ref2;
  let retVal;
  const palette = theme.palette && Object.keys(theme.palette).length > 0 ? theme.palette : DEFAULT_THEME.palette;
  const {
    base,
    variables,
    ...colors
  } = theme.colors && Object.keys(theme.colors).length > 0 ? theme.colors : DEFAULT_THEME.colors;
  const scheme = base === 'dark' ? 'dark' : 'light';
  const mode = scheme === 'dark' ? dark : light;
  let _hue = mode?.hue || hue;
  let _shade = mode?.shade === undefined ? shade : mode.shade;
  const _offset = mode?.offset === undefined ? offset : mode.offset;
  let _transparency = mode?.transparency === undefined ? transparency : mode.transparency;
  if (variable) {
    const _variables = variables?.[scheme] ? variables[scheme] : DEFAULT_THEME.colors.variables[scheme];
    const value = fromVariable(variable, _variables, palette);
    _hue = value.hue;
    _shade = value.shade;
    _transparency = _transparency === undefined ? value.transparency : _transparency;
  }
  if (_hue) {
    const opacity = theme.opacity && Object.keys(theme.opacity).length > 0 ? theme.opacity : DEFAULT_THEME.opacity;
    retVal = toColor(colors, palette, opacity, scheme, _hue, _shade, _offset, _transparency);
  }
  if (retVal === undefined) {
    throw new Error('Error: invalid `getColor` parameters');
  }
  return retVal;
}, _ref3 => {
  let {
    dark,
    hue,
    light,
    offset,
    shade,
    theme,
    transparency,
    variable
  } = _ref3;
  return toKey({
    dark,
    hue,
    light,
    offset,
    shade,
    theme,
    transparency,
    variable
  });
});

export { getColor };
