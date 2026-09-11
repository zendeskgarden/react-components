/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { isValid } from 'date-fns/isValid';
import { parse } from 'date-fns/parse';
import { isBefore } from 'date-fns/isBefore';
import { isSameDay } from 'date-fns/isSameDay';
import { isSameMonth } from 'date-fns/isSameMonth';
import { IDatePickerProps, IDatePickerValueSettledResult } from '../../../types';
import { isDateWithinRange } from '../../../utils/calendar-utils';

export interface IDatePickerState {
  isOpen: boolean;
  previewDate: Date;
  focusedDate: Date;
  inputValue: string;
}

/**
 * Parse string input value using current locale and date formats
 */
export function parseInputValue({
  inputValue,
  customParseDate
}: {
  inputValue: string;
  customParseDate?: (value: string) => Date;
}): Date {
  if (customParseDate) {
    return customParseDate(inputValue);
  }

  const MINIMUM_DATE = new Date(1001, 0, 0);
  let tryParseDate = parse(inputValue, 'P', new Date());

  if (isValid(tryParseDate) && !isBefore(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }

  tryParseDate = parse(inputValue, 'PP', new Date());

  if (isValid(tryParseDate) && !isBefore(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }

  tryParseDate = parse(inputValue, 'PPP', new Date());

  if (isValid(tryParseDate) && !isBefore(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }

  return new Date(NaN);
}

/**
 * Format inputValue with the correct locale
 */
export function formatInputValue({
  date,
  locale,
  formatDate
}: {
  date?: Date;
  locale: string;
  formatDate?: (d: Date) => string;
}) {
  if (!date) {
    return '';
  }

  if (formatDate) {
    return formatDate(date);
  }

  return new Intl.DateTimeFormat(locale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

/**
 * Determine whether a typed input value currently represents a valid,
 * in-range date, for reporting via `onValueSettled`.
 */
export function resolveSettledValue({
  inputValue,
  required,
  minValue,
  maxValue,
  customParseDate
}: {
  inputValue: string;
  required?: boolean;
  minValue?: Date;
  maxValue?: Date;
  customParseDate?: (value: string) => Date;
}): IDatePickerValueSettledResult {
  if (inputValue === '') {
    const valid = !required;

    return { date: undefined, inputValue, valid, reason: valid ? undefined : 'required' };
  }

  const date = parseInputValue({ inputValue, customParseDate });

  if (!isValid(date)) {
    return { date: undefined, inputValue, valid: false, reason: 'malformed' };
  }

  if (!isDateWithinRange(date, minValue, maxValue)) {
    return { date: undefined, inputValue, valid: false, reason: 'out-of-range' };
  }

  return { date, inputValue, valid: true };
}

export type DatePickerAction =
  | { type: 'OPEN'; value?: Date }
  | { type: 'CLOSE' }
  | { type: 'MANUALLY_UPDATE_INPUT'; value: string }
  | {
      type: 'CONTROLLED_VALUE_CHANGE';
      value?: Date;
      locale: string;
      formatDate?: (date: Date) => string;
      customParseDate?: (inputValue: string) => Date;
    }
  | {
      type: 'CONTROLLED_LOCALE_CHANGE';
      value?: Date;
      locale: string;
      formatDate?: (date: Date) => string;
    }
  | {
      type: 'SELECT_DATE';
      value: Date;
      locale: string;
      formatDate?: (date: Date) => string;
    }
  | { type: 'FOCUS_DATE'; value: Date };

export const datepickerReducer = (
  state: IDatePickerState,
  action: DatePickerAction
): IDatePickerState => {
  switch (action.type) {
    case 'OPEN': {
      const openDate = action.value || new Date();

      return { ...state, isOpen: true, previewDate: openDate, focusedDate: openDate };
    }
    case 'CLOSE':
      return { ...state, isOpen: false };
    case 'MANUALLY_UPDATE_INPUT': {
      const inputValue = action.value;

      return { ...state, inputValue };
    }
    case 'CONTROLLED_VALUE_CHANGE': {
      const { value, locale, formatDate, customParseDate } = action;
      const previewDate = value || new Date();

      const currentTypedDate = parseInputValue({ inputValue: state.inputValue, customParseDate });
      const matchesCurrentInput =
        value && isValid(currentTypedDate) && isSameDay(currentTypedDate, value);
      const inputValue = matchesCurrentInput
        ? state.inputValue
        : formatInputValue({ date: value, locale, formatDate });

      return { ...state, previewDate, inputValue };
    }
    case 'CONTROLLED_LOCALE_CHANGE': {
      const inputValue = formatInputValue({
        date: action.value,
        locale: action.locale,
        formatDate: action.formatDate
      });

      return { ...state, inputValue };
    }
    case 'SELECT_DATE': {
      const inputValue = formatInputValue({
        date: action.value,
        locale: action.locale,
        formatDate: action.formatDate
      });

      return { ...state, isOpen: false, inputValue };
    }
    case 'FOCUS_DATE': {
      const focusedDate = action.value;
      const previewDate = isSameMonth(focusedDate, state.previewDate)
        ? state.previewDate
        : focusedDate;

      return { ...state, focusedDate, previewDate };
    }
    /* istanbul ignore next */
    default:
      throw new Error();
  }
};

/**
 * Retrieve initial state for the DatePicker reducer
 */
export function retrieveInitialState(initialProps: IDatePickerProps): IDatePickerState {
  let previewDate = initialProps.value;

  if (previewDate === undefined || !isValid(previewDate)) {
    previewDate = new Date();
  }

  let inputValue = '';

  if (initialProps.value !== undefined) {
    if (initialProps.formatDate) {
      inputValue = initialProps.formatDate(initialProps.value);
    } else {
      inputValue = new Intl.DateTimeFormat(initialProps.locale, {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }).format(previewDate);
    }
  }

  return {
    isOpen: false,
    previewDate,
    focusedDate: previewDate,
    inputValue
  };
}
