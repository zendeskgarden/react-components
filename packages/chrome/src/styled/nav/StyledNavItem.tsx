/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import ChromeStyles from '@zendeskgarden/css-chrome';
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
  isHovered?: boolean;
  isActive?: boolean;
  isFocused?: boolean;
}

export const StyledNavItem = styled.button.attrs<IStyledNavItemProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ChromeStyles['c-chrome__nav__item'], {
    // Styling
    [ChromeStyles['c-chrome__nav__item--logo']]: props.hasLogo,
    [ChromeStyles['c-chrome__nav__item--brandmark']]: props.hasBrandmark,

    // Products
    [ChromeStyles['c-chrome__nav__item--logo--chat']]: props.product === 'chat',
    [ChromeStyles['c-chrome__nav__item--logo--connect']]: props.product === 'connect',
    [ChromeStyles['c-chrome__nav__item--logo--explore']]: props.product === 'explore',
    [ChromeStyles['c-chrome__nav__item--logo--guide']]: props.product === 'guide',
    [ChromeStyles['c-chrome__nav__item--logo--message']]: props.product === 'message',
    [ChromeStyles['c-chrome__nav__item--logo--support']]: props.product === 'support',
    [ChromeStyles['c-chrome__nav__item--logo--talk']]: props.product === 'talk',

    // State
    [ChromeStyles['is-current']]: props.isCurrent,
    [ChromeStyles['is-hovered']]: props.isHovered,
    [ChromeStyles['is-focused']]: props.isFocused,
    [ChromeStyles['is-active']]: props.isActive
  })
}))<IStyledNavItemProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
