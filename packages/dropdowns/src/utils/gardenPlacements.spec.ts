/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import {
  GARDEN_PLACEMENT,
  POPPER_PLACEMENT,
  getPopperPlacement,
  getRtlPopperPlacement
} from './garden-placements';

describe('Garden Placement Utilities', () => {
  describe('getPopperPlacement()', () => {
    it('provides correct mapping between Garden and Popper.js placements', () => {
      const GARDEN_POPPER_MAPPINGS = {
        [GARDEN_PLACEMENT.AUTO]: POPPER_PLACEMENT.AUTO,
        [GARDEN_PLACEMENT.TOP]: POPPER_PLACEMENT.TOP,
        [GARDEN_PLACEMENT.TOP_START]: POPPER_PLACEMENT.TOP_START,
        [GARDEN_PLACEMENT.TOP_END]: POPPER_PLACEMENT.TOP_END,
        [GARDEN_PLACEMENT.END]: POPPER_PLACEMENT.RIGHT,
        [GARDEN_PLACEMENT.END_TOP]: POPPER_PLACEMENT.RIGHT_START,
        [GARDEN_PLACEMENT.END_BOTTOM]: POPPER_PLACEMENT.RIGHT_END,
        [GARDEN_PLACEMENT.BOTTOM]: POPPER_PLACEMENT.BOTTOM,
        [GARDEN_PLACEMENT.BOTTOM_START]: POPPER_PLACEMENT.BOTTOM_START,
        [GARDEN_PLACEMENT.BOTTOM_END]: POPPER_PLACEMENT.BOTTOM_END,
        [GARDEN_PLACEMENT.START]: POPPER_PLACEMENT.LEFT,
        [GARDEN_PLACEMENT.START_TOP]: POPPER_PLACEMENT.LEFT_START,
        [GARDEN_PLACEMENT.START_BOTTOM]: POPPER_PLACEMENT.LEFT_END
      };

      Object.keys(GARDEN_PLACEMENT).forEach(gardenPlacement => {
        expect(getPopperPlacement(gardenPlacement as GARDEN_PLACEMENT)).toBe(
          (GARDEN_POPPER_MAPPINGS as any)[gardenPlacement]
        );
      });
    });
  });

  describe('getRtlPopperPlacement()', () => {
    it('provides correct mapping between Garden placement and RTL equivalent', () => {
      const RTL_PLACEMENT_MAPPINGS = {
        [GARDEN_PLACEMENT.AUTO]: POPPER_PLACEMENT.AUTO,
        [GARDEN_PLACEMENT.START]: POPPER_PLACEMENT.RIGHT,
        [GARDEN_PLACEMENT.START_TOP]: POPPER_PLACEMENT.RIGHT_START,
        [GARDEN_PLACEMENT.START_BOTTOM]: POPPER_PLACEMENT.RIGHT_END,
        [GARDEN_PLACEMENT.TOP_START]: POPPER_PLACEMENT.TOP_END,
        [GARDEN_PLACEMENT.TOP]: POPPER_PLACEMENT.TOP,
        [GARDEN_PLACEMENT.TOP_END]: POPPER_PLACEMENT.TOP_START,
        [GARDEN_PLACEMENT.END]: POPPER_PLACEMENT.LEFT,
        [GARDEN_PLACEMENT.END_TOP]: POPPER_PLACEMENT.LEFT_START,
        [GARDEN_PLACEMENT.END_BOTTOM]: POPPER_PLACEMENT.LEFT_END,
        [GARDEN_PLACEMENT.BOTTOM_START]: POPPER_PLACEMENT.BOTTOM_END,
        [GARDEN_PLACEMENT.BOTTOM]: POPPER_PLACEMENT.BOTTOM,
        [GARDEN_PLACEMENT.BOTTOM_END]: POPPER_PLACEMENT.BOTTOM_START
      };

      Object.keys(GARDEN_PLACEMENT).forEach(gardenPlacement => {
        expect(getRtlPopperPlacement(gardenPlacement as GARDEN_PLACEMENT)).toBe(
          (RTL_PLACEMENT_MAPPINGS as any)[gardenPlacement]
        );
      });
    });
  });
});
