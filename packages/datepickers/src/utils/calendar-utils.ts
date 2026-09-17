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

/** `getWeekInfo` isn't in TypeScript's bundled `Intl.Locale` typings yet, despite being implemented in every currently-supported browser. */
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Intl {
    interface Locale {
      getWeekInfo?: () => { firstDay: number; weekend: number[]; minimalDays: number };
    }
  }
}

/**
 * The following mappings use the Date offests:
 * 0 - Sunday
 * 1 - Monday
 * 6 - Saturday
 */

const REGION_MAPPINGS: Record<string, DateFnsIndex> = {
  'ar-DZ': 6,
  'ar-SA': 0,
  'en-CA': 0,
  'en-GB': 1,
  'en-US': 0,
  'fa-IR': 6,
  'fr-CH': 1,
  'nl-BE': 1,
  'pt-BR': 0,
  'zh-CN': 1,
  'zh-TW': 0
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
  fa: 6,
  fi: 1,
  fil: 0,
  fr: 1,
  gl: 1,
  he: 0,
  hr: 1,
  hu: 1,
  id: 0,
  is: 0,
  it: 1,
  ja: 0,
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
  th: 0,
  tr: 1,
  ug: 1,
  uk: 1,
  vi: 1,
  zh: 1
};

/** Inclusive of minValue/maxValue. */
export function isDateWithinRange(date: Date, minValue?: Date, maxValue?: Date): boolean {
  if (minValue !== undefined && isBefore(date, minValue) && !isSameDay(date, minValue)) {
    return false;
  }

  if (maxValue !== undefined && isAfter(date, maxValue) && !isSameDay(date, maxValue)) {
    return false;
  }

  return true;
}

/** Prefers the browser's own CLDR week data over the static tables below, which can drift from real-world locale conventions over time. */
function getNativeStartOfWeek(locale: string): DateFnsIndex | undefined {
  if (typeof Intl.Locale !== 'function') {
    return undefined;
  }

  try {
    const localeInstance = new Intl.Locale(locale);

    if (typeof localeInstance.getWeekInfo !== 'function') {
      return undefined;
    }

    const { firstDay } = localeInstance.getWeekInfo();

    return (firstDay === 7 ? 0 : firstDay) as DateFnsIndex;
  } catch {
    return undefined;
  }
}

/**
 * Return start day of week based on locale
 */
export function getStartOfWeek(locale?: string): DateFnsIndex {
  if (!locale) {
    return 0;
  }

  const nativeStartOfWeek = getNativeStartOfWeek(locale);

  if (nativeStartOfWeek !== undefined) {
    return nativeStartOfWeek;
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

/** Shared by `DatePicker` and `DatePickerRange`'s single-month grids. */
export function getMonthDateRange(displayDate: Date, weekStartsOn?: DateFnsIndex, locale?: string) {
  const preferredWeekStartsOn = weekStartsOn ?? getStartOfWeek(locale);
  const monthStartDate = startOfMonth(displayDate);
  const monthEndDate = endOfMonth(monthStartDate);

  return {
    startDate: startOfWeek(monthStartDate, { weekStartsOn: preferredWeekStartsOn }),
    endDate: endOfWeek(monthEndDate, { weekStartsOn: preferredWeekStartsOn })
  };
}

/** e.g. "January 2026" */
export function formatMonthHeading(date: Date, locale?: string): string {
  return new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(date);
}

/** e.g. "Mon" */
export function formatWeekdayLabel(date: Date, locale?: string): string {
  return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date);
}

/** e.g. "Monday" - the visually-hidden full-name pair to `formatWeekdayLabel`'s abbreviation. */
export function formatFullWeekdayLabel(date: Date, locale?: string): string {
  return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
}

/**
 * e.g. "17 September 2026" - day-first (matching the visible day number, for speech-input users)
 * with a locale-correct month name; a day cell's visually-hidden description. Its weekday comes
 * separately from the grid's column header, so it isn't repeated here.
 */
export function formatFullDate(date: Date, locale?: string): string {
  const parts = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).formatToParts(date);

  const day = parts.find(part => part.type === 'day')?.value ?? '';
  const month = parts.find(part => part.type === 'month')?.value ?? '';
  const year = parts.find(part => part.type === 'year')?.value ?? '';

  return `${day} ${month} ${year}`;
}
