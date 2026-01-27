/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getColor } from '@zendeskgarden/react-theming';
import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';

import { Product } from '../../types';
import { getProductColor } from '../utils';
import { StyledBaseNavItem } from './StyledBaseNavItem';

const COMPONENT_ID = 'chrome.logo_nav_list_item';

export interface IStyledLogoNavItemProps {
  $hue: string;
  $product?: Product;
}

const colorStyles = ({
  theme,
  $hue,
  $product
}: IStyledLogoNavItemProps & ThemeProps<DefaultTheme>) => {
  const fillColor = getColor({ theme, variable: 'foreground.default' });
  const color = $hue === 'chromeHue' ? getProductColor($product) : fillColor;

  return css`
    color: ${color};
    fill: ${fillColor};
  `;
};

/*
 * 1. Overrides flex default `min-height: auto`
 */
export const StyledLogoNavItem = styled(StyledBaseNavItem as 'button').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledLogoNavItemProps>`
  order: -1;
  opacity: 1;
  cursor: default;
  min-height: 0; /* [1] */

  ${colorStyles};
`;
