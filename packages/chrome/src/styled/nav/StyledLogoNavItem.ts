/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { PALETTE, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { PRODUCT } from '../../utils/types';
import { StyledBaseNavItem } from './StyledBaseNavItem';

const COMPONENT_ID = 'chrome.logo_nav_item';

const retrieveProductColor = (product: string | undefined) => {
  switch (product) {
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

const colorStyles = (props: IStyledLogoNavItemProps) => {
  const fillColor = props.isLight ? props.theme.palette.grey[800] : props.theme.palette.white;
  const color = props.isLight || props.isDark ? fillColor : retrieveProductColor(props.product);

  return css`
    color: ${color};
    fill: ${fillColor};
  `;
};

export interface IStyledLogoNavItemProps extends ThemeProps<DefaultTheme> {
  product?: PRODUCT;
  isDark?: boolean;
  isLight?: boolean;
}

export const StyledLogoNavItem = styled(StyledBaseNavItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'div'
})<IStyledLogoNavItemProps>`
  order: 0;
  opacity: 1;
  cursor: default;

  ${props => colorStyles(props)};
`;

StyledLogoNavItem.defaultProps = {
  theme: DEFAULT_THEME
};
