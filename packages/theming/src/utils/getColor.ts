/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import DEFAULT_THEME from '../theme';
import darken from 'polished/lib/color/darken';
import lighten from 'polished/lib/color/lighten';
import rgba from 'polished/lib/color/rgba';
import { DefaultTheme, Hue } from 'styled-components';

const DEFAULT_SHADE = 600;

const adjust = (color: string, expected: number, actual: number) => {
  if (expected !== actual) {
    // Adjust darkness/lightness if color is not the expected shade.
    const amount = (Math.abs(expected - actual) / 100) * 0.05;

    return expected > actual ? darken(amount, color) : lighten(amount, color);
  }

  return color;
};

/**
 * Get the palette color for the given hue, shade, and theme.
 *
 * @param {string|Object} hue A `theme.palette` hue or one of the following `theme.colors` keys:
 *  - `'background'` = `theme.colors.background`
 *  - `'foreground'` = `theme.colors.foreground`
 *  - `'primaryHue'` = `theme.colors.primaryHue`
 *  - `'dangerHue'` = `theme.colors.dangerHue`
 *  - `'warningHue'` = `theme.colors.warningHue`
 *  - `'successHue'` = `theme.colors.successHue`
 *  - `'neutralHue'` = `theme.colors.neutralHue`
 *  - `'chromeHue'` = `theme.colors.chromeHue`
 * @param {number} [shade=DEFAULT_SHADE] A hue shade.
 * @param {Object} theme Context `theme` object.
 * @param {Number} [transparency] An alpha-channel value between 0 and 1.
 *
 * @component
 */
export default function getColor(
  hue: Hue,
  shade: number = DEFAULT_SHADE,
  theme?: DefaultTheme,
  transparency?: number
) {
  let retVal;

  if (isNaN(shade)) {
    return undefined;
  }

  const palette = theme && theme.palette ? theme.palette : DEFAULT_THEME.palette;
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
}
