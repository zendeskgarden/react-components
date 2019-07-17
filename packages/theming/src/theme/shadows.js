/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { rgba } from 'polished';
import getColor from '../utils/getColor';

export const shadowWidths = {
  sm: '2px',
  md: '3px'
};

export const shadows = {
  sm: color => `0 0 0 ${shadowWidths.sm} ${color}`,
  md: color => `0 0 0 ${shadowWidths.md} ${color}`,
  lg: (offsetY, blurRadius, theme) =>
    `0 ${offsetY} ${blurRadius} 0 ${rgba(getColor('chromeHue', 600, theme), 0.15)}`
};
