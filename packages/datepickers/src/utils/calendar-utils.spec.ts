/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { addDays } from 'date-fns/addDays';
import { subDays } from 'date-fns/subDays';
import {
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
      // Intl.Locale accepts any syntactically valid language subtag, even an
      // unregistered one, and getWeekInfo() resolves it against the CLDR
      // root locale (Monday) rather than throwing - so this never reaches
      // our own table-miss fallback below.
      expect(getStartOfWeek('invalid')).toBe(1);
    });

    it('provides Sunday start date if no match is found in the static tables', () => {
      // A genuinely malformed locale string makes Intl.Locale throw, which
      // is what actually exercises our own table-miss fallback.
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
