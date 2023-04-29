/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { css, CSSObject } from 'styled-components';
import { math } from 'polished';
import { FocusBoxShadowParameters, getFocusBoxShadow } from './getFocusBoxShadow';

type FocusStylesParameters = FocusBoxShadowParameters & {
  condition?: boolean;
  styles?: CSSObject;
};

/**
 * Garden standard `box-shadow` focus styling.
 *
 * @param {boolean} [options.condition=true] Supplies an optional condition that can be used to prevent the focus `box-shadow`
 * @param {boolean} [options.focusInset=false] Determines whether the `box-shadow` is inset
 * @param {string|Object} [options.hue='primaryHue'] Provides a theme object `palette` hue or `color` key, or any valid CSS color notation
 * @param {number} [options.shade=600] Selects a shade for the given hue
 * @param {string} [options.shadowWidth='md'] Provides a theme object `shadowWidth` key for the cumulative width of the `box-shadow`
 * @param {string} [options.spacerWidth='xs'] Provides a theme object `shadowWidth` for the white spacer
 * @param {Object} [options.styles] Adds CSS property values to be rendered with `:focus-visible`
 * @param {Object} options.theme Provides values used to resolve the desired color
 *
 * @returns CSS structured as follows, with `{values}` determined by the options provided:
 * ```css
 * :focus {
 *   outline: none;
 * }
 *
 * :focus-visible,
 * [data-garden-focus-visible='true'] {
 *   box-shadow: 0 0 0 {1px} #fff,
 *               0 0 0 {3px} {blue};
 *   outline: {2px} solid transparent;
 *   outline-offset: {1px};
 * }
 * ```
 */
export const focusStyles = ({
  condition = true,
  shadowWidth = 'md',
  spacerWidth = 'xs',
  styles,
  theme,
  ...options
}: FocusStylesParameters) => {
  const outline = `${math(
    `${theme.shadowWidths[shadowWidth]} - ${theme.shadowWidths[spacerWidth]}`
  )} solid transparent`;
  const boxShadow = condition
    ? getFocusBoxShadow({ shadowWidth, spacerWidth, theme, ...options })
    : undefined;

  /*
   * 1. Browser reset
   * 2. High contrast mode hack
   */
  return css`
    &:focus {
      outline: none; /* [1] */
    }

    &:focus-visible,
    &[data-garden-focus-visible='true'] {
      outline: ${outline}; /* [2] */
      outline-offset: ${theme.shadowWidths[spacerWidth]};
      box-shadow: ${boxShadow};
      ${styles}
    }
  `;
};
