/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { computeFrames } from './animations';

describe('animations', () => {
  describe('computeFrames', () => {
    it('linear interpolation between frames', () => {
      const { 0: first, 50: middle, 100: last } = computeFrames(
        { 0: 1, 99: 100 },
        { duration: 1000, totalFrames: 100 }
      );

      expect(first).toBe(1);
      expect(last).toBe(1);
      expect(middle).toBe(68.99705398202416);
    });
  });
});
