/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DefaultTheme } from 'styled-components';
import { PALETTE } from '@zendeskgarden/react-theming';
import { Product } from '../types';

export const getFooterHeight = (theme: DefaultTheme) => `${theme.space.base * 20}px`;

export const getHeaderHeight = (theme: DefaultTheme) => `${theme.space.base * 13}px`;

export const getHeaderItemSize = (theme: DefaultTheme) => `${theme.space.base * 7.5}px`;

export const getNavItemHeight = (theme: DefaultTheme) => getHeaderHeight(theme);

export const getNavWidth = (theme: DefaultTheme) => `${theme.space.base * 15}px`;

export const getNavWidthExpanded = () => `200px`;

export const getProductColor = (product?: Product, fallback = 'inherit') =>
  product ? PALETTE.product[product] || fallback : fallback;
