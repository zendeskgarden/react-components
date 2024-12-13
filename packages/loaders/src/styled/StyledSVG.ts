/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';

interface IStyledSVGProps {
  'data-garden-id': string;
  $color?: string;
  $fontSize?: string | number;
  $width: number | string;
  $height: number | string;
  $containerWidth?: string;
  $containerHeight?: string;
}

const colorStyles = ({ theme, $color = 'inherit' }: IStyledSVGProps & ThemeProps<DefaultTheme>) => {
  const options = $color.includes('.') ? { variable: $color, theme } : { hue: $color, theme };

  return css`
    color: ${getColor(options)};
  `;
};

export const StyledSVG = styled.svg.attrs<IStyledSVGProps>(props => ({
  'data-garden-version': PACKAGE_VERSION,
  xmlns: 'http://www.w3.org/2000/svg',
  focusable: 'false',
  viewBox: `0 0 ${props.$width} ${props.$height}`,
  role: 'img'
}))<IStyledSVGProps>`
  width: ${props => props.$containerWidth || '1em'};
  height: ${props => props.$containerHeight || '0.9em'};
  font-size: ${props => props.$fontSize || 'inherit'};

  ${colorStyles};

  ${componentStyles};
`;
