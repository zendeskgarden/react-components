/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';

interface IStyledDayLabelHeaderProps {
  $isCompact?: boolean;
}

const sizeStyles = ({
  $isCompact,
  theme
}: IStyledDayLabelHeaderProps & ThemeProps<DefaultTheme>) => {
  const size = theme.space.base * ($isCompact ? 8 : 10);

  return css`
    width: ${size}px;
    height: ${size}px;
  `;
};

export const StyledDayLabelHeader = styled.th<IStyledDayLabelHeaderProps>`
  padding: 0;
  text-align: center;

  ${sizeStyles}
`;
