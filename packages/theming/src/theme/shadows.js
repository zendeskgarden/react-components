/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { math, rgba } from 'polished';
import { default as palette } from '../palette';

export const shadowWidths = {
  sm: '2px',
  md: '3px'
};

export const shadows = {
  sm: color => `0 0 0 ${shadowWidths.sm} ${color}`,
  md: color => `0 0 0 ${shadowWidths.md} ${color}`,
  lg: (offsetY, blurRadius) => `0 ${offsetY} ${blurRadius} 0 ${rgba(palette.kale[600], 0.15)}`
};
