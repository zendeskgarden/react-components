/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getColor } from '@zendeskgarden/react-theming';
import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';

export interface IStyledBaseRowProps {
  $isStriped?: boolean;
}

const sizeStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  return css`
    border-bottom: ${theme.borders.sm};
    vertical-align: top;
    box-sizing: border-box;
  `;
};

const colorStyles = ({ theme, $isStriped }: IStyledBaseRowProps & ThemeProps<DefaultTheme>) => {
  const borderColor = getColor({ variable: 'border.subtle', theme });
  const backgroundColor = getColor({
    variable: 'background.subtle',
    transparency: theme.opacity[100],
    light: { offset: 300 },
    dark: { offset: -600 },
    theme
  });

  return css`
    border-bottom-color: ${borderColor};
    background-color: ${$isStriped && backgroundColor};
  `;
};

export const StyledBaseRow = styled.tr<IStyledBaseRowProps>`
  display: table-row;
  transition: background-color 0.1s ease-in-out;

  ${sizeStyles}

  ${colorStyles}
`;
