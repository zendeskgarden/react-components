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
  PALETTE,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';
import stripUnit from 'polished/lib/helpers/stripUnit';
import { PRODUCT } from '../../utils/types';
import { HeaderItemIcon } from '../../elements/header/HeaderItemIcon';
import { StyledHeaderItemText } from './StyledHeaderItemText';

const COMPONENT_ID = 'chrome.header_item';

export interface IStyledHeaderItemProps {
  /**
   * Horizontally maximize a flex item in the header to take as much space as possible (i.e. breadcrumb container)
   **/
  maxX?: boolean;
  /**
   * Vertically maximize the height for a header item (i.e. contains a search input)
   **/
  maxY?: boolean;
  /**
   * Style the product logo shown as the first item in the header
   **/
  hasLogo?: boolean;
  /**
   * Round the border radius for a header item (i.e. user icon)
   **/
  isRound?: boolean;
  /**
   * Applies product-specific color palette
   **/
  product?: PRODUCT;
}

const retrieveProductColor = (props: IStyledHeaderItemProps) => {
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
 * 1. Reset the stacking context for embedded menus.
 * 2. Button element reset.
 * 3. Anchor reset.
 */
export const StyledHeaderItem = styled.button.attrs<IStyledHeaderItemProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-garden-logo': !!props.hasLogo
}))<IStyledHeaderItemProps>`
  display: ${props => {
    if (props.hasLogo) {
      if (props.theme.rtl) {
        return 'inline-flex';
      }

      return 'none';
    }

    return 'inline-flex';
  }};
  position: relative;
  flex: ${props => props.maxX && '1'};
  align-items: center;
  justify-content: ${props => (props.maxX ? 'start' : 'center')};
  order: ${props => (props.hasLogo ? '0' : '1')};
  transition: box-shadow 0.1s ease-in-out, color 0.1s ease-in-out;
  z-index: 0; /* [1] */
  margin: ${props => `0 ${props.theme.space.base * 3}px`};
  margin-right: ${props => props.hasLogo && 'auto'};
  margin-left: ${props => props.hasLogo && `-${props.theme.space.base}px`};
  border: none; /* [2] */
  border-right: ${props =>
    props.hasLogo && `${props.theme.borders.sm} ${getColor('neutralHue', 300, props.theme)}`};
  border-radius: ${props => {
    if (props.isRound) {
      return '100%';
    }

    if (props.hasLogo && (props.maxY || props.hasLogo)) {
      return '0';
    }

    return props.theme.borderRadii.md;
  }};
  background: transparent; /* [2] */
  padding: ${props => (props.hasLogo ? '0' : '0 3px')};
  width: ${props => props.hasLogo && `${props.theme.space.base * 15}px`};
  min-width: 30px;
  height: ${props => {
    if (props.hasLogo && (props.maxY || props.hasLogo)) {
      return '100%';
    }

    return '30px';
  }};
  overflow: ${props => props.hasLogo && 'hidden'};
  line-height: ${props => 30 / stripUnit(props.theme.fontSizes.md)};
  white-space: nowrap;
  font-size: inherit; /* [2] */
  fill: ${props => props.hasLogo && getColor('chromeHue', 700, props.theme)};

  ${props =>
    props.hasLogo &&
    `
    ${StyledHeaderItemText} {
      position: absolute;
      margin: 0;
      clip: rect(1px, 1px, 1px, 1px);
      width: 1px;
      height: 1px;
      overflow: hidden;
      white-space: nowrap;
    }
  `}

  &,
  &:hover,
  &:focus {
    text-decoration: none; /* [3] */
    color: ${props => (props.hasLogo ? retrieveProductColor(props) : 'inherit')}; /* [3] */
  }

  &:focus {
    outline: none; /* [3] */
  }

  ${props =>
    props.hasLogo &&
    `
      ${HeaderItemIcon} {
        margin: 0;
        width: ${props.theme.iconSizes.lg};
        height: ${props.theme.iconSizes.lg};
      }
  `}

  ${props =>
    !props.hasLogo &&
    `
    &[data-garden-focus-visible] {
      box-shadow: ${props.theme.shadows.md(getColor('chromeHue', 400, props.theme, 0.35)!)};
    }

    &[data-garden-focus-visible]:active {
      box-shadow: none;
    }

    &:hover ${HeaderItemIcon},
    &:hover ${StyledHeaderItemText},
    &:active ${HeaderItemIcon},
    &:active ${StyledHeaderItemText} {
      color: ${getColor('chromeHue', 700, props.theme)};
    }
  `}

  ${props =>
    props.maxY &&
    `
      &[data-garden-focus-visible] {
        box-shadow: inset ${props.theme.shadows.lg(
          '3px',
          '0',
          getColor('chromeHue', 400, props.theme, 0.35)!
        )},
        3px 0 0 0 ${getColor('chromeHue', 400, props.theme, 0.35)},
        inset ${props.theme.shadows.lg(
          '-3px',
          '0',
          getColor('chromeHue', 400, props.theme, 0.35)!
        )},
        -3px 0 0 0 ${getColor('chromeHue', 400, props.theme, 0.35)};
      }
  `}

  img {
    margin: 0;
    border-radius: 3px;
    width: ${props => props.theme.fontSizes.xl};
    height: ${props => props.theme.fontSizes.xl};
  }

  ${props =>
    props.isRound &&
    `
    ${HeaderItemIcon} {
      border-radius: 100px;
    }
  `}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeaderItem.defaultProps = {
  theme: DEFAULT_THEME
};
