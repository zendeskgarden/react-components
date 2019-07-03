/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { base } from './space';

export const borderRadii = {
  sm: `${base / 2}px`,
  md: `${base}px`
};

export const borderStyles = {
  solid: 'solid'
};

export const borderWidths = {
  sm: '1px',
  md: '3px'
};

export const borders = {
  sm: `${borderWidths.sm} ${borderStyles.solid}`,
  md: `${borderWidths.md} ${borderStyles.solid}`
};
