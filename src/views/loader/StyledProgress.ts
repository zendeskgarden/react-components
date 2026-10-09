/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getColor, getHueColor } from '@zendeskgarden/react-theming';
import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';

import { Size } from '../types';

const sizeToHeight = ($size: Size, theme: DefaultTheme) => {
  switch ($size) {
    case 'small':
      return theme.space.base / 2;
    case 'medium':
      return theme.space.base * 1.5;
    default:
      return theme.space.base * 3;
  }
};

const sizeToBorderRadius = ($size: Size, theme: DefaultTheme) => sizeToHeight($size, theme) / 2;

interface IStyledProgressBackgroundProps {
  $size: Size;
  $color?: string;
}

const PROGRESS_BACKGROUND_COMPONENT_ID = 'loaders.progress_background';

const colorStyles = ({
  theme,
  $color = 'border.successEmphasis'
}: IStyledProgressBackgroundProps & ThemeProps<DefaultTheme>) => {
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

export const StyledProgressBackground = styled.div.attrs<IStyledProgressBackgroundProps>({
  'data-garden-id': PROGRESS_BACKGROUND_COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledProgressBackgroundProps>`
  margin: ${props => props.theme.space.base * 2}px 0;
  border-radius: ${props => sizeToBorderRadius(props.$size, props.theme)}px;

  ${colorStyles};

  ${componentStyles}
`;

interface IStyledProgressIndicatorProps {
  $size: Size;
  $value: number;
}

const PROGESS_INDICATOR_COMPONENT_ID = 'loaders.progress_indicator';

export const StyledProgressIndicator = styled.div.attrs<IStyledProgressIndicatorProps>({
  'data-garden-id': PROGESS_INDICATOR_COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledProgressIndicatorProps>`
  transition: width 0.1s ease-in-out;
  border-radius: ${props => sizeToBorderRadius(props.$size, props.theme)}px;
  background: currentcolor;
  width: ${props => props.$value}%;
  height: ${props => sizeToHeight(props.$size, props.theme)}px;

  ${componentStyles}
`;
