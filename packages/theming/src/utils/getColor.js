/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { default as defaultTheme } from '../theme';
import { darken, lighten } from 'polished';

const toHue = (hue, theme) => {
  const colors = theme && theme.colors ? theme.colors : defaultTheme.colors;

  switch (hue) {
    case '__primary':
      return colors.primaryHue;
    case '__danger':
      return colors.dangerHue;
    case '__warning':
      return colors.warningHue;
    case '__success':
      return colors.successHue;
    case '__neutral':
      return colors.neutralHue;
    case '__chrome':
      return colors.chromeHue;
    default:
      return hue || colors.primaryHue;
  }
};

/**
 * Get the palette color for the given hue, shade, and theme.
 *
 * @param {string|Object} [props.hue] A palette hue or one of the following reserved keys:
 *  - `'__primary'` = `theme.colors.primaryHue`
 *  - `'__danger'` = `theme.colors.dangerHue`
 *  - `'__warning'` = `theme.colors.warningHue`
 *  - `'__success'` = `theme.colors.successHue`
 *  - `'__neutral'` = `theme.colors.neutralHue`
 *  - `'__chrome'` = `theme.colors.chromeHue`
 * @param {number} [props.shade=600] A hue shade.
 * @param {Object} [props.theme] Context `theme` object.
 *
 * @component
 */
export default function getColor({ hue, shade = 600, theme } = {}) {
  let retVal;

  if (isNaN(shade)) {
    retVal = undefined;
  } else {
    const palette = theme && theme.palette ? theme.palette : defaultTheme.palette;
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
