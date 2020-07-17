/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import DEFAULT_THEME from '../elements/theme';
import { DefaultTheme } from 'styled-components';
import { getValueAndUnit } from 'polished';

type QUERY = 'up' | 'down' | 'only' | 'between';
type BREAKPOINT = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const maxWidth = (breakpoints: DefaultTheme['breakpoints'], breakpoint: BREAKPOINT) => {
  const keys = Object.keys(breakpoints);
  const index = keys.indexOf(breakpoint) + 1;

  if (keys[index]) {
    const dimension = getValueAndUnit(breakpoints[keys[index] as BREAKPOINT]);
    const value = dimension[0] - 0.02;
    const unit = dimension[1];

    return `${value}${unit}`;
  }

  // When the index advances past the end of the available breakpoints.
  return undefined;
};

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
export default function mediaQuery(
  query: QUERY,
  breakpoint: BREAKPOINT | [BREAKPOINT, BREAKPOINT],
  theme?: DefaultTheme
) {
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
        min = DEFAULT_THEME.breakpoints.xs;
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
  } else {
    throw new Error(`Unexpected query and breakpoint combination: '${query}', '${breakpoint}'.`);
  }

  return retVal;
}
