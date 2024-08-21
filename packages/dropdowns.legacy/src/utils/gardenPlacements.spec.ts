/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ArrowPosition, MenuPosition } from '@zendeskgarden/react-theming';
import { GardenPlacement, PLACEMENT, PopperPlacement } from '../types';
import {
  getPopperPlacement,
  getRtlPopperPlacement,
  getArrowPosition,
  getMenuPosition
} from './garden-placements';

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

  describe('getArrowPosition()', () => {
    it('provides correct mapping between Popper.JS placement and arrow position', () => {
      const ARROW_POSITION_MAPPINGS: Record<PopperPlacement, ArrowPosition> = {
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
        expect(getArrowPosition(popperPlacement as PopperPlacement)).toBe(
          ARROW_POSITION_MAPPINGS[popperPlacement as PopperPlacement]
        );
      });
    });
  });

  describe('getMenuPosition()', () => {
    it('provides correct mapping between Popper.JS placement and menu position', () => {
      const MENU_POSITION_MAPPINGS: Record<PopperPlacement, MenuPosition> = {
        auto: 'bottom',
        top: 'top',
        'top-start': 'top',
        'top-end': 'top',
        right: 'right',
        'right-start': 'right',
        'right-end': 'right',
        bottom: 'bottom',
        'bottom-start': 'bottom',
        'bottom-end': 'bottom',
        left: 'left',
        'left-start': 'left',
        'left-end': 'left'
      };

      Object.keys(MENU_POSITION_MAPPINGS).forEach(popperPlacement => {
        expect(getMenuPosition(popperPlacement as PopperPlacement)).toBe(
          MENU_POSITION_MAPPINGS[popperPlacement as PopperPlacement]
        );
      });
    });
  });
});
