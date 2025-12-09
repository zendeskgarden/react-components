/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import DEFAULT_THEME from '../elements/theme/index.js';
import { getValueAndUnit } from 'polished';

const maxWidth = (breakpoints, breakpoint) => {
  const keys = Object.keys(breakpoints);
  const index = keys.indexOf(breakpoint) + 1;
  if (keys[index]) {
    const dimension = getValueAndUnit(breakpoints[keys[index]]);
    const value = dimension[0] - 0.02;
    const unit = dimension[1];
    return `${value}${unit}`;
  }
  return undefined;
};
function mediaQuery(query, breakpoint, theme) {
  let retVal;
  let min;
  let max;
  const breakpoints = theme && theme.breakpoints ? theme.breakpoints : DEFAULT_THEME.breakpoints;
  if (typeof breakpoint === 'string') {
    if (query === 'up') {
      min = breakpoints[breakpoint];
    } else if (query === 'down') {
      if (breakpoint === 'xl') {
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

export { mediaQuery as default };
