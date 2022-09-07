/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * The following mappings use the Date offests:
 * 0 - Sunday
 * 1 - Monday
 * 6 - Saturday
 */

/** This type matches definition required by date-fns utilities */
export type DateFnsIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;

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
