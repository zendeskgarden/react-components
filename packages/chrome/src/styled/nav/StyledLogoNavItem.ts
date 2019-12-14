/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { PRODUCT } from '../../utils/types';
import { StyledBaseNavItem } from '../';
import { PALETTE, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.logo_nav_item';

export interface IStyledLogoNavItemProps {
  /**
   * Applies product-specific color palette
   **/
  product?: PRODUCT;
  isDark?: boolean;
  isLight?: boolean;
}

const retrieveProductColor = (props: IStyledLogoNavItemProps & ThemeProps<DefaultTheme>) => {
  if (props.isDark) {
    return props.theme.colors.background;
  }

  if (props.isLight) {
    return getColor('neutralHue', 800, props.theme);
  }

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

export const StyledLogoNavItem = styled(StyledBaseNavItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledLogoNavItemProps>`
  order: 0;
  opacity: 1;
  cursor: default;
  color: ${retrieveProductColor};
  fill: ${props =>
    props.isLight ? getColor('neutralHue', 800, props.theme) : props.theme.colors.background};
`;

StyledLogoNavItem.defaultProps = {
  theme: DEFAULT_THEME
};
