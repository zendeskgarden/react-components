/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, css, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import rgba from 'polished/lib/color/rgba';
import { StyledNavItem, StyledLogoNavItem } from '..';

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

const darkStyles = (props: ThemeProps<DefaultTheme>) => css`
  /* stylelint-disable */
  ${StyledNavItem}:active {
    background-color: ${rgba(props.theme.palette.black as string, 0.1)};
  }

  ${StyledNavItem}[data-garden-current='true'] {
    background-color: ${rgba(props.theme.palette.white as string, 0.3)};
  }

  /* prettier-ignore */
  ${StyledLogoNavItem} {
    color: ${props.theme.colors.background};
  }
  /* stylelint-enable */
`;

const lightStyles = (props: ThemeProps<DefaultTheme>) => css`
  /* stylelint-disable */
  ${StyledNavItem}[data-garden-focus-visible] {
    box-shadow: inset ${props.theme.shadows.md(rgba(props.theme.palette.black as string, 0.2))};
  }

  ${StyledNavItem}:active {
    background-color: ${rgba(props.theme.palette.black as string, 0.1)};
  }

  ${StyledNavItem}[data-garden-current='true'] {
    background-color: ${rgba(props.theme.palette.black as string, 0.3)};
  }

  /* prettier-ignore */
  ${StyledLogoNavItem} {
    color: ${getColor('neutralHue', 800, props.theme)};
    fill: ${getColor('neutralHue', 800, props.theme)};
  }
  /* stylelint-enable */
`;

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
  width: ${props =>
    props.isExpanded ? props.theme.space.base * 50 : props.theme.space.base * 15}px;
  color: ${props =>
    props.isLight ? getColor('neutralHue', 800, props.theme) : props.theme.colors.background};
  font-size: ${props => props.theme.fontSizes.md};

  ${props => props.isDark && darkStyles}
  ${props => props.isLight && lightStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledNav.defaultProps = {
  theme: DEFAULT_THEME
};
