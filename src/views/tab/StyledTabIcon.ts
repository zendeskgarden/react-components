/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { WithTheme } from '../../types/views';

const colorStyles = ({ theme }: WithTheme) => {
  const color = getColor({ theme, variable: 'foreground.subtle' });

  return css`
    color: ${color};
  `;
};

/*
 * The icon renders at the 20px icon size (the `StyledIconButton` precedent).
 * Hover, selected and disabled colors come from `StyledTab`.
 */
export const StyledTabIcon = styled.span<WithTheme>`
  display: inline-flex;
  flex-shrink: 0;

  & > svg {
    width: ${({ theme }) => theme.space.md};
    height: ${({ theme }) => theme.space.md};
  }

  ${colorStyles};

  ${componentStyles};
`;
