/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { IStyledBaseProps } from '../../types/views';

function sizeStyles({ theme }: IStyledBaseProps) {
  const property = theme.rtl ? 'margin-left' : 'margin-right';

  return css`
    ${property}: ${theme.space.xs};
  `;
}

export const StyledGrip = styled.div`
  display: flex;
  /* prettier-ignore */
  transition: color 0.1s ease-in-out;
  box-sizing: border-box;
  color: ${p => getColor({ variable: 'foreground.subtle', theme: p.theme })};

  ${sizeStyles}

  ${componentStyles};
`;
