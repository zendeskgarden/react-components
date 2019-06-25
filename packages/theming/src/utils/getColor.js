/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { default as defaultTheme } from '../theme';
import { darken, lighten } from 'polished';

/** @component */
export default function getColor({ hue, shade, theme } = {}) {
  let retVal;
  const palette = theme && theme.palette ? theme.palette : defaultTheme.palette;
  const colors = theme && theme.colors ? theme.colors : defaultTheme.colors;
  let _hue = hue || colors.primaryHue;

  if (Object.prototype.hasOwnProperty.call(palette, _hue)) {
    // Convert string to a hue object.
    _hue = palette[_hue];
  }

  if (_hue && typeof _hue === 'object') {
    let _shade = shade || colors.primaryShade;

    _shade = Object.keys(_hue).reduce((previous, current) => {
      // Find the closest available shade within the given hue.
      return Math.abs(current - _shade) < Math.abs(previous - _shade)
        ? parseInt(current, 10)
        : parseInt(previous, 10);
    });

    retVal = _hue[_shade];

    if (shade !== _shade) {
      // Adjust darkness/lightness if shade doesn't exist within the given hue.
      const amount = (Math.abs(shade - _shade) / 100) * 0.05;

      retVal = shade > _shade ? darken(amount, retVal) : lighten(amount, retVal);
    }
  } else {
    retVal = _hue;
  }

  return retVal;
}
