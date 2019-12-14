/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.nav';

export interface IStyledNavProps {
  /**
   * Expand navigation area to include item text
   **/
  isExpanded?: boolean;
  /**
   * Apply dark styling
   **/
  isDark?: boolean;
  /**
   * Apply light styling
   **/
  isLight?: boolean;
}

export const getNavWidth = (props: ThemeProps<DefaultTheme>) => {
  return `${props.theme.space.base * 15}px`;
};

export const getExpandedNavWidth = (props: ThemeProps<DefaultTheme>) => {
  return `${props.theme.space.base * 50}px`;
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
  background-color: ${props => {
    if (props.isDark) {
      return props.theme.palette.black;
    }

    if (props.isLight) {
      return props.theme.colors.background;
    }

    return getColor('chromeHue', 700, props.theme);
  }};
  width: ${props => (props.isExpanded ? getExpandedNavWidth : getNavWidth)};
  color: ${props =>
    props.isLight ? getColor('neutralHue', 800, props.theme) : props.theme.colors.background};
  font-size: ${props => props.theme.fontSizes.md};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledNav.defaultProps = {
  theme: DEFAULT_THEME
};
