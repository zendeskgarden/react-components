/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.nav';

const colorStyles = (props: IStyledNavProps) => {
  const shade = props.isDark || props.isLight ? 600 : 700;
  const isDarkMode = props.theme.colors.base === 'dark';
  const backgroundColor = getColor(props.hue, isDarkMode ? 950 : shade, props.theme);
  const foregroundColor = props.isLight ? props.theme.palette.black : props.theme.palette.white;

  return css`
    background-color: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

interface IStyledNavProps extends ThemeProps<DefaultTheme> {
  hue: string;
  isDark?: boolean;
  isLight?: boolean;
  isExpanded?: boolean;
}

export const getNavWidth = (props: ThemeProps<DefaultTheme>) => {
  return `${props.theme.space.base * 15}px`;
};

export const getExpandedNavWidth = () => {
  return `200px`;
};

export const StyledNav = styled.nav.attrs<IStyledNavProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledNavProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-shrink: 0;
  order: -1;
  width: ${props => (props.isExpanded ? getExpandedNavWidth : getNavWidth)};
  font-size: ${props => props.theme.fontSizes.md};

  ${props => colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledNav.defaultProps = {
  theme: DEFAULT_THEME
};
