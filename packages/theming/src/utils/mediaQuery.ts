/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import DEFAULT_THEME from '../elements/theme';
import { DefaultTheme } from 'styled-components';
import { math } from 'polished';

type QUERY = 'up' | 'down' | 'only' | 'between';
type KEY = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type BREAKPOINT = KEY | [KEY, KEY];

const maxWidth = (breakpoints: DefaultTheme['breakpoints'], key: KEY) => {
  const keys = Object.keys(breakpoints);
  const index = keys.indexOf(key) + 1;
  const value = keys[index];

  return value && math(`${value} - .02`);
};

/**
 * Get a media query string for the given function specifier, breakpoint name, and theme.
 *
 * @param {string} query A query specifier, one of:
 * - `'up'` = match screen widths greater than and including the given breakpoint.
 * - `'down'` = match screen widths less than and included within the given breakpoint.
 * - `'only'` = match screen widths included within the given breakpoint.
 * - `'between'` = match screen widths greater than and including the first breakpoint,
 *   and less than and included within the second breakpoint.
 * @param {string} breakpoint A `theme.breakpoints` key, one of: `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'`.
 * @param {Object} theme Context `theme` object.
 */
export default function mediaQuery(query: QUERY, breakpoint: BREAKPOINT, theme?: DefaultTheme) {
  let retVal;
  let min;
  let max;
  const breakpoints = theme && theme.breakpoints ? theme.breakpoints : DEFAULT_THEME.breakpoints;

  if (typeof breakpoint === 'string') {
    if (query === 'up') {
      min = breakpoints[breakpoint];
    } else if (query === 'down') {
      if (breakpoint === 'xl') {
        // Down from the XL breakpoint is the same as up from zero.
        min = 0;
      } else {
        max = maxWidth(breakpoints, breakpoint);
      }
    } else if (query === 'only') {
      min = breakpoints[breakpoint];
      max = maxWidth(breakpoints, breakpoint);
    }
  } else if (query === 'between') {
    min = breakpoints[breakpoint[0]];
    max = maxWidth(breakpoints, breakpoint[1]);
  }

  if (min) {
    retVal = `@media (min-width: ${min})`;

    if (max) {
      retVal = `${retVal} and (max-width: ${max})`;
    }
  } else if (max) {
    retVal = `@media (max-width: ${max})`;
  }

  return retVal;
}
