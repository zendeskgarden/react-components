/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledBaseNavItem } from './StyledBaseNavItem';
import { StyledNavItemText } from './StyledNavItemText';
import { NavItemIcon } from '../../elements/nav/NavItemIcon';

const COMPONENT_ID = 'chrome.nav_item';

export interface IStyledNavItemProps {
  /**
   * Indicate which item is current in the nav
   **/
  isCurrent?: boolean;
  isExpanded?: boolean;
  isDark?: boolean;
  isLight?: boolean;
}

/**
 * 1. Button reset.
 * 2. Anchor reset.
 */
export const StyledNavItem = styled(StyledBaseNavItem).attrs<IStyledNavItemProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-garden-current': !!props.isCurrent,
  as: 'button'
}))<IStyledNavItemProps>`
  justify-content: ${props => props.isExpanded && 'start'};
  order: 1;
  opacity: ${props => (props.isCurrent ? 1 : 0.6)};
  background-color: ${props => {
    if (props.isCurrent) {
      if (props.isDark) {
        return rgba(props.theme.palette.white as string, 0.3);
      }

      if (props.isLight) {
        return rgba(props.theme.palette.black as string, 0.3);
      }

      return getColor('chromeHue', 400, props.theme);
    }

    return undefined;
  }};
  cursor: ${props => (props.isCurrent ? 'default' : 'pointer')};
  text-align: ${props => props.isExpanded && 'inherit'};

  &:focus {
    outline: none; /* [2] */
  }

  &:hover {
    background-color: ${props =>
      !props.isCurrent && rgba(props.theme.palette.black as string, 0.1)};
  }

  &:active {
    background-color: ${props => {
      if (props.isDark) {
        return rgba(props.theme.palette.black as string, 0.1);
      }

      return rgba(props.theme.palette.white as string, 0.1);
    }};
  }

  &[data-garden-focus-visible] {
    box-shadow: ${props =>
      `inset ${props.theme.shadows.md(
        rgba((props.isLight ? props.theme.palette.black : props.theme.palette.white) as string, 0.2)
      )}`};
  }

  &:focus,
  &:hover {
    text-decoration: none; /* [2] */
    color: inherit; /* [2] */
  }

  ${props =>
    props.isExpanded &&
    `
    ${StyledNavItemText} {
      position: static;
      flex: 1;
      clip: auto;
      width: auto;
      height: auto;
      text-overflow: ellipsis;
    }

    ${NavItemIcon} {
      margin: 0 ${34 / props.theme.space.base}px;
    }
  `}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledNavItem.defaultProps = {
  theme: DEFAULT_THEME
};
