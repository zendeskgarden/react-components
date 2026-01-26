/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import {
  componentStyles,
  StyledBaseIcon,
  getColor,
  getHueColor
} from '@zendeskgarden/react-theming';
import { math } from 'polished';
import styled, { DataAttributes, DefaultTheme, ThemeProps, css } from 'styled-components';

const COMPONENT_ID = 'timeline.icon';

interface IStyledItemIcon {
  $surfaceColor?: string;
}

const colorStyles = ({
  $surfaceColor = 'background.default',
  theme
}: IStyledItemIcon & ThemeProps<DefaultTheme>) => {
  const foregroundColor = getColor({ theme, variable: 'border.emphasis' });
  const backgroundColor = getHueColor({ theme, value: $surfaceColor });

  return css`
    background-color: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

/**
 * 1. Odd sizing allows the timeline line to center respective of the circle icon.
 */
export const StyledItemIcon = styled(StyledBaseIcon).attrs<DataAttributes>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledItemIcon>`
  z-index: 1;
  box-sizing: content-box;

  padding: ${props => props.theme.space.base}px 0;
  width: ${props => math(`${props.theme.iconSizes.sm} + 1`)}; /* [1] */
  height: ${props => math(`${props.theme.iconSizes.sm} + 1`)}; /* [1] */

  ${colorStyles}

  ${componentStyles};
`;
