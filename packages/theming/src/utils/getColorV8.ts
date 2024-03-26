/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import DEFAULT_THEME from '../elements/theme';
import PALETTE from '../elements/palette';
import { Hue } from '../types';
import { darken, lighten, rgba } from 'polished';
import { DefaultTheme } from 'styled-components';
import memoize from 'lodash.memoize';

const PALETTE_V8 = {
  black: '#000',
  white: '#fff',
  product: {
    support: '#00a656',
    message: '#37b8af',
    explore: '#30aabc',
    gather: '#f6c8be',
    guide: '#eb4962',
    connect: '#ff6224',
    chat: '#f79a3e',
    talk: '#efc93d',
    sell: '#c38f00'
  },

  /* primary */
  grey: {
    100: '#f8f9f9',
    200: '#e9ebed',
    300: '#d8dcde',
    400: '#c2c8cc',
    500: '#87929d',
    600: '#68737d',
    700: '#49545c',
    800: '#2f3941'
  },
  blue: {
    100: '#edf7ff',
    200: '#cee2f2',
    300: '#adcce4',
    400: '#5293c7',
    500: '#337fbd',
    600: '#1f73b7',
    700: '#144a75',
    800: '#0f3554'
  },
  red: {
    100: '#fff0f1',
    200: '#f5d5d8',
    300: '#f5b5ba',
    400: '#e35b66',
    500: '#d93f4c',
    600: '#cc3340',
    700: '#8c232c',
    800: '#681219'
  },
  yellow: {
    100: '#fff7ed',
    200: '#ffeedb',
    300: '#fed6a8',
    400: '#ffb057',
    500: '#f79a3e',
    600: '#ed8f1c',
    700: '#ad5918',
    800: '#703815'
  },
  green: {
    100: '#edf8f4',
    200: '#d1e8df',
    300: '#aecfc2',
    400: '#5eae91',
    500: '#228f67',
    600: '#038153',
    700: '#186146',
    800: '#0b3b29'
  },
  kale: {
    100: '#f5fcfc',
    200: '#daeded',
    300: '#bdd9d7',
    400: '#90bbbb',
    500: '#498283',
    600: '#17494d',
    700: '#03363d',
    800: '#012b30'
  },

  /* secondary */
  fuschia: {
    400: '#d653c2',
    600: '#a81897',
    M400: '#cf62a8',
    M600: '#a8458c'
  },
  pink: {
    400: '#ec4d63',
    600: '#d42054',
    M400: '#d57287',
    M600: '#b23a5d'
  },
  crimson: {
    400: '#e34f32',
    600: '#c72a1c',
    M400: '#cc6c5b',
    M600: '#b24a3c'
  },
  orange: {
    400: '#de701d',
    600: '#bf5000',
    M400: '#d4772c',
    M600: '#b35827'
  },
  lemon: {
    400: '#ffd424',
    600: '#ffbb10',
    M400: '#e7a500',
    M600: '#c38f00'
  },
  lime: {
    400: '#43b324',
    600: '#2e8200',
    M400: '#519e2d',
    M600: '#47782c'
  },
  mint: {
    400: '#00a656',
    600: '#058541',
    M400: '#299c66',
    M600: '#2e8057'
  },
  teal: {
    400: '#02a191',
    600: '#028079',
    M400: '#2d9e8f',
    M600: '#3c7873'
  },
  azure: {
    400: '#3091ec',
    600: '#1371d6',
    M400: '#5f8dcf',
    M600: '#3a70b2'
  },
  royal: {
    400: '#5d7df5',
    600: '#3353e2',
    M400: '#7986d8',
    M600: '#4b61c3'
  },
  purple: {
    400: '#b552e2',
    600: '#6a27b8',
    M400: '#b072cc',
    M600: '#9358b0'
  }
};

export const DEFAULT_SHADE = 600;

const adjust = (color: string, expected: number, actual: number) => {
  if (expected !== actual) {
    // Adjust darkness/lightness if color is not the expected shade.
    const amount = (Math.abs(expected - actual) / 100) * 0.05;

    return expected > actual ? darken(amount, color) : lighten(amount, color);
  }

  return color;
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
      background: PALETTE.white,
      foreground: PALETTE.grey[800],
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
  (hue, shade, theme, transparency) =>
    JSON.stringify({ hue, shade, palette: theme?.palette, colors: theme?.colors, transparency })
);
