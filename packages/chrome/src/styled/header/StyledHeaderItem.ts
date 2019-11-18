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
  isHovered?: boolean;
  isFocused?: boolean;
  isActive?: boolean;
}

export const StyledHeaderItem = styled.button.attrs<IStyledHeaderItemProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ChromeStyles['c-chrome__body__header__item'], {
    // Styling
    [ChromeStyles['c-chrome__body__header__item--max-x']]: props.maxX,
    [ChromeStyles['c-chrome__body__header__item--max-y']]: props.maxY,
    [ChromeStyles['c-chrome__body__header__item--logo']]: props.hasLogo,
    [ChromeStyles['c-chrome__body__header__item--round']]: props.isRound,

    // Products
    [ChromeStyles['c-chrome__body__header__item--logo--chat']]: props.product === 'chat',
    [ChromeStyles['c-chrome__body__header__item--logo--connect']]: props.product === 'connect',
    [ChromeStyles['c-chrome__body__header__item--logo--explore']]: props.product === 'explore',
    [ChromeStyles['c-chrome__body__header__item--logo--guide']]: props.product === 'guide',
    [ChromeStyles['c-chrome__body__header__item--logo--message']]: props.product === 'message',
    [ChromeStyles['c-chrome__body__header__item--logo--support']]: props.product === 'support',
    [ChromeStyles['c-chrome__body__header__item--logo--talk']]: props.product === 'talk',

    // State
    [ChromeStyles['is-hovered']]: props.isHovered,
    [ChromeStyles['is-focused']]: props.isFocused,
    [ChromeStyles['is-active']]: props.isActive
  })
}))<IStyledHeaderItemProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
