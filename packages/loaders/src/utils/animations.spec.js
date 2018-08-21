/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { easeInCubic, easeOutCubic, easeInOutCubic } from './animations';

describe('animations', () => {
  describe('easeInCubic()', () => {
    it('returns correct value based on time', () => {
      expect(easeInCubic(2)).toBe(8);
    });
  });

  describe('easeOutCubic()', () => {
    it('returns correct value based on time', () => {
      expect(easeOutCubic(2)).toBe(2);
    });
  });

  describe('easeInOutCubic()', () => {
    it('returns correct value when time is less than 0.5', () => {
      expect(easeInOutCubic(0.45)).toBeCloseTo(0.3645);
    });

    it('returns correct value when time is greater than 0.5', () => {
      expect(easeInOutCubic(3)).toBe(33);
    });
  });
});
