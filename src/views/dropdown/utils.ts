/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { css } from 'styled-components';

import { getColor } from '../../theming/utils/getColor';
import type { IStyledOptionProps, WithTheme } from '../../types/views';

/**
 * Menu items (and link items) have rounded corners. An active item shows a
 * stripe on its start edge.
 *
 * 1. Replaces the inset shadow of the shared option, so that the rounded
 *    corners clip the stripe. Dropdown options keep the inset shadow.
 * 2. A disabled item shows no stripe.
 */
export const itemStyles = ({ theme, $isActive, $type }: WithTheme<IStyledOptionProps>) => {
  if ($type === 'group') {
    return undefined;
  }

  const showStripe = $isActive && $type !== 'header';

  return css`
    border-radius: ${theme.borderRadii.sm};

    ${
      showStripe &&
      css`
        box-shadow: none; /* [1] */
        overflow: hidden;

        &::before {
          position: absolute;
          box-sizing: border-box;
          top: 0;
          bottom: 0;
          inset-inline-start: 0;
          border-inline-end: ${theme.borderWidths.sm} solid
            ${getColor({ theme, variable: 'background.default' })};
          background-color: ${getColor({ theme, variable: 'border.primaryEmphasis' })};
          width: ${theme.space.base}px;
          pointer-events: none;
          content: '';
        }

        &[aria-disabled='true']::before {
          display: none; /* [2] */
        }
      `
    }
  `;
};
