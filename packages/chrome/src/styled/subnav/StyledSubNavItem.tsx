/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.subnav_item';

export interface IStyledSubNavItemProps {
  /**
   * Indicate which item is current in the nav
   **/
  isCurrent?: boolean;
}

/**
 * 1. Anchor reset
 * 2. Button reset
 */
export const StyledSubNavItem = styled.button.attrs<IStyledSubNavItemProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-garden-current': !!props.isCurrent
}))<IStyledSubNavItemProps>`
  display: flex;
  align-items: center;
  /* prettier-ignore */
  transition: box-shadow 0.1s ease-in-out,
    background-color 0.1s ease-in-out,
    opacity 0.1s ease-in-out;
  opacity: 0.6;
  margin-top: ${props => props.theme.space.base * 2}px;
  border: none; /* [2] */
  border-radius: ${props => props.theme.borderRadii.md};
  box-sizing: border-box;
  background: transparent; /* [2] */
  background-color: ${props => props.isCurrent && rgba(props.theme.palette.white as string, 0.1)};
  cursor: ${props => (props.isCurrent ? 'default' : 'pointer')}; /* [2] */
  padding: ${props => `0 ${props.theme.space.base * 2}px`};
  width: 100%; /* [2] */
  min-height: 30px;
  text-align: inherit; /* [2] */
  font-size: inherit; /* [2] */

  &,
  &:hover,
  &:focus {
    text-decoration: none; /* [1] */
    color: inherit; /* [1] */
  }

  &:focus {
    outline: none; /* [1] */
  }

  &:hover,
  &[data-garden-focus-visible],
  &[data-garden-current='true'] {
    opacity: 1;
  }

  &[data-garden-focus-visible] {
    box-shadow: ${props => props.theme.shadows.md(rgba(props.theme.palette.white as string, 0.2))};
  }

  &:not([data-garden-current='true']):hover {
    background-color: ${props => rgba(props.theme.palette.black as string, 0.1)};
  }

  &:not([data-garden-header='true']):active {
    background-color: ${props => rgba(props.theme.palette.white as string, 0.03)};
  }

  &:active:focus {
    box-shadow: none;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSubNavItem.defaultProps = {
  theme: DEFAULT_THEME
};
