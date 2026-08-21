/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { addDays } from 'date-fns/addDays';
import { subDays } from 'date-fns/subDays';
import { getStartOfWeek, isDateWithinRange } from './calendar-utils';

const DATE = new Date(2019, 1, 5);

describe('Calendar Utilities', () => {
  describe('getStartOfWeek()', () => {
    it('provides correct mapping if region is matched', () => {
      expect(getStartOfWeek('en-GB')).toBe(1);
    });

    it('provides correct mapping if language is matched', () => {
      expect(getStartOfWeek('ko')).toBe(0);
    });

    it('provides Sunday start date if no match is found', () => {
      expect(getStartOfWeek('invalid')).toBe(0);
    });

    it('provides Sunday start date if no locale is provided', () => {
      expect(getStartOfWeek()).toBe(0);
    });
  });

  describe('isDateWithinRange()', () => {
    it('returns true if no minValue or maxValue is provided', () => {
      expect(isDateWithinRange(DATE)).toBe(true);
    });

    it('returns true if the date is after minValue', () => {
      expect(isDateWithinRange(DATE, subDays(DATE, 1))).toBe(true);
    });

    it('returns true if the date is the same day as minValue', () => {
      expect(isDateWithinRange(DATE, DATE)).toBe(true);
    });

    it('returns false if the date is before minValue', () => {
      expect(isDateWithinRange(DATE, addDays(DATE, 1))).toBe(false);
    });

    it('returns true if the date is before maxValue', () => {
      expect(isDateWithinRange(DATE, undefined, addDays(DATE, 1))).toBe(true);
    });

    it('returns true if the date is the same day as maxValue', () => {
      expect(isDateWithinRange(DATE, undefined, DATE)).toBe(true);
    });

    it('returns false if the date is after maxValue', () => {
      expect(isDateWithinRange(DATE, undefined, subDays(DATE, 1))).toBe(false);
    });

    it('returns true if the date falls within both minValue and maxValue', () => {
      expect(isDateWithinRange(DATE, subDays(DATE, 2), addDays(DATE, 2))).toBe(true);
    });

    it('returns false if the date falls outside both minValue and maxValue', () => {
      expect(isDateWithinRange(subDays(DATE, 3), subDays(DATE, 2), addDays(DATE, 2))).toBe(false);
      expect(isDateWithinRange(addDays(DATE, 3), subDays(DATE, 2), addDays(DATE, 2))).toBe(false);
    });
  });
});
