/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
const PLACEMENT_MAP = {
  end: 'right',
  'end-top': 'right-start',
  'end-bottom': 'right-end',
  start: 'left',
  'start-top': 'left-start',
  'start-bottom': 'left-end'
};
const RTL_PLACEMENT_MAP = {
  left: 'right',
  'left-start': 'right-start',
  'left-end': 'right-end',
  right: 'left',
  'right-start': 'left-start',
  'right-end': 'left-end'
};
const toFloatingPlacement = (placement, theme) => {
  let retVal = PLACEMENT_MAP[placement] || placement;
  if (theme.rtl) {
    retVal = RTL_PLACEMENT_MAP[retVal] || retVal;
  }
  return retVal;
};
const SIDE_FALLBACKS_MAP = {
  top: ['top-start', 'top', 'top-end'],
  right: ['right-start', 'right', 'right-end'],
  bottom: ['bottom-start', 'bottom', 'bottom-end'],
  left: ['left-start', 'left', 'left-end']
};
const SIDE_OPPOSITE_MAP = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right'
};
const toFallbackPlacements = (primaryPlacement, theme, fallbackPlacements) => {
  if (Array.isArray(fallbackPlacements) && fallbackPlacements.length > 0) {
    return fallbackPlacements.map(fallbackPlacement => toFloatingPlacement(fallbackPlacement, theme));
  }
  const side = primaryPlacement.split('-')[0];
  const sameSideFallbackPlacements = [...SIDE_FALLBACKS_MAP[side]];
  const oppositeSideFallbackPlacements = SIDE_FALLBACKS_MAP[SIDE_OPPOSITE_MAP[side]];
  sameSideFallbackPlacements.splice(sameSideFallbackPlacements.indexOf(primaryPlacement), 1);
  return [...sameSideFallbackPlacements, ...oppositeSideFallbackPlacements];
};
const getFloatingPlacements = (theme, placement, fallbackPlacements) => {
  const floatingPlacement = toFloatingPlacement(placement, theme);
  const floatingFallbackPlacements = toFallbackPlacements(floatingPlacement, theme, fallbackPlacements);
  return [floatingPlacement, floatingFallbackPlacements];
};

export { PLACEMENT_MAP, RTL_PLACEMENT_MAP, getFloatingPlacements };
