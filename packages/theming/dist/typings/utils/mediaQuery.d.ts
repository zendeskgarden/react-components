/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { DefaultTheme } from 'styled-components';
type QUERY = 'up' | 'down' | 'only' | 'between';
type BREAKPOINT = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
/**
 * Get a media query string for the given query specifier, breakpoint name, and theme.
 *
 * @param {string} query A query specifier, one of:
 * - `'up'` = match screen widths including the given breakpoint and up.
 * - `'down'` = match screen widths included within the given breakpoint and down.
 * - `'only'` = match screen widths included within the given breakpoint.
 * - `'between'` = match screen widths including the first breakpoint up through
 *   screen widths included within the second breakpoint.
 * @param {string|Array} breakpoint A `theme.breakpoints` key, one of: `'xs'`, `'sm'`,
 *   `'md'`, `'lg'`, `'xl'`; or an array of two keys when 'between' is the specified query.
 * @param {Object} theme Context `theme` object.
 */
export default function mediaQuery(query: QUERY, breakpoint: BREAKPOINT | [BREAKPOINT, BREAKPOINT], theme?: DefaultTheme): string;
export {};
