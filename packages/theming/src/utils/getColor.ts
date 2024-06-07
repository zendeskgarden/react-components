/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getScale, parseToRgba } from 'color2k';
import { darken, getContrast, lighten, rgba } from 'polished';
import get from 'lodash.get';
import memoize from 'lodash.memoize';
import DEFAULT_THEME from '../elements/theme';
import { ColorParameters, Hue, IGardenTheme } from '../types';

const adjust = (color: string, expected: number, actual: number) => {
  if (expected !== actual) {
    // Adjust darkness/lightness if color is not the expected shade
    const amount = (Math.abs(expected - actual) / 100) * 0.05;

    return expected > actual ? darken(amount, color) : lighten(amount, color);
  }

  return color;
};

/* convert the optional shade + offset to a shade for the given scheme */
const toShade = (shade?: number | string, offset?: number, scheme?: 'dark' | 'light') => {
  let _shade;

  if (shade === undefined) {
    _shade = scheme === 'dark' ? 500 : 700;
  } else {
    _shade = parseInt(shade.toString(), 10);

    if (isNaN(_shade)) {
      throw new TypeError(`Error: unexpected '${typeof shade}' type for color shade "${shade}"`);
    }
  }

  return _shade + (offset || 0);
};

/* convert the given hue object to a hex color */
const toHex = (
  hue: Record<string | number, string>,
  shade?: number | string,
  offset?: number,
  scheme?: 'dark' | 'light'
) => {
  const _shade = toShade(shade, offset, scheme);
  let retVal = hue[_shade];

  if (!retVal) {
    const closestShade = Object.keys(hue)
      .map(hueShade => parseInt(hueShade, 10))
      .reduce((previous, current) => {
        // Find the closest available shade within the given hue
        return Math.abs(current - _shade) < Math.abs(previous - _shade) ? current : previous;
      });

    retVal = adjust(hue[closestShade], _shade, closestShade);
  }

  return retVal;
};

/* Validates color */
const isValidColor = (maybeColor: any) => {
  try {
    return !!parseToRgba(maybeColor);
  } catch {
    return false;
  }
};

/**
 *
 * Finds the index of the nearest element to a given target value in a sorted array using a binary search approach.
 */
