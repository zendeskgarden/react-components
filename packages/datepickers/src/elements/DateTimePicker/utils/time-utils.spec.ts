/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import {
  is12HourLocale,
  getDayPeriodLabels,
  generateHourOptions,
  generateMinuteOptions,
  formatTimeOption,
  to12Hour,
  to24Hour,
  getDisabledHours,
  getDisabledMinutes
} from './time-utils';

describe('time-utils', () => {
  describe('is12HourLocale', () => {
    it('returns true for en-US', () => {
      expect(is12HourLocale('en-US')).toBe(true);
    });

    it('returns false for de-DE', () => {
      expect(is12HourLocale('de-DE')).toBe(false);
    });

    it('returns false for en-GB', () => {
      expect(is12HourLocale('en-GB')).toBe(false);
    });

    it('returns true for ko', () => {
      expect(is12HourLocale('ko')).toBe(true);
    });
  });

  describe('getDayPeriodLabels', () => {
    it('returns AM/PM for en-US', () => {
      const labels = getDayPeriodLabels('en-US');

      expect(labels.am).toBe('AM');
      expect(labels.pm).toBe('PM');
    });

    it('returns locale-specific labels for ja', () => {
      const labels = getDayPeriodLabels('ja');

      expect(labels.am).toBeDefined();
      expect(labels.pm).toBeDefined();
      expect(labels.am).not.toBe(labels.pm);
    });
  });

  describe('generateHourOptions', () => {
    it('returns 1-12 for 12-hour mode', () => {
      const options = generateHourOptions(true);

      expect(options).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });

    it('returns 0-23 for 24-hour mode', () => {
      const options = generateHourOptions(false);

      expect(options).toHaveLength(24);
      expect(options[0]).toBe(0);
      expect(options[23]).toBe(23);
    });
  });

  describe('generateMinuteOptions', () => {
    it('returns 0-59 for step of 1', () => {
      const options = generateMinuteOptions(1);

      expect(options).toHaveLength(60);
      expect(options[0]).toBe(0);
      expect(options[59]).toBe(59);
    });

    it('returns correct intervals for step of 15', () => {
      const options = generateMinuteOptions(15);

      expect(options).toStrictEqual([0, 15, 30, 45]);
    });

    it('returns correct intervals for step of 30', () => {
      const options = generateMinuteOptions(30);

      expect(options).toStrictEqual([0, 30]);
    });
  });

  describe('formatTimeOption', () => {
    it('pads single digit with zero', () => {
      expect(formatTimeOption(5)).toBe('05');
    });

    it('does not pad double digits', () => {
      expect(formatTimeOption(15)).toBe('15');
    });

    it('formats zero correctly', () => {
      expect(formatTimeOption(0)).toBe('00');
    });
  });

  describe('to12Hour', () => {
    it('converts 0 to 12 AM', () => {
      expect(to12Hour(0)).toStrictEqual({ hour: 12, period: 'AM' });
    });

    it('converts 12 to 12 PM', () => {
      expect(to12Hour(12)).toStrictEqual({ hour: 12, period: 'PM' });
    });

    it('converts 13 to 1 PM', () => {
      expect(to12Hour(13)).toStrictEqual({ hour: 1, period: 'PM' });
    });

    it('converts 11 to 11 AM', () => {
      expect(to12Hour(11)).toStrictEqual({ hour: 11, period: 'AM' });
    });
  });

  describe('to24Hour', () => {
    it('converts 12 AM to 0', () => {
      expect(to24Hour(12, 'AM')).toBe(0);
    });

    it('converts 12 PM to 12', () => {
      expect(to24Hour(12, 'PM')).toBe(12);
    });

    it('converts 1 PM to 13', () => {
      expect(to24Hour(1, 'PM')).toBe(13);
    });

    it('converts 11 AM to 11', () => {
      expect(to24Hour(11, 'AM')).toBe(11);
    });
  });

  describe('getDisabledHours', () => {
    it('returns empty array when no constraints', () => {
      const result = getDisabledHours(new Date(2019, 1, 5, 10, 0), undefined, undefined);

      expect(result).toStrictEqual([]);
    });

    it('disables hours before minValue on same day', () => {
      const value = new Date(2019, 1, 5, 10, 0);
      const minValue = new Date(2019, 1, 5, 8, 0);
      const result = getDisabledHours(value, minValue, undefined);

      expect(result).toContain(0);
      expect(result).toContain(7);
      expect(result).not.toContain(8);
      expect(result).not.toContain(10);
    });

    it('disables hours after maxValue on same day', () => {
      const value = new Date(2019, 1, 5, 10, 0);
      const maxValue = new Date(2019, 1, 5, 16, 0);
      const result = getDisabledHours(value, undefined, maxValue);

      expect(result).not.toContain(16);
      expect(result).toContain(17);
      expect(result).toContain(23);
    });

    it('returns empty array when value is on a different day than constraints', () => {
      const value = new Date(2019, 1, 5, 10, 0);
      const minValue = new Date(2019, 1, 4, 8, 0);
      const result = getDisabledHours(value, minValue, undefined);

      expect(result).toStrictEqual([]);
    });
  });

  describe('getDisabledMinutes', () => {
    it('returns empty array when no constraints', () => {
      const result = getDisabledMinutes(new Date(2019, 1, 5, 10, 0), 10, undefined, undefined);

      expect(result).toStrictEqual([]);
    });

    it('disables minutes before minValue on same day and hour', () => {
      const value = new Date(2019, 1, 5, 10, 30);
      const minValue = new Date(2019, 1, 5, 10, 15);
      const result = getDisabledMinutes(value, 10, minValue, undefined);

      expect(result).toContain(0);
      expect(result).toContain(14);
      expect(result).not.toContain(15);
      expect(result).not.toContain(30);
    });

    it('disables minutes after maxValue on same day and hour', () => {
      const value = new Date(2019, 1, 5, 10, 30);
      const maxValue = new Date(2019, 1, 5, 10, 45);
      const result = getDisabledMinutes(value, 10, undefined, maxValue);

      expect(result).not.toContain(45);
      expect(result).toContain(46);
      expect(result).toContain(59);
    });

    it('returns empty array when selected hour differs from constraint hour', () => {
      const value = new Date(2019, 1, 5, 10, 30);
      const minValue = new Date(2019, 1, 5, 8, 15);
      const result = getDisabledMinutes(value, 10, minValue, undefined);

      expect(result).toStrictEqual([]);
    });
  });
});
