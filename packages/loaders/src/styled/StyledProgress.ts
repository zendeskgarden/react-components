/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { retrieveComponentStyles, getColor } from '@zendeskgarden/react-theming';
import { Size } from '../types';

const sizeToHeight = (size: Size, theme: DefaultTheme) => {
  switch (size) {
    case 'small':
      return theme.space.base / 2;
    case 'medium':
      return theme.space.base * 1.5;
    default:
      return theme.space.base * 3;
  }
};

const sizeToBorderRadius = (size: Size, theme: DefaultTheme) => sizeToHeight(size, theme) / 2;

interface IStyledProgressBackgroundProps {
  size: Size;
  borderRadius?: number;
  color?: string;
}

const PROGRESS_BACKGROUND_COMPONENT_ID = 'loaders.progress_background';

const colorStyles = ({
  theme,
  color
}: IStyledProgressBackgroundProps & ThemeProps<DefaultTheme>) => {
  const backgroundColor = getColor({
    theme,
    hue: 'neutralHue',
    transparency: theme.opacity[200],
    light: { shade: 700 },
    dark: { shade: 500 }
  });
  let options;

  if (color) {
    options = color.includes('.') ? { variable: color, theme } : { hue: color, theme };
  } else {
    options = { variable: 'border.successEmphasis', theme };
  }

  const foregroundColor = getColor(options);

  return css`
    background-color: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

export const StyledProgressBackground = styled.div.attrs<IStyledProgressBackgroundProps>(props => ({
  'data-garden-id': PROGRESS_BACKGROUND_COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  borderRadius: props.borderRadius || sizeToBorderRadius(props.size, props.theme)
}))<IStyledProgressBackgroundProps>`
  margin: ${props => props.theme.space.base * 2}px 0;
  border-radius: ${props => props.borderRadius}px;

  ${colorStyles};

  ${props => retrieveComponentStyles(PROGRESS_BACKGROUND_COMPONENT_ID, props)}
`;

interface IStyledProgressIndicatorProps {
  size: Size;
  borderRadius?: number;
  value: number;
  height?: number;
}

const PROGESS_INDICATOR_COMPONENT_ID = 'loaders.progress_indicator';

export const StyledProgressIndicator = styled.div.attrs<IStyledProgressIndicatorProps>(props => ({
  'data-garden-id': PROGESS_INDICATOR_COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  height: props.height || sizeToHeight(props.size, props.theme),
  borderRadius: props.borderRadius || sizeToBorderRadius(props.size, props.theme)
}))<IStyledProgressIndicatorProps>`
  transition: width 0.1s ease-in-out;
  border-radius: ${props => props.borderRadius}px;
  background: currentcolor;
  width: ${props => props.value}%;
  height: ${props => props.height}px;

  ${props => retrieveComponentStyles(PROGESS_INDICATOR_COMPONENT_ID, props)}
`;
