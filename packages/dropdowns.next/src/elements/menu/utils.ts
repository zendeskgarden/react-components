/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import {
  ARROW_POSITION as ArrowPosition,
  MENU_POSITION as MenuPosition
} from '@zendeskgarden/react-theming';
import { GardenPlacement, SHARED_PLACEMENT } from '../../types';

const FLOATING_PLACEMENT = [
  ...SHARED_PLACEMENT,
  'right',
  'right-start',
  'right-end',
  'left',
  'left-start',
  'left-end'
] as const;

type FloatingPlacement = (typeof FLOATING_PLACEMENT)[number];

/**
 * Convert Garden placement to a valid placement for Floating-UI.
 *
 * @param isRtl Determines if layout is right-to-left.
 * @param placement A Garden placement.
 *
 * @returns A Floating-UI placement.
 */
export const toFloatingPlacement = (
  isRtl: boolean,
  placement?: GardenPlacement
): FloatingPlacement | undefined => {
  let retVal;

  if (placement !== undefined) {
    /* Map Garden to Floating-UI placements */
    const placementMap: Record<string, FloatingPlacement> = {
      end: 'right',
      'end-top': 'right-start',
      'end-bottom': 'right-end',
      start: 'left',
      'start-top': 'left-start',
      'start-bottom': 'left-end'
    };

    retVal = placementMap[placement] || placement;

    if (isRtl) {
      /* Map Floating-UI to RTL placements */
      const placementMapRtl: Record<string, FloatingPlacement> = {
        left: 'right',
        'left-start': 'right-start',
        'left-end': 'right-end',
        'top-start': 'top-end',
        'top-end': 'top-start',
        right: 'left',
        'right-start': 'left-start',
        'right-end': 'left-end',
        'bottom-start': 'bottom-end',
        'bottom-end': 'bottom-start'
      };

      retVal = placementMapRtl[retVal] || retVal;
    }
  }

  return retVal;
};

/**
 * Convert Floating-UI placement to a valid `menuStyles` position.
 *
 * @param placement A Floating-UI placement.
 *
 * @returns A `menuStyles` position.
 */
export const toMenuPosition = (placement?: FloatingPlacement): MenuPosition => {
  if (placement === undefined || placement === 'auto') {
    return 'bottom';
  }

  return placement.split('-')[0] as MenuPosition;
};

/**
 * Convert Floating-UI placement to a valid `arrowStyles` position.
 *
 * @param placement A Floating-UI placement.
 *
 * @returns An `arrowStyles` position.
 */
export const toArrowPosition = (placement?: FloatingPlacement): ArrowPosition => {
  const positionMap: Record<FloatingPlacement, ArrowPosition> = {
    auto: 'top',
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

  return positionMap[placement || 'auto'];
};
