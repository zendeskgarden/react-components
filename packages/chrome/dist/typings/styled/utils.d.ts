/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { DefaultTheme } from 'styled-components';
import { Product } from '../types';
export declare const getFooterHeight: (theme: DefaultTheme) => string;
export declare const getHeaderHeight: (theme: DefaultTheme) => string;
export declare const getHeaderItemSize: (theme: DefaultTheme) => string;
export declare const getNavItemHeight: (theme: DefaultTheme) => string;
export declare const getNavWidth: (theme: DefaultTheme) => string;
export declare const getNavWidthExpanded: () => string;
export declare const getProductColor: (product?: Product, fallback?: string) => string;
