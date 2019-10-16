/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { retrieveXCoordinate, retrieveYCoordinate } from './dot-coordinates';

describe('Dot Coordinates', () => {
  describe('retrieveXCoordinate()', () => {
    it('returns MID_X if sub-frame is within KEYFRAME_1', () => {
      expect(retrieveXCoordinate(0.111)).toBe(31);
    });

    it('returns eased MID_X if sub-frame is within KEYFRAME_2', () => {
      expect(retrieveXCoordinate(0.5)).toBeCloseTo(0.27517);
    });

    it('returns 0 if sub-frame is within KEYFRAME_4', () => {
      expect(retrieveXCoordinate(1.3)).toBe(0);
    });

    it('returns MID_X upper transform if sub-frame is within KEYFRAME_MAX', () => {
      expect(retrieveXCoordinate(1.8)).toBe(31);
    });

    it('returns MID_X lower transform if sub-frame otherwise', () => {
      expect(retrieveXCoordinate(1.6)).toBeCloseTo(19.0769);
    });

    it('returns correct value if sub-frame is greater than KEYFRAME_MAX', () => {
      expect(retrieveXCoordinate(3)).toBe(62);
    });
  });

  describe('retrieveYCoordinate()', () => {
    it('returns correct value if sub-frame is within KEYFRAME_1', () => {
      expect(retrieveYCoordinate(0.111)).toBeCloseTo(28.67);
    });

    it('returns correct value if sub-frame is within KEYFRAME_3', () => {
      expect(retrieveYCoordinate(0.5)).toBe(27);
    });

    it('returns correct value if sub-frame is within KEYFRAME_4', () => {
      expect(retrieveYCoordinate(1.3)).toBeCloseTo(31.0);
    });

    it('returns correct value if sub-frame is within KEYFRAME_5', () => {
      expect(retrieveYCoordinate(1.5)).toBeCloseTo(0.148);
    });

    it('returns correct value otherwise', () => {
      expect(retrieveYCoordinate(1.7)).toBeCloseTo(11.6618);
    });
  });
});
