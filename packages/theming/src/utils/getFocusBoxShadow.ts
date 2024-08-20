/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import DEFAULT_THEME from '../elements/theme';
import { FocusBoxShadowParameters } from '../types';
import { getColorV8 } from './getColorV8';
import { getColor } from './getColor';

/**
 * Get a CSS `box-shadow` property value for focus state styling.
 *
 * @param {string} [options.boxShadow] Provides an existing `box-shadow` (a drop shadow, for example) to be retained along with the focus ring
 * @param {boolean} [options.inset=false] Determines whether the `box-shadow` is inset
 * @param {Object} [options.color={ variable: 'border.primaryEmphasis' }] Provides an object with `getColor` parameters used to determine the focus ring color
 * @param {string} [options.shadowWidth='md'] Provides a theme object `shadowWidth` key for the cumulative width of the `box-shadow`
 * @param {Object} [options.spacerColor={ variable: 'background.default' }] Provides an object with `getColor` parameters used to determine the spacer color
 * @param {string} [options.spacerWidth='xs'] Provides a theme object `shadowWidth` for the white spacer, or `null` to remove
 * @param {Object} options.theme Provides values used to resolve the desired color
 *
 * @returns A `box-shadow` property value for the given options. Default is a
 * 3px blue ring with a 1px spacer overlay that matches the background.
 */
export const getFocusBoxShadow = ({
  boxShadow,
  inset = false,
  color = { variable: 'border.primaryEmphasis' },
  shadowWidth = 'md',
  spacerColor = { variable: 'background.default' },
  spacerWidth = 'xs',
  theme = DEFAULT_THEME,
  ...args // fallback catch for v8 parameters to be removed in v10
}: FocusBoxShadowParameters) => {
  const _args = args as any;
  const _color = _args.hue
    ? getColorV8(_args.hue, _args.shade, theme)!
    : getColor({ ...color, theme });
  const shadow = theme.shadows[shadowWidth](_color);

  if (spacerWidth === null) {
    return `${inset ? 'inset' : ''} ${shadow}`;
  }

  const _spacerColor = _args.spacerHue
    ? getColorV8(_args.spacerHue, _args.spacerShade, theme)!
    : getColor({ ...spacerColor, theme });

  const retVal = `
    ${inset ? 'inset' : ''} ${theme.shadows[spacerWidth](_spacerColor)},
    ${inset ? 'inset' : ''} ${shadow}`;

  return boxShadow ? `${retVal}, ${boxShadow}` : retVal;
};
