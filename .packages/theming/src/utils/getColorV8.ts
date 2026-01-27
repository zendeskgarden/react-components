/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import memoize from 'lodash.memoize';
import { darken, lighten, rgba } from 'polished';
import { DefaultTheme } from 'styled-components';

import PALETTE_V8 from '../elements/palette/v8';
import DEFAULT_THEME from '../elements/theme';
import { Hue } from '../types';

export const DEFAULT_SHADE = 600;

const adjust = (color: string, expected: number, actual: number) => {
  if (expected !== actual) {
    // Adjust darkness/lightness if color is not the expected shade.
    const amount = (Math.abs(expected - actual) / 100) * 0.05;

    return expected > actual ? darken(amount, color) : lighten(amount, color);
  }

  return color;
};

const CACHE = new WeakMap();
const KEYS = { colors: 0, palette: 0 };

CACHE.set(DEFAULT_THEME.colors, KEYS.colors);
CACHE.set(DEFAULT_THEME.palette, KEYS.palette);

const toKey = ({
  hue,
  shade,
  theme,
  transparency
}: {
  hue: Hue;
  shade?: number;
  theme?: DefaultTheme;
  transparency?: number;
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

/**
 * @deprecated Use `getColor` instead.
 *
 * Get the palette color for the given hue, shade, and theme.
 *
 * @param {string|Object} hue A `theme.palette` hue or one of the following `theme.colors` keys:
 *  - `'primaryHue'` = `theme.colors.primaryHue`
 *  - `'dangerHue'` = `theme.colors.dangerHue`
 *  - `'warningHue'` = `theme.colors.warningHue`
 *  - `'successHue'` = `theme.colors.successHue`
 *  - `'neutralHue'` = `theme.colors.neutralHue`
 *  - `'chromeHue'` = `theme.colors.chromeHue`
 * @param {number} [shade=DEFAULT_SHADE] A hue shade.
 * @param {Object} theme Context `theme` object.
 * @param {Number} [transparency] An alpha-channel value between 0 and 1.
 */
export const getColorV8 = memoize(
  (hue: Hue, shade: number = DEFAULT_SHADE, theme?: DefaultTheme, transparency?: number) => {
    let retVal;

    if (isNaN(shade)) {
      return undefined;
    }

    const palette = {
      /* provide background and foreground fallback for legacy theme usage */
      background: PALETTE_V8.white,
      foreground: PALETTE_V8.grey[800],
      /* provide palette fallback for legacy theme usage */
      ...(theme && theme.palette
        ? { ...theme.palette, ...PALETTE_V8 }
        : { ...DEFAULT_THEME.palette, ...PALETTE_V8 })
    } as Record<string, Hue>;
    const colors = theme && theme.colors ? theme.colors : DEFAULT_THEME.colors;

    let _hue: Hue;

    if (typeof hue === 'string') {
      _hue = (colors as any)[hue] || hue;
    } else {
      _hue = hue;
    }

    if (Object.prototype.hasOwnProperty.call(palette, _hue as string)) {
      // Convert string to a palette hue object.
      _hue = palette[_hue as string];
    }

    if (typeof _hue === 'object') {
      retVal = _hue[shade];

      if (!retVal) {
        const _shade = Object.keys(_hue)
          .map(hueKey => parseInt(hueKey, 10))
          .reduce((previous, current) => {
            // Find the closest available shade within the given hue.
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
  },
  (hue, shade, theme, transparency) => toKey({ hue, shade, theme, transparency })
);
