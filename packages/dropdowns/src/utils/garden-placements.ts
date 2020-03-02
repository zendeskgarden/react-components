/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ARROW_POSITION, MENU_POSITION } from '@zendeskgarden/react-theming';

type SHARED_PLACEMENT =
  | 'auto'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end';

export type GARDEN_PLACEMENT =
  | SHARED_PLACEMENT
  | 'end'
  | 'end-top'
  | 'end-bottom'
  | 'start'
  | 'start-top'
  | 'start-bottom';

export type POPPER_PLACEMENT =
  | SHARED_PLACEMENT
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end';

/**
 * Convert Garden RTL aware placement to Popper.JS valid placement
 */
export function getPopperPlacement(gardenPlacement: GARDEN_PLACEMENT): POPPER_PLACEMENT {
  switch (gardenPlacement) {
    case 'end':
      return 'right';
    case 'end-top':
      return 'right-start';
    case 'end-bottom':
      return 'right-end';
    case 'start':
      return 'left';
    case 'start-top':
      return 'left-start';
    case 'start-bottom':
      return 'left-end';
    default:
      return gardenPlacement;
  }
}

/**
 * Convert Garden RTL aware placement to RTL equivalent Popper.JS placement
 * @param {String} gardenPlacement
 */
export function getRtlPopperPlacement(gardenPlacement: GARDEN_PLACEMENT): POPPER_PLACEMENT {
  const popperPlacement = getPopperPlacement(gardenPlacement);

  switch (popperPlacement) {
    case 'left':
      return 'right';
    case 'left-start':
      return 'right-start';
    case 'left-end':
      return 'right-end';
    case 'top-start':
      return 'top-end';
    case 'top-end':
      return 'top-start';
    case 'right':
      return 'left';
    case 'right-start':
      return 'left-start';
    case 'right-end':
      return 'left-end';
    case 'bottom-start':
      return 'bottom-end';
    case 'bottom-end':
      return 'bottom-start';
    default:
      return popperPlacement;
  }
}

/**
 * Convert Popper.JS placement to corresponding arrow position
 * @param {String} popperPlacement
 */
export function getArrowPosition(popperPlacement?: POPPER_PLACEMENT) {
  const arrowPositionMappings: Record<POPPER_PLACEMENT, ARROW_POSITION> = {
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

  return (popperPlacement ? arrowPositionMappings[popperPlacement] : 'top') as ARROW_POSITION;
}

/**
 * Convert Popper.JS placement to corresponding menu position
 * @param {String} popperPlacement
 */
export function getMenuPosition(popperPlacement?: POPPER_PLACEMENT) {
  if (popperPlacement === 'auto') {
    return 'bottom' as MENU_POSITION;
  }

  return (popperPlacement ? popperPlacement.split('-')[0] : 'bottom') as MENU_POSITION;
}
