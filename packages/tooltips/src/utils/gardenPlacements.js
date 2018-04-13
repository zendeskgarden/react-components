const SHARED_PLACEMENTS = {
  AUTO: 'auto',
  TOP: 'top',
  TOP_START: 'top-start',
  TOP_END: 'top-end',
  BOTTOM: 'bottom',
  BOTTOM_START: 'bottom-start',
  BOTTOM_END: 'bottom-end'
};

export const GARDEN_PLACEMENTS = {
  ...SHARED_PLACEMENTS,
  END: 'end',
  END_TOP: 'end-top',
  END_BOTTOM: 'end-bottom',
  START: 'start',
  START_TOP: 'start-top',
  START_BOTTOM: 'start-bottom'
};

export const POPPER_PLACEMENTS = {
  ...SHARED_PLACEMENTS,
  RIGHT: 'right',
  RIGHT_START: 'right-start',
  RIGHT_END: 'right-end',
  LEFT: 'left',
  LEFT_START: 'left-start',
  LEFT_END: 'left-end'
};

/**
 * Convert Garden RTL aware placement to Popper.JS valid placement
 * @param {String} gardenPlacement
 */
export function getPopperPlacement(gardenPlacement) {
  const sharedPlacements = Object.values(SHARED_PLACEMENTS).reduce((acc, item) => {
    acc[item] = item;

    return acc;
  }, {});

  const GARDEN_POPPER_MAPPINGS = {
    ...sharedPlacements,
    [GARDEN_PLACEMENTS.END]: POPPER_PLACEMENTS.RIGHT,
    [GARDEN_PLACEMENTS.END_TOP]: POPPER_PLACEMENTS.RIGHT_START,
    [GARDEN_PLACEMENTS.END_BOTTOM]: POPPER_PLACEMENTS.RIGHT_END,
    [GARDEN_PLACEMENTS.START]: POPPER_PLACEMENTS.LEFT,
    [GARDEN_PLACEMENTS.START_TOP]: POPPER_PLACEMENTS.LEFT_START,
    [GARDEN_PLACEMENTS.START_BOTTOM]: POPPER_PLACEMENTS.LEFT_END
  };

  return GARDEN_POPPER_MAPPINGS[gardenPlacement];
}

/**
 * Convert Garden RTL aware placement to RTL equivalent Popper.JS placement
 * @param {String} gardenPlacement
 */
export function getRtlPopperPlacement(gardenPlacement) {
  const RTL_PLACEMENT_MAPPINGS = {
    [POPPER_PLACEMENTS.LEFT]: POPPER_PLACEMENTS.RIGHT,
    [POPPER_PLACEMENTS.LEFT_START]: POPPER_PLACEMENTS.RIGHT_START,
    [POPPER_PLACEMENTS.LEFT_END]: POPPER_PLACEMENTS.RIGHT_END,
    [POPPER_PLACEMENTS.TOP_START]: POPPER_PLACEMENTS.TOP_END,
    [POPPER_PLACEMENTS.TOP_END]: POPPER_PLACEMENTS.TOP_START,
    [POPPER_PLACEMENTS.RIGHT]: POPPER_PLACEMENTS.LEFT,
    [POPPER_PLACEMENTS.RIGHT_START]: POPPER_PLACEMENTS.LEFT_START,
    [POPPER_PLACEMENTS.RIGHT_END]: POPPER_PLACEMENTS.LEFT_END,
    [POPPER_PLACEMENTS.BOTTOM_START]: POPPER_PLACEMENTS.BOTTOM_END,
    [POPPER_PLACEMENTS.BOTTOM_END]: POPPER_PLACEMENTS.BOTTOM_START
  };

  const popperPlacement = getPopperPlacement(gardenPlacement);

  return RTL_PLACEMENT_MAPPINGS[popperPlacement] || popperPlacement;
}
