/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { IconButton } from '@zendeskgarden/react-buttons';

interface IStyledHeaderPaddleProps {
  $gridColumn?: string;
  $isCompact?: boolean;
}

const sizeStyles = ({ $isCompact, theme }: IStyledHeaderPaddleProps & ThemeProps<DefaultTheme>) => {
  const size = theme.space.base * ($isCompact ? 8 : 10);

  return css`
    width: ${size}px;
    min-width: ${size}px;
    height: ${size}px;
  `;
};

export const StyledHeaderPaddle = styled(IconButton)<IStyledHeaderPaddleProps>`
  grid-column: ${props => props.$gridColumn};
  transform: ${props => props.theme.rtl && 'rotate(180deg)'};

  ${sizeStyles}

  ${componentStyles};
`;
