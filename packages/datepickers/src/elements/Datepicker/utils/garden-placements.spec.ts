/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getPopperPlacement, getRtlPopperPlacement } from './garden-placements';
import { GardenPlacement, PopperPlacement, PLACEMENT } from '../../../types';

describe('Garden Placement Utilities', () => {
  describe('getPopperPlacement()', () => {
    it('provides correct mapping between Garden and Popper.js placements', () => {
      const GARDEN_POPPER_MAPPINGS: Record<GardenPlacement, PopperPlacement> = {
        auto: 'auto',
        top: 'top',
        'top-start': 'top-start',
        'top-end': 'top-end',
        end: 'right',
        'end-top': 'right-start',
        'end-bottom': 'right-end',
        bottom: 'bottom',
        'bottom-start': 'bottom-start',
        'bottom-end': 'bottom-end',
        start: 'left',
        'start-top': 'left-start',
        'start-bottom': 'left-end'
      };

      PLACEMENT.forEach(gardenPlacement => {
        expect(getPopperPlacement(gardenPlacement)).toBe(GARDEN_POPPER_MAPPINGS[gardenPlacement]);
      });
    });
  });

  describe('getRtlPopperPlacement()', () => {
    it('provides correct mapping between Garden placement and RTL equivalent', () => {
      const RTL_PLACEMENT_MAPPINGS: Record<GardenPlacement, PopperPlacement> = {
        auto: 'auto',
        start: 'right',
        'start-top': 'right-start',
        'start-bottom': 'right-end',
        'top-start': 'top-end',
        top: 'top',
        'top-end': 'top-start',
        end: 'left',
        'end-top': 'left-start',
        'end-bottom': 'left-end',
        'bottom-start': 'bottom-end',
        bottom: 'bottom',
        'bottom-end': 'bottom-start'
      };

      PLACEMENT.forEach(gardenPlacement => {
        expect(getRtlPopperPlacement(gardenPlacement)).toBe(
          RTL_PLACEMENT_MAPPINGS[gardenPlacement]
        );
      });
    });
  });
});
