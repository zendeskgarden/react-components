/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Placement } from '@floating-ui/react-dom';
import { ArrowPosition, IGardenTheme } from '../types';

/* Map Floating-UI placement to Garden arrow position */
export const POSITION_MAP: Record<Placement, ArrowPosition> = {
  top: 'bottom',
  'top-start': 'bottom-left',
  'top-end': 'bottom-right',
  right: 'left',
  'right-start': 'left-top',
  'right-end': 'left-bottom',
  bottom: 'top',
  'bottom-start': 'top-left',
  'bottom-end': 'top-right',
  left: 'right',
  'left-start': 'right-top',
  'left-end': 'right-bottom'
};

/* Map Garden arrow position to RTL position */
export const RTL_POSITION_MAP: Record<string, ArrowPosition> = {
  'bottom-left': 'bottom-right',
  'bottom-right': 'bottom-left',
  'top-left': 'top-right',
  'top-right': 'top-left'
};

/**
 * Convert Floating-UI placement to a valid `arrowStyles` position.
 *
 * @param {Object} theme Context `theme` object used to determine if layout is right-to-left.
 * @param {string} placement A Floating-UI placement.
 *
 * @returns An `arrowStyles` position.
 */
export const getArrowPosition = (theme: IGardenTheme, placement: Placement): ArrowPosition => {
  let retVal = POSITION_MAP[placement];

  if (theme.rtl) {
    retVal = RTL_POSITION_MAP[retVal] || retVal;
  }

  return retVal;
};
