/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import {
  retrieveComponentStyles,
  getColor,
  DEFAULT_THEME,
  PALETTE
} from '@zendeskgarden/react-theming';
import { PRODUCT } from '../../utils/types';

const COMPONENT_ID = 'chrome.nav_item';

export interface IStyledNavItemProps {
  /**
   * Style the product logo shown as the top item in the nav
   **/
  hasLogo?: boolean;
  /**
   * Style a brandmark shown as a bottom item in the nav
   **/
  hasBrandmark?: boolean;
  /**
   * Applies product-specific color palette
   **/
  product?: PRODUCT;
  /**
   * Indicate which item is current in the nav
   **/
  isCurrent?: boolean;
}

const retrieveProductColor = (props: IStyledNavItemProps) => {
  switch (props.product) {
    case 'chat':
      return PALETTE.product.chat;
    case 'connect':
      return PALETTE.product.connect;
    case 'explore':
      return PALETTE.product.explore;
    case 'guide':
      return PALETTE.product.guide;
    case 'message':
      return PALETTE.product.message;
    case 'support':
      return PALETTE.product.support;
    case 'talk':
      return PALETTE.product.talk;
    default:
      return 'inherit';
  }
};

/**
 * 1. Button reset.
 * 2. Anchor reset.
 */
export const StyledNavItem = styled.button.attrs<IStyledNavItemProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-garden-logo': !!props.hasLogo || !!props.hasBrandmark,
  'data-garden-current': !!props.isCurrent
}))<IStyledNavItemProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  order: ${props => {
    if (props.hasBrandmark) {
      return 1;
    }

    if (props.hasLogo) {
      return 0;
    }

    return 1;
  }};
  /* prettier-ignore */
  transition: box-shadow 0.1s ease-in-out,
    background-color 0.1s ease-in-out,
    opacity 0.1s ease-in-out;
  opacity: ${props => {
    if (props.hasBrandmark) {
      return 0.3;
    }

    if (props.hasLogo || props.isCurrent) {
      return 1;
    }

    return 0.6;
  }};
  margin-top: ${props => props.hasBrandmark && 'auto'};
  border: none; /* [1] */
  box-sizing: border-box;
  background: transparent; /* [1] */
  background-color: ${props =>
    !props.hasLogo && props.isCurrent && getColor('chromeHue', 400, props.theme)};
  cursor: ${props => (props.hasLogo || props.isCurrent ? 'default' : 'pointer')};
  padding: 13px 8.5px;
  min-height: ${props => props.theme.space.base * 13}px;
  text-decoration: none; /* [2] */
  color: ${props => (props.hasLogo ? retrieveProductColor(props) : 'inherit')}; /* [2] */
  font-size: inherit; /* [1] */
  fill: ${props => props.hasLogo && props.theme.colors.background};

  &:focus {
    outline: none; /* [2] */
  }

  &:hover {
    background-color: ${props =>
      !props.hasLogo && !props.isCurrent && getColor('black', 600, props.theme, 0.1)};
  }

  &:active {
    background-color: ${props => !props.hasLogo && getColor('white', 600, props.theme, 0.1)};
  }

  &[data-garden-focus-visible] {
    box-shadow: ${props =>
      !props.hasLogo && `inset 0 0 0 3px ${getColor('white', 600, props.theme, 0.2)}`};
  }

  &:focus,
  &:hover {
    opacity: ${props => !props.hasBrandmark && 1};
  }

  &:not([data-garden-logo='true']):hover,
  &:not([data-garden-logo='true']):focus {
    text-decoration: none; /* [2] */
    color: inherit; /* [2] */
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledNavItem.defaultProps = {
  theme: DEFAULT_THEME
};
