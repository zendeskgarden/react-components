/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Placement as FloatingPlacement } from '@floating-ui/react-dom';
import { IGardenTheme, MenuPosition, Placement } from '../types';

/* Map Garden to Floating-UI placements */
export const PLACEMENT_MAP: Record<string, FloatingPlacement> = {
  end: 'right',
  'end-top': 'right-start',
  'end-bottom': 'right-end',
  start: 'left',
  'start-top': 'left-start',
  'start-bottom': 'left-end'
};

/* Map Floating-UI to RTL placements */
export const RTL_PLACEMENT_MAP: Record<string, FloatingPlacement> = {
  left: 'right',
  'left-start': 'right-start',
  'left-end': 'right-end',
  right: 'left',
  'right-start': 'left-start',
  'right-end': 'left-end'
};

const toFloatingPlacement = (placement: Placement, theme: IGardenTheme): FloatingPlacement => {
  let retVal = PLACEMENT_MAP[placement] || placement;

  if (theme.rtl) {
    retVal = RTL_PLACEMENT_MAP[retVal] || retVal;
  }

  return retVal;
};

/* Map Floating-UI side placement to fallbacks */
const SIDE_FALLBACKS_MAP: Record<string, FloatingPlacement[]> = {
  top: ['top-start', 'top', 'top-end'],
  right: ['right-start', 'right', 'right-end'],
  bottom: ['bottom-start', 'bottom', 'bottom-end'],
  left: ['left-start', 'left', 'left-end']
};

/* Map Floating-UI side placement to opposite side */
const SIDE_OPPOSITE_MAP: Record<string, MenuPosition> = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right'
};

const toFallbackPlacements = (
  primaryPlacement: FloatingPlacement,
  theme: IGardenTheme,
  fallbackPlacements?: Placement[]
): FloatingPlacement[] => {
  if (Array.isArray(fallbackPlacements) && fallbackPlacements.length > 0) {
    return fallbackPlacements.map(fallbackPlacement =>
      toFloatingPlacement(fallbackPlacement, theme)
    );
  }

  const side = primaryPlacement.split('-')[0];
  const sameSideFallbackPlacements = [...SIDE_FALLBACKS_MAP[side]];
  const oppositeSideFallbackPlacements = SIDE_FALLBACKS_MAP[SIDE_OPPOSITE_MAP[side]];

  // Remove the primary placement from the list of same-side fallbacks to
  // prevent extra work for Floating-UI
  sameSideFallbackPlacements.splice(sameSideFallbackPlacements.indexOf(primaryPlacement), 1);

  return [...sameSideFallbackPlacements, ...oppositeSideFallbackPlacements];
};

/**
 * Convert Garden placements to valid placements for Floating-UI.
 *
 * @param {Object} theme Context `theme` object used to determine if layout is right-to-left.
 * @param {string} placement A Garden placement.
 * @param {Array} fallbackPlacements Optional list of Garden fallback placements.
 *
 * @returns A Floating-UI (placement, fallbackPlacements) tuple.
 */
export const getFloatingPlacements = (
  theme: IGardenTheme,
  placement: Placement,
  fallbackPlacements?: Placement[]
): [FloatingPlacement, FloatingPlacement[]] => {
  const floatingPlacement = toFloatingPlacement(placement, theme);
  const floatingFallbackPlacements = toFallbackPlacements(
    floatingPlacement,
    theme,
    fallbackPlacements
  );

  return [floatingPlacement, floatingFallbackPlacements];
};
