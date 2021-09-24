/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { parseToRgb, readableColor } from 'polished';
import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import React, { Children } from 'react';
import { IRGBColor } from '../../utils/types';

const COMPONENT_ID = 'colorpickers.colorswatch_check';

interface IStyledCheckIcon {
  color: string;
}

const colorStyles = (props: IStyledCheckIcon & ThemeProps<DefaultTheme>) => {
  const { theme, color } = props;
  const { alpha } = parseToRgb(color) as IRGBColor;
  let checkColor = readableColor(color, theme.colors.foreground, theme.colors.background);

  if (alpha !== undefined && alpha < 0.4) {
    checkColor = theme.colors.foreground;
  }

  return `
    color: ${checkColor}
  `;
};

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export const StyledIcon = styled(({ children, color, theme, ...props }) =>
  React.cloneElement(Children.only(children), props)
).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  transition: opacity 0.2s ease-in-out;
  opacity: ${props => (props.selected ? 1 : 0)};
  width: ${props => props.theme.space.base * 5}px;
  height: ${props => props.theme.space.base * 5}px;

  ${colorStyles}
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledIcon.defaultProps = {
  theme: DEFAULT_THEME
};
