/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ARROW_POSITION } from '@zendeskgarden/react-theming';
import {
  GARDEN_PLACEMENT,
  POPPER_PLACEMENT,
  getPopperPlacement,
  getRtlPopperPlacement,
  getArrowPosition
} from './gardenPlacements';

describe('Garden Placement Utilities', () => {
  describe('getPopperPlacement()', () => {
    it('provides correct mapping between Garden and Popper.js placements', () => {
      const GARDEN_PLACEMENTS: Record<GARDEN_PLACEMENT, POPPER_PLACEMENT> = {
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

      Object.keys(GARDEN_PLACEMENTS).forEach(gardenPlacement => {
        expect(getPopperPlacement(gardenPlacement as GARDEN_PLACEMENT)).toBe(
          GARDEN_PLACEMENTS[gardenPlacement as GARDEN_PLACEMENT]
        );
      });
    });
  });

  describe('getRtlPopperPlacement()', () => {
    it('provides correct mapping between Garden placement and RTL equivalent', () => {
      const RTL_PLACEMENT_MAPPINGS: Record<GARDEN_PLACEMENT, POPPER_PLACEMENT> = {
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

      Object.keys(RTL_PLACEMENT_MAPPINGS).forEach(gardenPlacement => {
        expect(getRtlPopperPlacement(gardenPlacement as GARDEN_PLACEMENT)).toBe(
          RTL_PLACEMENT_MAPPINGS[gardenPlacement as GARDEN_PLACEMENT]
        );
      });
    });
  });

  describe('getArrowPosition()', () => {
    it('provides correct mapping between Popper.JS placement and arrow position', () => {
      const ARROW_POSITION_MAPPINGS: Record<POPPER_PLACEMENT, ARROW_POSITION> = {
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

      Object.keys(ARROW_POSITION_MAPPINGS).forEach(popperPlacement => {
        expect(getArrowPosition(popperPlacement as POPPER_PLACEMENT)).toBe(
          ARROW_POSITION_MAPPINGS[popperPlacement as POPPER_PLACEMENT]
        );
      });
    });
  });
});
