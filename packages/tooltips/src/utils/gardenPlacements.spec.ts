/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ARROW_POSITION } from '@zendeskgarden/react-theming';
import { getPopperPlacement, getRtlPopperPlacement, getArrowPosition } from './gardenPlacements';
import { GardenPlacement, PopperPlacement } from '../types';

describe('Garden Placement Utilities', () => {
  describe('getPopperPlacement()', () => {
    it('provides correct mapping between Garden and Popper.js placements', () => {
      const GARDEN_PLACEMENTS: Record<GardenPlacement, PopperPlacement> = {
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

      const gardenPlacements = Object.keys(GARDEN_PLACEMENTS) as GardenPlacement[];

      gardenPlacements.forEach(gardenPlacement => {
        expect(getPopperPlacement(gardenPlacement)).toBe(GARDEN_PLACEMENTS[gardenPlacement]);
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

      const gardenPlacements = Object.keys(RTL_PLACEMENT_MAPPINGS) as GardenPlacement[];

      gardenPlacements.forEach(gardenPlacement => {
        expect(getRtlPopperPlacement(gardenPlacement)).toBe(
          RTL_PLACEMENT_MAPPINGS[gardenPlacement]
        );
      });
    });
  });

  describe('getArrowPosition()', () => {
    it('provides correct mapping between Popper.JS placement and arrow position', () => {
      const ARROW_POSITION_MAPPINGS: Record<PopperPlacement, ARROW_POSITION> = {
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

      const popperPlacements = Object.keys(ARROW_POSITION_MAPPINGS) as PopperPlacement[];

      popperPlacements.forEach(popperPlacement => {
        expect(getArrowPosition(popperPlacement)).toBe(ARROW_POSITION_MAPPINGS[popperPlacement]);
      });
    });
  });
});
