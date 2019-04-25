/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import {
  GARDEN_PLACEMENTS,
  POPPER_PLACEMENTS,
  getPopperPlacement,
  getRtlPopperPlacement
} from './garden-placements';

describe('Garden Placement Utilities', () => {
  describe('getPopperPlacement()', () => {
    it('provides correct mapping between Garden and Popper.js placements', () => {
      const GARDEN_POPPER_MAPPINGS = {
        [GARDEN_PLACEMENTS.AUTO]: POPPER_PLACEMENTS.AUTO,
        [GARDEN_PLACEMENTS.TOP]: POPPER_PLACEMENTS.TOP,
        [GARDEN_PLACEMENTS.TOP_START]: POPPER_PLACEMENTS.TOP_START,
        [GARDEN_PLACEMENTS.TOP_END]: POPPER_PLACEMENTS.TOP_END,
        [GARDEN_PLACEMENTS.END]: POPPER_PLACEMENTS.RIGHT,
        [GARDEN_PLACEMENTS.END_TOP]: POPPER_PLACEMENTS.RIGHT_START,
        [GARDEN_PLACEMENTS.END_BOTTOM]: POPPER_PLACEMENTS.RIGHT_END,
        [GARDEN_PLACEMENTS.BOTTOM]: POPPER_PLACEMENTS.BOTTOM,
        [GARDEN_PLACEMENTS.BOTTOM_START]: POPPER_PLACEMENTS.BOTTOM_START,
        [GARDEN_PLACEMENTS.BOTTOM_END]: POPPER_PLACEMENTS.BOTTOM_END,
        [GARDEN_PLACEMENTS.START]: POPPER_PLACEMENTS.LEFT,
        [GARDEN_PLACEMENTS.START_TOP]: POPPER_PLACEMENTS.LEFT_START,
        [GARDEN_PLACEMENTS.START_BOTTOM]: POPPER_PLACEMENTS.LEFT_END
      };

      Object.values(GARDEN_PLACEMENTS).forEach(gardenPlacement => {
        expect(getPopperPlacement(gardenPlacement)).toBe(GARDEN_POPPER_MAPPINGS[gardenPlacement]);
      });
    });
  });

  describe('getRtlPopperPlacement()', () => {
    it('provides correct mapping between Garden placement and RTL equivalent', () => {
      const RTL_PLACEMENT_MAPPINGS = {
        [GARDEN_PLACEMENTS.AUTO]: POPPER_PLACEMENTS.AUTO,
        [GARDEN_PLACEMENTS.START]: POPPER_PLACEMENTS.RIGHT,
        [GARDEN_PLACEMENTS.START_TOP]: POPPER_PLACEMENTS.RIGHT_START,
        [GARDEN_PLACEMENTS.START_BOTTOM]: POPPER_PLACEMENTS.RIGHT_END,
        [GARDEN_PLACEMENTS.TOP_START]: POPPER_PLACEMENTS.TOP_END,
        [GARDEN_PLACEMENTS.TOP]: POPPER_PLACEMENTS.TOP,
        [GARDEN_PLACEMENTS.TOP_END]: POPPER_PLACEMENTS.TOP_START,
        [GARDEN_PLACEMENTS.END]: POPPER_PLACEMENTS.LEFT,
        [GARDEN_PLACEMENTS.END_TOP]: POPPER_PLACEMENTS.LEFT_START,
        [GARDEN_PLACEMENTS.END_BOTTOM]: POPPER_PLACEMENTS.LEFT_END,
        [GARDEN_PLACEMENTS.BOTTOM_START]: POPPER_PLACEMENTS.BOTTOM_END,
        [GARDEN_PLACEMENTS.BOTTOM]: POPPER_PLACEMENTS.BOTTOM,
        [GARDEN_PLACEMENTS.BOTTOM_END]: POPPER_PLACEMENTS.BOTTOM_START
      };

      Object.values(GARDEN_PLACEMENTS).forEach(gardenPlacement => {
        expect(getRtlPopperPlacement(gardenPlacement)).toBe(
          RTL_PLACEMENT_MAPPINGS[gardenPlacement]
        );
      });
    });
  });
});
