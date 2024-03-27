/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { scale, valid } from 'chroma-js';
import { darken, lighten, rgba } from 'polished';
import get from 'lodash.get';
import memoize from 'lodash.memoize';
import DEFAULT_THEME from '../elements/theme';
import PALETTE from '../elements/palette';
import { Hue, IGardenTheme } from '../types';

const PALETTE_SIZE = Object.keys(PALETTE.blue).length;

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

/* convert the given hue + shade to a color */
const toColor = (
  colors: Omit<IGardenTheme['colors'], 'base' | 'variables'>,
  palette: IGardenTheme['palette'],
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

  if (Object.hasOwn(palette, _hue)) {
    _hue = palette[_hue]; /* ex. `hue` = 'grey' */
  }

  if (typeof _hue === 'object') {
    retVal = toHex(_hue, shade, offset, scheme);
  } else if (valid(_hue)) {
    if (shade === undefined) {
      retVal = _hue;
    } else {
      const _colors = scale([PALETTE.white, _hue, PALETTE.black])
        .correctLightness()
        .colors(PALETTE_SIZE + 2);

      _hue = _colors.reduce<Record<number, string>>((_retVal, color, index) => {
        if (index > 0 && index <= PALETTE_SIZE) {
          _retVal[index * 100] = color;
        }

        return _retVal;
      }, {});

      retVal = toHex(_hue, shade, offset, scheme);
    }
  }

  if (retVal && transparency) {
    retVal = rgba(retVal, transparency);
  }

  return retVal;
};

/* convert the given object + path to a string value */
const toProperty = (object: object, path: string) => {
  const retVal = get(object, path);

  if (typeof retVal === 'string') {
    return retVal;
  } else if (retVal === undefined) {
    throw new ReferenceError(`Error: color variable "${path}" is not defined`);
  } else {
    throw new TypeError(`Error: unexpected '${typeof retVal}' type for color variable "${path}"`);
  }
};

type ColorParameters = {
  dark?: {
    hue?: string;
    offset?: number;
    shade?: number;
    transparency?: number;
  };
  hue?: string;
  light?: {
    hue?: string;
    offset?: number;
    shade?: number;
    transparency?: number;
  };
  offset?: number;
  shade?: number;
  theme: IGardenTheme;
  transparency?: number;
  variable?: string;
};

export const getColor = memoize(
  ({ dark, hue, light, offset, shade, theme, transparency, variable }: ColorParameters) => {
    let retVal;

    // bulletproof object references for potential non-typed usage
    const palette = theme.palette ? theme.palette : DEFAULT_THEME.palette;
    const { base, variables, ...colors } = theme.colors ? theme.colors : DEFAULT_THEME.colors;
    const scheme = base === 'dark' ? 'dark' : 'light';
    const mode = (scheme === 'dark' ? dark : light)!;
    let _hue = mode?.hue || hue;
    let _shade = mode?.shade || shade;
    const _offset = mode?.offset || offset;
    const _transparency = mode?.transparency || transparency;

    if (variable) {
      // variable lookup takes precedence
      const _variables = variables?.[scheme]
        ? variables[scheme]
        : DEFAULT_THEME.colors.variables[scheme];
      const property = toProperty(_variables, variable);
      const [key, value] = property.split(/\.(?<value>.*)/u);

      if (key === 'palette') {
        _hue = toProperty(palette, value); /* ex. `variable` = 'palette.white' */
      } else {
        _hue = key;
        _shade = parseInt(value, 10);
      }
    }

    if (_hue) {
      retVal = toColor(colors, palette, scheme, _hue, _shade, _offset, _transparency);
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
      transparency,
      variable
    })
);
