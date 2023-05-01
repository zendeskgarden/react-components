/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import DEFAULT_THEME from '../elements/theme';
import { IGardenTheme } from '../types';
import { DEFAULT_SHADE, Hue, getColor } from './getColor';

export type FocusBoxShadowParameters = {
  inset?: boolean;
  hue?: Hue;
  shade?: number;
  shadowWidth?: 'sm' | 'md';
  spacerWidth?: 'xs' | 'sm';
  theme: IGardenTheme;
};

/**
 * Get a CSS `box-shadow` property value for focus state styling. The `hue` and
 * `shade` are used to determine the color of the focus ring.
 *
 * @param {boolean} [options.inset=false] Determines whether the `box-shadow` is inset
 * @param {string|Object} [options.hue='primaryHue'] Provides a theme object `palette` hue or `color` key, or any valid CSS color notation
 * @param {number} [options.shade=600] Selects a shade for the given hue
 * @param {string} [options.shadowWidth='md'] Provides a theme object `shadowWidth` key for the cumulative width of the `box-shadow`
 * @param {string} [options.spacerWidth='xs'] Provides a theme object `shadowWidth` for the white spacer
 * @param {Object} options.theme Provides values used to resolve the desired color
 *
 * @returns A `box-shadow` property value for the given options. Default is a
 * 3px `blue[600]` ring with a 1px white spacer overlay.
 */
export const getFocusBoxShadow = ({
  inset = false,
  hue = 'primaryHue',
  shade = DEFAULT_SHADE,
  shadowWidth = 'md',
  spacerWidth = 'xs',
  theme = DEFAULT_THEME
}: FocusBoxShadowParameters) => {
  const color = getColor(hue, shade, theme);

  return `
    ${inset ? 'inset' : ''} ${theme.shadows[spacerWidth](theme.colors.background)},
    ${inset ? 'inset' : ''} ${theme.shadows[shadowWidth](color!)}`;
};
