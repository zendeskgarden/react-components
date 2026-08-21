/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const SHORT_DATE_PATTERN = /^(?<month>\d{1,2})\/(?<day>\d{1,2})\/(?<year>\d{4})$/u;

/**
 * formatDate and customParseDate are a matched pair for the M/D/YYYY format,
 * used to keep these stories' typed-input and displayed-value formats in sync.
 */
export const formatShortDate = (date: Date) =>
  `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

export const customParseShortDate = (value: string) => {
  const match = SHORT_DATE_PATTERN.exec(value);

  if (!match?.groups) {
    return new Date(NaN);
  }

  const { month, day, year } = match.groups;

  return new Date(Number(year), Number(month) - 1, Number(day));
};
