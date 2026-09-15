/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { isBefore } from 'date-fns/isBefore';
import { isAfter } from 'date-fns/isAfter';
import { isSameDay } from 'date-fns/isSameDay';
import { startOfMonth } from 'date-fns/startOfMonth';
import { endOfMonth } from 'date-fns/endOfMonth';
import { startOfWeek } from 'date-fns/startOfWeek';
import { endOfWeek } from 'date-fns/endOfWeek';
import { DateFnsIndex } from '../types';

/**
 * The following mappings use the Date offests:
 * 0 - Sunday
 * 1 - Monday
 * 6 - Saturday
 */

const REGION_MAPPINGS: Record<string, DateFnsIndex> = {
  'ar-DZ': 0,
  'ar-SA': 0,
  'en-CA': 0,
  'en-GB': 1,
  'en-US': 0,
  'fa-IR': 0,
  'fr-CH': 1,
  'nl-BE': 1,
  'pt-BR': 0,
  'zh-CN': 1,
  'zh-TW': 1
};

const LANGUAGE_MAPPINGS: Record<string, DateFnsIndex> = {
  af: 0,
  ar: 6,
  be: 1,
  bg: 1,
  bn: 0,
  ca: 1,
  cs: 1,
  da: 1,
  de: 1,
  el: 1,
  en: 0,
  eo: 1,
  es: 1,
  et: 1,
  fa: 0,
  fi: 1,
  fil: 0,
  fr: 1,
  gl: 1,
  he: 0,
  hr: 1,
  hu: 1,
  id: 1,
  is: 1,
  it: 1,
  ja: 1,
  ka: 1,
  ko: 0,
  lt: 1,
  lv: 1,
  mk: 1,
  ms: 1,
  nb: 1,
  nl: 1,
  nn: 1,
  pl: 1,
  pt: 0,
  ro: 1,
  ru: 1,
  sk: 1,
  sl: 1,
  sr: 1,
  sv: 1,
  th: 1,
  tr: 1,
  ug: 0,
  uk: 1,
  vi: 1,
  zh: 1
};

/**
 * Determine whether a date falls within an optional minValue/maxValue range (inclusive)
 */
export function isDateWithinRange(date: Date, minValue?: Date, maxValue?: Date): boolean {
  if (minValue !== undefined && isBefore(date, minValue) && !isSameDay(date, minValue)) {
    return false;
  }

  if (maxValue !== undefined && isAfter(date, maxValue) && !isSameDay(date, maxValue)) {
    return false;
  }

  return true;
}

/**
 * Return start day of week based on locale
 */
export function getStartOfWeek(locale?: string) {
  if (!locale) {
    return 0;
  }

  /** Check is explicit region is mapped */
  for (const region in REGION_MAPPINGS) {
    if (locale.startsWith(region)) {
      return REGION_MAPPINGS[region];
    }
  }

  /** Check is generic lanuage is mapped */
  for (const language in LANGUAGE_MAPPINGS) {
    if (locale.startsWith(language)) {
      return LANGUAGE_MAPPINGS[language];
    }
  }

  // Return Sunday as default
  return 0;
}

/**
 * The calendar grid's first and last dates for the month containing
 * `displayDate` - including the leading/trailing days of adjacent months
 * needed to fill out full weeks. Identical between `DatePicker` and
 * `DatePickerRange`'s single-month grids, since it depends only on the
 * displayed month, locale, and week-start preference.
 */
export function getMonthDateRange(displayDate: Date, weekStartsOn?: DateFnsIndex, locale?: string) {
  const preferredWeekStartsOn = weekStartsOn ?? getStartOfWeek(locale);
  const monthStartDate = startOfMonth(displayDate);
  const monthEndDate = endOfMonth(monthStartDate);

  return {
    startDate: startOfWeek(monthStartDate, { weekStartsOn: preferredWeekStartsOn }),
    endDate: endOfWeek(monthEndDate, { weekStartsOn: preferredWeekStartsOn })
  };
}

/**
 * The calendar heading's "Month Year" text, e.g. "January 2026".
 */
export function formatMonthHeading(date: Date, locale?: string): string {
  return new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(date);
}

/**
 * The abbreviated weekday column label, e.g. "Mon".
 */
export function formatWeekdayLabel(date: Date, locale?: string): string {
  return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date);
}

/**
 * The full weekday name, e.g. "Monday" - paired with `formatWeekdayLabel`'s
 * abbreviation as a visually-hidden full-name span for assistive tech.
 */
export function formatFullWeekdayLabel(date: Date, locale?: string): string {
  return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
}
