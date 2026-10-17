/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { hslToHsv, hsvToHsl } from './conversion';

describe('conversion utility functions', () => {
  describe('hsvToHsl', () => {
    it('converts black without a NaN lightness', () => {
      expect(hsvToHsl(0, 0, 0)).toStrictEqual({ h: 0, s: 0, l: 0 });
    });

    it('converts fully saturated colors', () => {
      expect(hsvToHsl(0, 100, 100)).toStrictEqual({ h: 0, s: 100, l: 50 });
      expect(hsvToHsl(240, 100, 50)).toStrictEqual({ h: 240, s: 100, l: 25 });
    });
  });

  describe('hslToHsv', () => {
    it('converts black', () => {
      expect(hslToHsv(0, 0, 0)).toStrictEqual({ h: 0, s: 0, v: 0 });
    });

    it('converts a mid-tone color', () => {
      const { h, s, v } = hslToHsv(184.44444444444443, 53.99999999999999, 19.607843137254903);

      expect(h).toBe(184.44444444444443);
      expect(s).toBeCloseTo(70.1299, 3);
      expect(v).toBeCloseTo(30.1961, 3);
    });
  });
});