function findNearestIndex(target: number, arr: number[], startIndex = 0) {
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

/**
 * Generates a 12-step offset-based color scale.
 * Each key is an offset value and the corresponding value
 * is the color that best matches the target contrast ratio for that offset.
 */
const generateColorScale = memoize((color: string) => {
  /**
   * Based on empirical research, a scale of 200 colors
   * provided the best precision to size ratio.
   */
  const scaleSize = 200;
  const _scale = getScale('#FFF', color, '#000');
  const scale = (x: number) => _scale(x / scaleSize);

  const colors = [];
  const contrastRatios = [];

  for (let i = 0; i <= scaleSize; i++) {
    const _color = scale(i);
    colors.push(_color);
    contrastRatios.push(getContrast('#FFF', _color));
  }

  const palette: Record<string, string> = {};
  let startIndex = 0;

  for (const offset in OFFSET_TO_TARGET_RATIO) {
    if (Object.prototype.hasOwnProperty.call(OFFSET_TO_TARGET_RATIO, offset)) {
      const ratio = (OFFSET_TO_TARGET_RATIO as any)[offset];

      const nearestIndex = findNearestIndex(ratio, contrastRatios, startIndex);
      startIndex = nearestIndex + 1;

      palette[offset] = colors[nearestIndex];
    }
  }

  return palette;
});

/* convert the given hue + shade to a color */
const toColor = (
  colors: Omit<IGardenTheme['colors'], 'base' | 'variables'>,
  palette: IGardenTheme['palette'],
  opacity: IGardenTheme['opacity'],
  scheme: 'dark' | 'light',
  hue: string,
  shade?: number | string,
  offset?: number,
  transparency?: number
) => {
  let retVal;
  let _hue: Hue =
    colors[hue as keyof typeof colors] /* ex. `hue` = 'primaryHue' */ ||
    hue; /* ex. `hue` = '#fd5a1e' */

  // eslint-disable-next-line n/no-unsupported-features/es-builtins
  if (Object.hasOwn(palette, _hue)) {
    _hue = palette[_hue]; /* ex. `hue` = 'grey' */
  }

  if (typeof _hue === 'object') {
    retVal = toHex(_hue, shade, offset, scheme);
  } else if (_hue === 'transparent' || isValidColor(_hue)) {
    if (shade === undefined) {
      retVal = _hue;
    } else {
      _hue = generateColorScale(_hue);

      retVal = toHex(_hue, shade, offset, scheme);
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

/* convert the given object + path to a string value */
const toProperty = (object: object, path: string) => {
  const retVal = get(object, path);

  if (typeof retVal === 'string') {
    return retVal;
  } else if (retVal === undefined) {
    throw new ReferenceError(`Error: color variable '${path}' is not defined`);
  } else {
    throw new TypeError(`Error: unexpected '${typeof retVal}' type for color variable "${path}"`);
  }
};

/* derive the property + transparency from the given rgba variable value */
const fromRgba = (value: string) => {
  let retVal;
  const regex =
    /rgba\s*\(\s*(?<property>[#\w.]+)\s*,\s*(?<alpha>[\w.]+)\s*\)/gu; /* ex. 'rgba(primaryHue.700, 600)' */
  const _rgba = regex.exec(value);

  if (_rgba && _rgba.groups) {
    const property = _rgba.groups.property;
    const transparency = parseFloat(_rgba.groups.alpha);

    retVal = { property, transparency };
  } else {
    throw new Error(`Error: invalid \`rgba\` value "${value}"`);
  }

  return retVal;
};

/* derive the hue + shade + transparency from the given variable */
const fromVariable = (
  variable: string,
  variables: IGardenTheme['colors']['variables']['dark' | 'light'],
  palette: IGardenTheme['palette']
) => {
  const retVal: { hue?: string; shade?: number; transparency?: number } = {};
  let property = toProperty(variables, variable);

  if (property.startsWith('rgba')) {
    const value = fromRgba(property);

    property = value.property;
    retVal.transparency = value.transparency;
  }

  const [key, value] = property.split(/\.(?<value>.*)/u);

  if (key === 'palette') {
    retVal.hue = toProperty(palette, value); /* ex. `variable` = 'palette.white' */
  } else {
    retVal.hue = key; /* ex. `variable` = '#fd5a1e' */

    if (value !== undefined) {
      retVal.shade = parseInt(value, 10); /* ex. `variable` = 'primaryHue.700' */
    }
  }

  return retVal;
};

/**
 * Get a color value from the theme. Variable lookup takes precedence, followed
 * by `dark` and `light` object values. If none of these are provided, `hue`,
 * `shade`, `offset`, and `transparency` are used as fallbacks to determine the
 * color.
 *
 * @param {Object} options.theme Provides values used to resolve the desired color
 * @param {string} [options.variable] A variable key (i.e. `'background.default'`) used to resolve a color value for the theme color base
 * @param {Object} [options.dark] An object with `hue`, `shade`, `offset`, and `transparency` values to be used in dark mode
 * @param {Object} [options.light] An object with `hue`, `shade`, `offset`, and `transparency` values to be used in light mode
 * @param {string} [options.hue] A `theme.palette` hue or one of the following `theme.colors` keys:
 *  - `'primaryHue'` = `theme.colors.primaryHue`
 *  - `'dangerHue'` = `theme.colors.dangerHue`
 *  - `'warningHue'` = `theme.colors.warningHue`
 *  - `'successHue'` = `theme.colors.successHue`
 *  - `'neutralHue'` = `theme.colors.neutralHue`
 *  - `'chromeHue'` = `theme.colors.chromeHue`
 * @param {number} [options.shade] A hue shade
 * @param {number} [options.offset] A positive or negative value to adjust the shade
 * @param {number} [options.transparency] A `theme.opacity` key or an alpha-channel value between 0 and 1
 */
export const getColor = memoize(
  ({ dark, hue, light, offset, shade, theme, transparency, variable }: ColorParameters) => {
    let retVal;

    // bulletproof object references for potential non-typed usage
    const palette =
      theme.palette && Object.keys(theme.palette).length > 0
        ? theme.palette
        : DEFAULT_THEME.palette;
    const { base, variables, ...colors } =
      theme.colors && Object.keys(theme.colors).length > 0 ? theme.colors : DEFAULT_THEME.colors;
    const scheme = base === 'dark' ? 'dark' : 'light';
    const mode = (scheme === 'dark' ? dark : light)!;
    let _hue = mode?.hue || hue;
    let _shade = mode?.shade === undefined ? shade : mode.shade;
    const _offset = mode?.offset === undefined ? offset : mode.offset;
    let _transparency = mode?.transparency === undefined ? transparency : mode.transparency;

    if (variable) {
      // variable lookup takes precedence
      const _variables = variables?.[scheme]
        ? variables[scheme]
        : DEFAULT_THEME.colors.variables[scheme];
      const value = fromVariable(variable, _variables, palette);

      _hue = value.hue;
      _shade = value.shade;
      _transparency = _transparency === undefined ? value.transparency : _transparency;
    }

    if (_hue) {
      const opacity =
        theme.opacity && Object.keys(theme.opacity).length > 0
          ? theme.opacity
          : DEFAULT_THEME.opacity;

      retVal = toColor(colors, palette, opacity, scheme, _hue, _shade, _offset, _transparency);
    }

    if (retVal === undefined) {
      throw new Error('Error: invalid `getColor` parameters');
    }

    return retVal;
  },
  ({ dark, hue, light, offset, shade, theme, transparency, variable }) =>
    JSON.stringify({
      dark,
      hue,
      light,
      offset,
      shade,
      colors: theme.colors,
      palette: theme.palette,
      opacity: theme.opacity,
      transparency,
      variable
    })
);
