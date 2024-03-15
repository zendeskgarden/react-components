/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { scale } from 'chroma-js';
import { darken, lighten, rgba } from 'polished';
import get from 'lodash.get';
import DEFAULT_THEME from '../elements/theme';
import PALETTE from '../elements/palette';
import { Hue, IGardenTheme } from '../types';

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

/* convert the given hue + shade to a color */
const toColor = (
  colors: IGardenTheme['colors'],
  palette: IGardenTheme['palette'],
  scheme: 'dark' | 'light',
  hue: string,
  shade?: number | string,
  offset?: number
) => {
  let retVal;
  let _hue: Hue =
    colors[hue as keyof typeof colors] /* ex. `hue` = 'primaryHue' */ ||
    hue; /* ex. `hue` = '#fd5a1e' */

  if (Object.hasOwn(palette, _hue)) {
    _hue = palette[_hue]; /* ex. `hue` = 'grey' */
  }

  if (typeof _hue === 'object') {
    const _shade = toShade(shade, offset, scheme);

    retVal = _hue[_shade];

    if (!retVal) {
      const closestShade = Object.keys(_hue)
        .map(hueShade => parseInt(hueShade, 10))
        .reduce((previous, current) => {
          // Find the closest available shade within the given hue
          return Math.abs(current - _shade) < Math.abs(previous - _shade) ? current : previous;
        });

      retVal = adjust(_hue[closestShade], _shade, closestShade);
    }
  } else {
    // TODO adjust for shade
    retVal = undefined;
  }

  return retVal;
};

/* convert the given object + path to a string value */
const toValue = (object: object, path: string) => {
  const value = get(object, path);

  if (typeof value === 'string') {
    return value;
  } else if (value === undefined) {
    throw new ReferenceError(`Error: color variable "${path}" is not defined`);
  } else {
    throw new TypeError(`Error: unexpected '${typeof value}' type for color variable "${path}"`);
  }
};

type ColorParameters = {
  dark?: {
    hue?: string;
    offset?: number;
    shade?: number;
  };
  hue?: string;
  light?: {
    hue?: string;
    offset?: number;
    shade?: number;
  };
  offset?: number;
  shade?: number;
  theme: IGardenTheme;
  transparency?: number;
  variable?: string;
};

export const getColor = ({
  dark,
  hue,
  light,
  offset,
  shade,
  theme,
  transparency,
  variable
}: ColorParameters) => {
  let retVal;

  // bulletproof object references for potential non-typed usage
  const colors = theme.colors ? theme.colors : DEFAULT_THEME.colors;
  const palette = theme.palette ? theme.palette : DEFAULT_THEME.palette;
  const scheme = colors.base === 'dark' ? 'dark' : 'light';

  if (variable) {
    // variable lookup takes precedence
    const variables = theme.variables?.colors?.[scheme]
      ? theme.variables.colors[scheme]
      : DEFAULT_THEME.variables.colors[scheme];
    const value = toValue(variables, variable);
    const [_hue, _shade] = value.split(/\.(?<shade>.*)/u) as [string, string];

    if (_hue === 'palette') {
      retVal = toValue(palette, _shade); /* ex. `variable` = 'palette.white' */
    } else {
      let _offset;

      if (scheme === 'dark' && dark?.offset) {
        _offset = dark.offset;
      } else if (scheme === 'light' && light?.offset) {
        _offset = light.offset;
      } else {
        _offset = offset;
      }

      retVal = toColor(colors, palette, scheme, _hue, _shade, _offset);
    }
  } else if ((dark && scheme === 'dark') || (light && scheme === 'light')) {
    // penultimate lookup is light/dark scheme
    const mode = (scheme === 'dark' ? dark : light)!;
    const _hue = mode.hue || hue;

    if (_hue) {
      retVal = toColor(colors, palette, scheme, _hue, mode.shade || shade, mode.offset || offset);
    }
  } else if (hue) {
    // last lookup is schemeless
    retVal = toColor(colors, palette, scheme, hue, shade, offset);
  }

  if (retVal === undefined) {
    throw new Error('Error: invalid `getColor` parameters');
  } else if (transparency) {
    retVal = rgba(retVal, transparency);
  }

  return retVal;
};

scale([PALETTE.white, PALETTE.black]).correctLightness().colors(12);
