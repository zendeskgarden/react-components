/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ARRAY_ARROW_POSITION, ARRAY_MENU_POSITION } from '@zendeskgarden/react-theming';
import { Placement } from '@popperjs/core';
import { Placement as GardenPlacement } from '../types';

type ArrowPosition = (typeof ARRAY_ARROW_POSITION)[number];
type MenuPosition = (typeof ARRAY_MENU_POSITION)[number];

/**
 * Convert Garden RTL aware placement to Popper.JS valid placement
 * @param {String} gardenPlacement
 */
export function getPopperPlacement(gardenPlacement: GardenPlacement) {
  const gardenToPopperMapping: Record<GardenPlacement, Placement> = {
    auto: 'auto',
    top: 'top',
    'top-start': 'top-start',
    'top-end': 'top-end',
    bottom: 'bottom',
    'bottom-start': 'bottom-start',
    'bottom-end': 'bottom-end',
    end: 'right',
    'end-top': 'right-start',
    'end-bottom': 'right-end',
    start: 'left',
    'start-top': 'left-start',
    'start-bottom': 'left-end'
  };

  return gardenToPopperMapping[gardenPlacement];
}

/**
 * Convert Garden RTL aware placement to RTL equivalent Popper.JS placement
 * @param {String} gardenPlacement
 */
export function getRtlPopperPlacement(gardenPlacement: GardenPlacement) {
  const rtlPlacementMappings: Partial<Record<Placement, Placement>> = {
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

  const popperPlacement = getPopperPlacement(gardenPlacement);

  return rtlPlacementMappings[popperPlacement] || popperPlacement;
}

/**
 * Convert Popper.JS placement to corresponding arrow position
 * @param {String} popperPlacement
 */
export function getArrowPosition(popperPlacement: Placement) {
  const arrowPositionMappings: Partial<Record<Placement, ArrowPosition>> = {
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

  return arrowPositionMappings[popperPlacement] || 'top';
}

/**
 * Convert Popper.JS placement to corresponding menu position
 * @param {String} popperPlacement
 */
export function getMenuPosition(popperPlacement?: Placement) {
  return (popperPlacement ? popperPlacement.split('-')[0] : 'bottom') as MenuPosition;
}
