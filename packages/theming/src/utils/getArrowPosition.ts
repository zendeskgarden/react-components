/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Placement } from '@floating-ui/react-dom';
import { ArrowPosition } from '../types';

const POSITION_MAP: Record<Placement, ArrowPosition> = {
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

/**
 * Convert Floating-UI placement to a valid `arrowStyles` position.
 *
 * @param {string} placement A Floating-UI placement.
 *
 * @returns An `arrowStyles` position.
 */
export const getArrowPosition = (placement: Placement): ArrowPosition => {
  return POSITION_MAP[placement];
};
