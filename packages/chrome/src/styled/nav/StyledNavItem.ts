/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledBaseNavItem } from '..';

const COMPONENT_ID = 'chrome.nav_item';

export interface IStyledNavItemProps {
  /**
   * Indicate which item is current in the nav
   **/
  isCurrent?: boolean;
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
  order: 1;
  opacity: ${props => (props.isCurrent ? 1 : 0.6)};
  background-color: ${props => props.isCurrent && getColor('chromeHue', 400, props.theme)};
  cursor: ${props => (props.isCurrent ? 'default' : 'pointer')};

  &:focus {
    outline: none; /* [2] */
  }

  &:hover {
    background-color: ${props =>
      !props.isCurrent && rgba(props.theme.palette.black as string, 0.1)};
  }

  &:active {
    background-color: ${props => rgba(props.theme.palette.white as string, 0.1)};
  }

  &[data-garden-focus-visible] {
    box-shadow: ${props => `inset 0 0 0 3px ${rgba(props.theme.palette.white as string, 0.2)}`};
  }

  &:focus,
  &:hover {
    text-decoration: none; /* [2] */
    color: inherit; /* [2] */
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledNavItem.defaultProps = {
  theme: DEFAULT_THEME
};
