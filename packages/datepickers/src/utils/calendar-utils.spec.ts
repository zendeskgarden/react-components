/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { addDays } from 'date-fns/addDays';
import { subDays } from 'date-fns/subDays';
import {
  formatFullDate,
  formatFullWeekdayLabel,
  formatMonthHeading,
  formatWeekdayLabel,
  getMonthDateRange,
  getStartOfWeek,
  isDateWithinRange
} from './calendar-utils';

const DATE = new Date(2019, 1, 5);

describe('Calendar Utilities', () => {
  describe('getStartOfWeek()', () => {
    it('provides correct mapping if region is matched', () => {
      expect(getStartOfWeek('en-GB')).toBe(1);
    });

    it('provides correct mapping if language is matched', () => {
      expect(getStartOfWeek('ko')).toBe(0);
    });

    it('defers to the CLDR root default for a syntactically valid but unregistered locale (e.g. invalid)', () => {
      // "invalid" resolves against the CLDR root locale (Monday) rather than throwing.
      expect(getStartOfWeek('invalid')).toBe(1);
    });

    it('provides Sunday start date if no match is found in the static tables', () => {
      // "???" is malformed enough to make Intl.Locale throw, exercising our table-miss fallback.
      expect(getStartOfWeek('???')).toBe(0);
    });

    it('provides Sunday start date if no locale is provided', () => {
      expect(getStartOfWeek()).toBe(0);
    });

    it('returns Sunday for the ja locale, via native CLDR data', () => {
      expect(getStartOfWeek('ja')).toBe(0);
    });

    describe('when Intl.Locale.getWeekInfo is unavailable', () => {
      const OriginalLocale = Intl.Locale;

      beforeEach(() => {
        // @ts-expect-error -- simulating a browser without Intl.Locale support
        delete Intl.Locale;
      });

      afterEach(() => {
        // @ts-expect-error -- restoring Intl.Locale after simulating its absence above
        Intl.Locale = OriginalLocale;
      });

      it('falls back to the static table for a region mapping (zh-TW)', () => {
        expect(getStartOfWeek('zh-TW')).toBe(0);
      });

      it('falls back to the static table for a language mapping (ja)', () => {
        expect(getStartOfWeek('ja')).toBe(0);
      });

      it('still provides Sunday start date if no match is found', () => {
        expect(getStartOfWeek('invalid')).toBe(0);
      });
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

  describe('getMonthDateRange()', () => {
    it("returns the grid's first/last dates, padded out to full weeks starting on Sunday by default", () => {
      const { startDate, endDate } = getMonthDateRange(DATE);

      expect(startDate).toStrictEqual(new Date(2019, 0, 27));
      expect(endDate).toStrictEqual(new Date(2019, 2, 2, 23, 59, 59, 999));
    });

    it('honors an explicit weekStartsOn over the locale default', () => {
      const { startDate, endDate } = getMonthDateRange(DATE, 1, 'en-US');

      expect(startDate).toStrictEqual(new Date(2019, 0, 28));
      expect(endDate).toStrictEqual(new Date(2019, 2, 3, 23, 59, 59, 999));
    });

    it('falls back to the locale default when weekStartsOn is omitted', () => {
      const { startDate, endDate } = getMonthDateRange(DATE, undefined, 'en-GB');

      expect(startDate).toStrictEqual(new Date(2019, 0, 28));
      expect(endDate).toStrictEqual(new Date(2019, 2, 3, 23, 59, 59, 999));
    });
  });

  describe('formatMonthHeading()', () => {
    it('formats the month and year', () => {
      expect(formatMonthHeading(DATE, 'en-US')).toBe('February 2019');
    });

    it("names the grid's Gregorian month for a locale whose default calendar has different months", () => {
      expect(formatMonthHeading(DATE, 'fa')).toContain('فوریه');
      expect(formatMonthHeading(DATE, 'fa')).toContain('۲۰۱۹');
    });

    it("keeps the locale's own year for a calendar with the same months and days", () => {
      expect(formatMonthHeading(DATE, 'th')).toBe('กุมภาพันธ์ 2562');
    });
  });

  describe('formatFullDate()', () => {
    it("uses the locale's own long date format", () => {
      expect(formatFullDate(DATE, 'en-US')).toBe('February 5, 2019');
      expect(formatFullDate(DATE, 'de-DE')).toBe('5. Februar 2019');
    });

    it.each([
      ['ja', '2019年2月5日'],
      ['zh-CN', '2019年2月5日'],
      ['ko-KR', '2019년 2월 5일']
    ])("keeps the %s date's month and day markers", (locale, expected) => {
      expect(formatFullDate(DATE, locale)).toBe(expected);
    });

    it('uses the given numbering system, to match a visible day number', () => {
      expect(formatFullDate(DATE, 'ar-EG', 'latn')).toContain('5');
      expect(formatFullDate(DATE, 'ar-EG')).toContain('٥');
    });

    it("names the grid's Gregorian date for a locale whose default calendar has different months", () => {
      expect(formatFullDate(DATE, 'fa')).toContain('۵');
      expect(formatFullDate(DATE, 'fa')).toContain('فوریه');
      expect(formatFullDate(DATE, 'fa')).toContain('۲۰۱۹');
    });

    it("keeps the locale's own year for a calendar with the same months and days", () => {
      expect(formatFullDate(DATE, 'th')).toContain('2562');
    });
  });

  describe('formatWeekdayLabel()', () => {
    it('formats an abbreviated weekday name', () => {
      expect(formatWeekdayLabel(DATE, 'en-US')).toBe('Tue');
    });
  });

  describe('formatFullWeekdayLabel()', () => {
    it('formats a full weekday name', () => {
      expect(formatFullWeekdayLabel(DATE, 'en-US')).toBe('Tuesday');
    });
  });
});
