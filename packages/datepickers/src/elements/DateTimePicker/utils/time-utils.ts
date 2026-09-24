/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { isSameDay } from 'date-fns/isSameDay';

/**
 * Detect whether a locale uses 12-hour time format
 */
export function is12HourLocale(locale: string): boolean {
  const parts = new Intl.DateTimeFormat(locale, { hour: 'numeric' }).formatToParts(
    new Date(2020, 0, 1, 13)
  );

  return parts.some(part => part.type === 'dayPeriod');
}

/**
 * Get locale-aware AM/PM labels
 */
export function getDayPeriodLabels(locale: string): { am: string; pm: string } {
  const amParts = new Intl.DateTimeFormat(locale, { hour: 'numeric', hour12: true }).formatToParts(
    new Date(2020, 0, 1, 8)
  );
  const pmParts = new Intl.DateTimeFormat(locale, { hour: 'numeric', hour12: true }).formatToParts(
    new Date(2020, 0, 1, 20)
  );

  const am = amParts.find(p => p.type === 'dayPeriod')?.value ?? 'AM';
  const pm = pmParts.find(p => p.type === 'dayPeriod')?.value ?? 'PM';

  return { am, pm };
}

/**
 * Generate hour options based on 12h/24h mode
 */
export function generateHourOptions(is12Hour: boolean): number[] {
  if (is12Hour) {
    return Array.from({ length: 12 }, (_, i) => i + 1);
  }

  return Array.from({ length: 24 }, (_, i) => i);
}

/**
 * Generate minute options based on step interval
 */
export function generateMinuteOptions(step: number): number[] {
  const options: number[] = [];

  for (let i = 0; i < 60; i += step) {
    options.push(i);
  }

  return options;
}

/**
 * Format a time number with leading zero
 */
export function formatTimeOption(value: number): string {
  return value.toString().padStart(2, '0');
}

/**
 * Convert 12-hour value + period to 24-hour
 */
export function to24Hour(hour12: number, period: 'AM' | 'PM'): number {
  if (period === 'AM') {
    return hour12 === 12 ? 0 : hour12;
  }

  return hour12 === 12 ? 12 : hour12 + 12;
}

/**
 * Convert 24-hour value to 12-hour + period
 */
export function to12Hour(hour24: number): { hour: number; period: 'AM' | 'PM' } {
  const period: 'AM' | 'PM' = hour24 >= 12 ? 'PM' : 'AM';
  let hour = hour24 % 12;

  if (hour === 0) {
    hour = 12;
  }

  return { hour, period };
}

/**
 * Get disabled hours based on min/max constraints for a given date
 */
export function getDisabledHours(
  selectedDate: Date | undefined,
  minValue: Date | undefined,
  maxValue: Date | undefined
): number[] {
  const disabled: number[] = [];

  if (!selectedDate) return disabled;

  if (minValue && isSameDay(selectedDate, minValue)) {
    const minHour = minValue.getHours();

    for (let i = 0; i < minHour; i++) {
      disabled.push(i);
    }
  }

  if (maxValue && isSameDay(selectedDate, maxValue)) {
    const maxHour = maxValue.getHours();

    for (let i = maxHour + 1; i < 24; i++) {
      disabled.push(i);
    }
  }

  return disabled;
}

/**
 * Get disabled minutes based on min/max constraints for a given date and hour
 */
export function getDisabledMinutes(
  selectedDate: Date | undefined,
  selectedHour: number,
  minValue: Date | undefined,
  maxValue: Date | undefined
): number[] {
  const disabled: number[] = [];

  if (!selectedDate) return disabled;

  if (minValue && isSameDay(selectedDate, minValue) && selectedHour === minValue.getHours()) {
    const minMinute = minValue.getMinutes();

    for (let i = 0; i < minMinute; i++) {
      disabled.push(i);
    }
  }

  if (maxValue && isSameDay(selectedDate, maxValue) && selectedHour === maxValue.getHours()) {
    const maxMinute = maxValue.getMinutes();

    for (let i = maxMinute + 1; i < 60; i++) {
      disabled.push(i);
    }
  }

  return disabled;
}
