/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { css, CSSObject } from 'styled-components';
import { math } from 'polished';
import { FocusBoxShadowParameters, getFocusBoxShadow } from './getFocusBoxShadow';

export const SELECTOR_FOCUS_VISIBLE = '&:focus-visible';

type FocusStylesParameters = FocusBoxShadowParameters & {
  condition?: boolean;
  selector?: string;
  styles?: CSSObject;
};

/**
 * Garden standard `box-shadow` focus styling.
 *
 * @param {boolean} [options.condition=true] Supplies an optional condition that can be used to prevent the focus `box-shadow`
 * @param {boolean} [options.inset=false] Determines whether the `box-shadow` is inset
 * @param {string|Object} [options.hue='primaryHue'] Provides a theme object `palette` hue or `color` key, or any valid CSS color notation
 * @param {string} [options.selector=SELECTOR_FOCUS_VISIBLE] Provides a substitute `:focus-visible` pseudo-class CSS selector.
 * @param {number} [options.shade=600] Selects a shade for the given hue
 * @param {string} [options.shadowWidth='md'] Provides a theme object `shadowWidth` key for the cumulative width of the `box-shadow`
 * @param {string|Object} [options.spacerHue='background'] Provides a theme object `palette` hue or `color` key, or any valid CSS color notation
 * @param {number} [options.spacerShade=600] Selects a shade for the given `spacerHue`
 * @param {string} [options.spacerWidth='xs'] Provides a theme object `shadowWidth` for the white spacer, or `null` to remove
 * @param {Object} [options.styles] Adds CSS property values to be rendered with `:focus-visible`
 * @param {Object} options.theme Provides values used to resolve the desired color
 *
 * @returns CSS structured as follows, with `{values}` determined by the options provided:
 * ```css
 * :focus {
 *   outline: none;
 * }
 *
 * :focus-visible {
 *   box-shadow: 0 0 0 {1px} #fff,
 *               0 0 0 {3px} {blue};
 *   outline: {2px} solid transparent;
 *   outline-offset: {1px};
 *   // additional {styles} here...
 * }
 * ```
 */
export const focusStyles = ({
  condition = true,
  selector = SELECTOR_FOCUS_VISIBLE,
  shadowWidth = 'md',
  spacerWidth = 'xs',
  styles: { boxShadow, ...styles } = {},
  theme,
  ...options
}: FocusStylesParameters) => {
  const _boxShadow = condition
    ? getFocusBoxShadow({ boxShadow, shadowWidth, spacerWidth, theme, ...options })
    : boxShadow;
  let outline;
  let outlineOffset;

  if (spacerWidth === null) {
    outline = theme.shadowWidths[shadowWidth];
  } else {
    outline = `${math(
      `${theme.shadowWidths[shadowWidth]} - ${theme.shadowWidths[spacerWidth]}`
    )} solid transparent`;
    outlineOffset = theme.shadowWidths[spacerWidth];
  }

  /*
   * 1. Browser reset
   * 2. High contrast mode hack
   */
  return css`
    &:focus {
      outline: none; /* [1] */
    }

    ${selector} {
      outline: ${outline}; /* [2] */
      outline-offset: ${outlineOffset};
      box-shadow: ${_boxShadow};
      ${styles}
    }
  `;
};
