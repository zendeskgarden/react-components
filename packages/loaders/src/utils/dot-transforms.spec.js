/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { retrieveXTransform, retrieveYTransform } from './dot-transforms';

describe('animations', () => {
  describe('retrieveXTransform()', () => {
    it('returns MID_X if sub-frame is within KEYFRAME_1', () => {
      expect(retrieveXTransform(0.111)).toBe(31);
    });

    it('returns eased MID_X if sub-frame is within KEYFRAME_2', () => {
      expect(retrieveXTransform(0.5)).toBeCloseTo(0.27517);
    });

    it('returns 0 if sub-frame is within KEYFRAME_4', () => {
      expect(retrieveXTransform(1.3)).toBe(0);
    });

    it('returns MID_X upper transform if sub-frame is within KEYFRAME_MAX', () => {
      expect(retrieveXTransform(1.8)).toBe(31);
    });

    it('returns MID_X lower transform if sub-frame otherwise', () => {
      expect(retrieveXTransform(1.6)).toBeCloseTo(19.0769);
    });

    it('returns correct value if sub-frame is greater than KEYFRAME_MAX', () => {
      expect(retrieveXTransform(3)).toBe(62);
    });
  });

  describe('retrieveYTransform()', () => {
    it('returns correct value if sub-frame is within KEYFRAME_1', () => {
      expect(retrieveYTransform(0.111)).toBeCloseTo(28.67);
    });

    it('returns correct value if sub-frame is within KEYFRAME_3', () => {
      expect(retrieveYTransform(0.5)).toBe(27);
    });

    it('returns correct value if sub-frame is within KEYFRAME_4', () => {
      expect(retrieveYTransform(1.3)).toBeCloseTo(31.0);
    });

    it('returns correct value if sub-frame is within KEYFRAME_5', () => {
      expect(retrieveYTransform(1.5)).toBeCloseTo(0.148);
    });

    it('returns correct value otherwise', () => {
      expect(retrieveYTransform(1.7)).toBeCloseTo(11.6618);
    });
  });
});
