/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

enum SHARED_PLACEMENT {
  AUTO = 'auto',
  TOP = 'top',
  TOP_START = 'top-start',
  TOP_END = 'top-end',
  BOTTOM = 'bottom',
  BOTTOM_START = 'bottom-start',
  BOTTOM_END = 'bottom-end'
}

export enum GARDEN_PLACEMENT {
  AUTO = 'auto',
  TOP = 'top',
  TOP_START = 'top-start',
  TOP_END = 'top-end',
  BOTTOM = 'bottom',
  BOTTOM_START = 'bottom-start',
  BOTTOM_END = 'bottom-end',
  END = 'end',
  END_TOP = 'end-top',
  END_BOTTOM = 'end-bottom',
  START = 'start',
  START_TOP = 'start-top',
  START_BOTTOM = 'start-bottom'
}

export enum POPPER_PLACEMENT {
  AUTO = 'auto',
  TOP = 'top',
  TOP_START = 'top-start',
  TOP_END = 'top-end',
  BOTTOM = 'bottom',
  BOTTOM_START = 'bottom-start',
  BOTTOM_END = 'bottom-end',
  RIGHT = 'right',
  RIGHT_START = 'right-start',
  RIGHT_END = 'right-end',
  LEFT = 'left',
  LEFT_START = 'left-start',
  LEFT_END = 'left-end'
}

/**
 * Convert Garden RTL aware placement to Popper.JS valid placement
 */
export function getPopperPlacement(gardenPlacement: GARDEN_PLACEMENT): string {
  const sharedPlacements: any = {};

  for (const KEY in SHARED_PLACEMENT) {
    if (Object.prototype.hasOwnProperty.call(SHARED_PLACEMENT, KEY)) {
      const value = SHARED_PLACEMENT[KEY];

      sharedPlacements[value] = value;
    }
  }

  const GARDEN_POPPER_MAPPINGS = {
    ...sharedPlacements,
    [GARDEN_PLACEMENT.END]: POPPER_PLACEMENT.RIGHT,
    [GARDEN_PLACEMENT.END_TOP]: POPPER_PLACEMENT.RIGHT_START,
    [GARDEN_PLACEMENT.END_BOTTOM]: POPPER_PLACEMENT.RIGHT_END,
    [GARDEN_PLACEMENT.START]: POPPER_PLACEMENT.LEFT,
    [GARDEN_PLACEMENT.START_TOP]: POPPER_PLACEMENT.LEFT_START,
    [GARDEN_PLACEMENT.START_BOTTOM]: POPPER_PLACEMENT.LEFT_END
  };

  return GARDEN_POPPER_MAPPINGS[gardenPlacement];
}

/**
 * Convert Garden RTL aware placement to RTL equivalent Popper.JS placement
 * @param {String} gardenPlacement
 */
export function getRtlPopperPlacement(gardenPlacement: GARDEN_PLACEMENT): string {
  const RTL_PLACEMENT_MAPPINGS: any = {
    [POPPER_PLACEMENT.LEFT]: POPPER_PLACEMENT.RIGHT,
    [POPPER_PLACEMENT.LEFT_START]: POPPER_PLACEMENT.RIGHT_START,
    [POPPER_PLACEMENT.LEFT_END]: POPPER_PLACEMENT.RIGHT_END,
    [POPPER_PLACEMENT.TOP_START]: POPPER_PLACEMENT.TOP_END,
    [POPPER_PLACEMENT.TOP_END]: POPPER_PLACEMENT.TOP_START,
    [POPPER_PLACEMENT.RIGHT]: POPPER_PLACEMENT.LEFT,
    [POPPER_PLACEMENT.RIGHT_START]: POPPER_PLACEMENT.LEFT_START,
    [POPPER_PLACEMENT.RIGHT_END]: POPPER_PLACEMENT.LEFT_END,
    [POPPER_PLACEMENT.BOTTOM_START]: POPPER_PLACEMENT.BOTTOM_END,
    [POPPER_PLACEMENT.BOTTOM_END]: POPPER_PLACEMENT.BOTTOM_START
  };

  const popperPlacement = getPopperPlacement(gardenPlacement);

  return RTL_PLACEMENT_MAPPINGS[popperPlacement] || popperPlacement;
}
