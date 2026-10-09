/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import { getHueColor } from '../../theming/utils/getHueColor';
import { LoaderSize } from '../../types/elements';
import type { IStyledBaseProps } from '../../types/views';

const sizeToHeight = ($size: LoaderSize, theme: DefaultTheme) => {
  switch ($size) {
    case 'small':
      return theme.space.base / 2;
    case 'medium':
      return theme.space.base * 1.5;
    default:
      return theme.space.base * 3;
  }
};

const sizeToBorderRadius = ($size: LoaderSize, theme: DefaultTheme) =>
  sizeToHeight($size, theme) / 2;

interface IStyledProgressBackgroundProps {
  $size: LoaderSize;
  $color?: string;
}

const colorStyles = ({
  theme,
  $color = 'border.successEmphasis'
}: IStyledProgressBackgroundProps & IStyledBaseProps) => {
  const backgroundColor = getColor({
    theme,
    transparency: theme.opacity[200],
    light: { hue: 'neutralHue', shade: 700 },
    dark: { hue: 'white' }
  });
  const foregroundColor = getHueColor({ theme, value: $color });

  return css`
    background-color: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

export const StyledProgressBackground = styled.div<IStyledProgressBackgroundProps>`
  margin: ${props => props.theme.space.base * 2}px 0;
  border-radius: ${props => sizeToBorderRadius(props.$size, props.theme)}px;

  ${colorStyles};

  ${componentStyles}
`;

interface IStyledProgressIndicatorProps {
  $size: LoaderSize;
  $value: number;
}

export const StyledProgressIndicator = styled.div<IStyledProgressIndicatorProps>`
  transition: width 0.1s ease-in-out;
  border-radius: ${props => sizeToBorderRadius(props.$size, props.theme)}px;
  background: currentcolor;
  width: ${props => props.$value}%;
  height: ${props => sizeToHeight(props.$size, props.theme)}px;

  ${componentStyles}
`;
