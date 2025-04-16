/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { getValueAndUnit } from 'polished';
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

const sizeStyles = ({
  $containerWidth = '1em',
  $containerHeight = '0.9em',
  $fontSize = 'inherit'
}: IStyledSVGProps) => {
  const [value, unit] = getValueAndUnit($fontSize);
  let fontSize;

  if (unit === undefined) {
    fontSize = $fontSize;
  } else {
    fontSize = `${value}${unit === '' ? 'px' : unit}`;
  }

  return css`
    width: ${$containerWidth};
    height: ${$containerHeight};
    font-size: ${fontSize};
  `;
};

export const StyledSVG = styled.svg.attrs<IStyledSVGProps>(props => ({
  'data-garden-version': PACKAGE_VERSION,
  xmlns: 'http://www.w3.org/2000/svg',
  focusable: 'false',
  viewBox: `0 0 ${props.$width} ${props.$height}`,
  role: 'img'
}))<IStyledSVGProps>`
  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
