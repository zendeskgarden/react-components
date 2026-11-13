/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export interface IOption {
  value: string;
  label: string;
}

export const OPTIONS: IOption[] = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' }
];

/* Uneven label widths exercise the pill resizing as it moves */
export const LONG_OPTIONS: IOption[] = [
  { value: 'overview', label: 'Overview' },
  { value: 'history', label: 'Conversation history' },
  { value: 'customer', label: 'Customer' },
  { value: 'fields', label: 'Ticket fields' },
  { value: 'activity', label: 'Activity log and audit trail' }
];

/* More segments than most layouts can hold; a Select suits this many choices better */
export const MANY_OPTIONS: IOption[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
].map(label => ({ value: label.toLowerCase(), label }));
