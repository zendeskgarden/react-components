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

export interface IDatePickerState {
  isOpen: boolean;
  previewDate: Date;
  inputValue: string;
}

/**
 * Parse string input value using current locale and date formats
 */
function parseInputValue({
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
function formatInputValue({
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
    customParseDate,
    onChange
  }: {
    value?: Date;
    formatDate?: (date: Date) => string;
    locale: any;
    customParseDate?: (inputValue: string) => Date;
    onChange?: (date: Date) => void;
  }) =>
  (state: IDatePickerState, action: DatePickerAction): IDatePickerState => {
    switch (action.type) {
      case 'OPEN':
        return { ...state, isOpen: true, previewDate: value || new Date() };
      case 'CLOSE': {
        const inputValue = formatInputValue({ date: value, locale, formatDate });

        return { ...state, isOpen: false, inputValue };
      }
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
        const currentDate = parseInputValue({ inputValue, customParseDate });

        if (onChange && currentDate && isValid(currentDate) && !isSameDay(value!, currentDate)) {
          onChange(currentDate);
        }

        return { ...state, isOpen: true, inputValue };
      }
      case 'CONTROLLED_VALUE_CHANGE': {
        const previewDate = action.value || new Date();
        const inputValue = formatInputValue({ date: action.value, locale, formatDate });

        return { ...state, previewDate, inputValue };
      }
      case 'CONTROLLED_LOCALE_CHANGE': {
        const inputValue = formatInputValue({ date: value, locale, formatDate });

        return { ...state, inputValue };
      }
      case 'SELECT_DATE': {
        const inputValue = formatInputValue({ date: action.value, locale, formatDate });

        if (onChange && action.value && isValid(action.value) && !isSameDay(value!, action.value)) {
          onChange(action.value);
        }

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
