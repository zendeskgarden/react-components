/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getNextHsv, limit } from './saturation';

describe('saturation utility functions', () => {
  let originalGetBoundingClientRect: any;

  beforeEach(() => {
    originalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        bottom: 510,
        height: 234,
        left: 384.5,
        right: 696.5,
        top: 276,
        width: 312,
        x: 384.5,
        y: 276,
        toJSON: () => {
          return undefined;
        }
      };
    });
  });

  afterEach(() => {
    Element.prototype.getBoundingClientRect = originalGetBoundingClientRect;
  });

  describe('getNextHsv', () => {
    it('calculates the new HSV color upon mousedown on colorwell', () => {
      const div = document.createElement('div');
      const event = { pageX: 695, pageY: 276 } as MouseEvent;
      const hsv = { h: 184, s: 0, v: 0 };
      const nextHsv = getNextHsv(event, hsv.h, div, false);

      expect(nextHsv).toStrictEqual({ h: 184, s: 0.9951923076923077, v: 1 });
    });
  });

  describe('limit', () => {
    it('ensures a value falls within a given range.', () => {
      expect(limit(20, 100, 50)).toBe(50);
      expect(limit(200, 100, 50)).toBe(100);
      expect(limit(75, 100, 50)).toBe(75);
    });
  });
});
