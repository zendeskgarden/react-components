/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import DEFAULT_THEME from '../theme';
import { darken, lighten } from 'polished';

const toHue = (hue, theme) => {
  const colors = theme && theme.colors ? theme.colors : DEFAULT_THEME.colors;

  return hue ? colors[hue] || hue : colors.primaryHue;
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
 * @param {number} [shade=600] A hue shade.
 * @param {Object} theme Context `theme` object.
 *
 * @component
 */
export default function getColor(hue, shade = 600, theme) {
  let retVal;

  if (isNaN(parseInt(shade, 10))) {
    retVal = undefined;
  } else {
    const palette = theme && theme.palette ? theme.palette : DEFAULT_THEME.palette;
    let _hue = toHue(hue, theme);

    if (Object.prototype.hasOwnProperty.call(palette, _hue)) {
      // Convert string to a hue object.
      _hue = palette[_hue];
    }

    if (_hue && typeof _hue === 'object') {
      retVal = _hue[shade];

      if (!retVal) {
        const _shade = Object.keys(_hue).reduce((previous, current) => {
          // Find the closest available shade within the given hue.
          return Math.abs(current - shade) < Math.abs(previous - shade)
            ? parseInt(current, 10)
            : parseInt(previous, 10);
        });

        retVal = _hue[_shade];

        if (shade !== _shade) {
          // Adjust darkness/lightness if shade doesn't exist within the given hue.
          const amount = (Math.abs(shade - _shade) / 100) * 0.05;

          retVal = shade > _shade ? darken(amount, retVal) : lighten(amount, retVal);
        }
      }
    } else {
      retVal = _hue;
    }
  }

  return retVal;
}
