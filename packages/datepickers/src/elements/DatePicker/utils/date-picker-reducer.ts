/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { addMonths } from 'date-fns/addMonths';
import { subMonths } from 'date-fns/subMonths';
import { isValid } from 'date-fns/isValid';
import { parse } from 'date-fns/parse';
import { isBefore } from 'date-fns/isBefore';
import { isSameDay } from 'date-fns/isSameDay';
import { IDatePickerProps } from '../../../types';
import { isDateWithinRange } from '../../../utils/calendar-utils';

export interface IDatePickerState {
  isOpen: boolean;
  previewDate: Date;
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
}): { date?: Date; inputValue: string; valid: boolean } {
  if (inputValue === '') {
    return { date: undefined, inputValue, valid: !required };
  }

  const date = parseInputValue({ inputValue, customParseDate });
  const valid = isValid(date) && isDateWithinRange(date, minValue, maxValue);

  return { date: valid ? date : undefined, inputValue, valid };
}

export type DatePickerAction =
  | { type: 'OPEN' }
  | { type: 'CLOSE' }
  | { type: 'PREVIEW_NEXT_MONTH' }
  | { type: 'PREVIEW_PREVIOUS_MONTH' }
  | { type: 'MANUALLY_UPDATE_INPUT'; value: string }
  | { type: 'CONTROLLED_VALUE_CHANGE'; value?: Date }
  | { type: 'CONTROLLED_LOCALE_CHANGE' }
  | { type: 'SELECT_DATE'; value: Date };

export const datepickerReducer =
  ({
    value,
    formatDate,
    locale,
    customParseDate
  }: {
    value?: Date;
    formatDate?: (date: Date) => string;
    locale: any;
    customParseDate?: (inputValue: string) => Date;
  }) =>
  (state: IDatePickerState, action: DatePickerAction): IDatePickerState => {
    switch (action.type) {
      case 'OPEN':
        return { ...state, isOpen: true, previewDate: value || new Date() };
      case 'CLOSE':
        return { ...state, isOpen: false };
      case 'PREVIEW_NEXT_MONTH': {
        const previewDate = addMonths(state.previewDate, 1);

        return { ...state, previewDate };
      }
      case 'PREVIEW_PREVIOUS_MONTH': {
        const previewDate = subMonths(state.previewDate, 1);

        return { ...state, previewDate };
      }
      case 'MANUALLY_UPDATE_INPUT': {
        const inputValue = action.value;

        return { ...state, inputValue };
      }
      case 'CONTROLLED_VALUE_CHANGE': {
        const previewDate = action.value || new Date();

        const currentTypedDate = parseInputValue({ inputValue: state.inputValue, customParseDate });
        const matchesCurrentInput =
          action.value && isValid(currentTypedDate) && isSameDay(currentTypedDate, action.value);
        const inputValue = matchesCurrentInput
          ? state.inputValue
          : formatInputValue({ date: action.value, locale, formatDate });

        return { ...state, previewDate, inputValue };
      }
      case 'CONTROLLED_LOCALE_CHANGE': {
        const inputValue = formatInputValue({ date: value, locale, formatDate });

        return { ...state, inputValue };
      }
      case 'SELECT_DATE': {
        const inputValue = formatInputValue({ date: action.value, locale, formatDate });

        return { ...state, isOpen: false, inputValue };
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
    inputValue
  };
}
