/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const SHORT_DATE_PATTERN = /^(?<month>\d{1,2})\/(?<day>\d{1,2})\/(?<year>\d{4})$/u;

/** Must agree with `customParseShortDate`'s shape. */
export const formatShortDate = (date: Date) =>
  `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

export const customParseShortDate = (value = '') => {
  const match = SHORT_DATE_PATTERN.exec(value);

  if (!match?.groups) {
    return new Date(NaN);
  }

  const { month, day, year } = match.groups;
  const date = new Date(Number(year), Number(month) - 1, Number(day));

  /* `Date` rolls an impossible date over (e.g. 2/31 to 3/3), so reject any that doesn't round-trip. */
  return date.getFullYear() === Number(year) &&
    date.getMonth() === Number(month) - 1 &&
    date.getDate() === Number(day)
    ? date
    : new Date(NaN);
};
