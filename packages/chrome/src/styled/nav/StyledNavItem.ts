/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import math from 'polished/lib/math/math';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledBaseNavItem } from './StyledBaseNavItem';
import { StyledNavItemIcon } from './StyledNavItemIcon';
import { getNavWidth } from './StyledNav';

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
 * 1. Anchor reset
 */
export const StyledNavItem = styled(StyledBaseNavItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'button'
})<IStyledNavItemProps>`
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
    outline: none; /* [1] */
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
    text-decoration: none; /* [1] */
    color: inherit; /* [1] */
  }

  ${props =>
    props.isExpanded &&
    `
    ${StyledNavItemIcon} {
      margin: 0 ${math(`(${getNavWidth(props)} - ${props.theme.iconSizes.lg}) / 4`)};
    }
  `}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledNavItem.defaultProps = {
  theme: DEFAULT_THEME
};
