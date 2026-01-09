/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HueColorParameters } from '../types';
import { getColor } from './getColor';

/**
 * Get a hue color from the theme.
 *
 * @param {Object} options.theme Provides values used to resolve the desired color
 * @param {string} options.hue A color variable key (i.e. 'foreground.subtle'), key hue value (i.e. 'primaryHue'), or valid CSS color
 */
export const getHueColor = ({ theme, value }: HueColorParameters) => {
  const pattern = /^[a-z]+\.[a-z]+$/giu; /* ex. 'background.primaryEmphasis' */
  const options = pattern.test(value) ? { variable: value, theme } : { hue: value, theme };

  return getColor(options);
};
