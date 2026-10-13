/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { IStyledBaseProps } from '../../types/views';

const colorStyles = ({ theme }: IStyledBaseProps) => {
  return css`
    color: ${getColor({ variable: 'foreground.subtle', theme })};
  `;
};

/**
 * 1. List reset.
 * 2. Text truncation.
 */
export const StyledList = styled.ul`
  direction: ${p => p.theme.rtl && 'rtl'};
  display: flex;
  justify-content: center;
  margin: 0; /* [1] */
  padding: 0; /* [1] */
  list-style: none; /* [1] */
  white-space: nowrap; /* [2] */

  ${colorStyles}

  &:focus {
    outline: none;
  }

  ${componentStyles};
`;
