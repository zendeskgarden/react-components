/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { addMonths } from 'date-fns/addMonths';
import { isBefore } from 'date-fns/isBefore';
import { isSameDay } from 'date-fns/isSameDay';
import { isValid } from 'date-fns/isValid';
import { parse } from 'date-fns/parse';
import { subMonths } from 'date-fns/subMonths';

import { IDateTimePickerProps } from '../../../types';

export interface IDateTimePickerState {
  isOpen: boolean;
  previewDate: Date;
  inputValue: string;
  selectedHour: number;
  selectedMinute: number;
}

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
  let tryParseDate = parse(inputValue, 'Pp', new Date());

  if (isValid(tryParseDate) && !isBefore(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }

  tryParseDate = parse(inputValue, 'PPp', new Date());

  if (isValid(tryParseDate) && !isBefore(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }

  tryParseDate = parse(inputValue, 'PPPp', new Date());

  if (isValid(tryParseDate) && !isBefore(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }

  return new Date(NaN);
}

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
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  }).format(date);
}

export type DateTimePickerAction =
  | { type: 'OPEN' }
  | { type: 'CLOSE' }
  | { type: 'PREVIEW_NEXT_MONTH' }
  | { type: 'PREVIEW_PREVIOUS_MONTH' }
  | { type: 'MANUALLY_UPDATE_INPUT'; value: string }
  | { type: 'CONTROLLED_VALUE_CHANGE'; value?: Date }
  | { type: 'CONTROLLED_LOCALE_CHANGE' }
  | { type: 'SELECT_DATE'; value: Date }
  | { type: 'SELECT_HOUR'; value: number }
  | { type: 'SELECT_MINUTE'; value: number }
  | { type: 'SELECT_PERIOD'; value: 'AM' | 'PM' };

export const dateTimepickerReducer =
  ({
    value,
    formatDate,
    locale,
    customParseDate,
    onChange
  }: {
    value?: Date;
    formatDate?: (date: Date) => string;
    locale: string;
    customParseDate?: (inputValue: string) => Date;
    onChange?: (date: Date) => void;
  }) =>
  (state: IDateTimePickerState, action: DateTimePickerAction): IDateTimePickerState => {
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

        if (onChange && currentDate && isValid(currentDate)) {
          const isDifferent = !value || currentDate.getTime() !== value.getTime();

          if (isDifferent) {
            onChange(currentDate);
          }
        }

        return { ...state, isOpen: true, inputValue };
      }
      case 'CONTROLLED_VALUE_CHANGE': {
        const previewDate = action.value || new Date();
        const inputValue = formatInputValue({ date: action.value, locale, formatDate });
        const selectedHour = action.value ? action.value.getHours() : 0;
        const selectedMinute = action.value ? action.value.getMinutes() : 0;

        return { ...state, previewDate, inputValue, selectedHour, selectedMinute };
      }
      case 'CONTROLLED_LOCALE_CHANGE': {
        const inputValue = formatInputValue({ date: value, locale, formatDate });

        return { ...state, inputValue };
      }
      case 'SELECT_DATE': {
        const newDate = new Date(action.value);

        newDate.setHours(state.selectedHour, state.selectedMinute, 0, 0);

        const inputValue = formatInputValue({ date: newDate, locale, formatDate });

        if (
          onChange &&
          isValid(newDate) &&
          (!value ||
            !isSameDay(value, action.value) ||
            value.getHours() !== state.selectedHour ||
            value.getMinutes() !== state.selectedMinute)
        ) {
          onChange(newDate);
        }

        return { ...state, inputValue };
      }
      case 'SELECT_HOUR': {
        const selectedHour = action.value;
        const baseDate = value ? new Date(value) : new Date();

        baseDate.setHours(selectedHour, state.selectedMinute, 0, 0);

        const inputValue = formatInputValue({ date: baseDate, locale, formatDate });

        if (onChange && isValid(baseDate)) {
          onChange(baseDate);
        }

        return { ...state, selectedHour, inputValue };
      }
      case 'SELECT_MINUTE': {
        const selectedMinute = action.value;
        const baseDate = value ? new Date(value) : new Date();

        baseDate.setHours(state.selectedHour, selectedMinute, 0, 0);

        const inputValue = formatInputValue({ date: baseDate, locale, formatDate });

        if (onChange && isValid(baseDate)) {
          onChange(baseDate);
        }

        return { ...state, selectedMinute, inputValue };
      }
      case 'SELECT_PERIOD': {
        let selectedHour = state.selectedHour;

        if (action.value === 'AM' && selectedHour >= 12) {
          selectedHour -= 12;
        } else if (action.value === 'PM' && selectedHour < 12) {
          selectedHour += 12;
        }

        const baseDate = value ? new Date(value) : new Date();

        baseDate.setHours(selectedHour, state.selectedMinute, 0, 0);

        const inputValue = formatInputValue({ date: baseDate, locale, formatDate });

        if (onChange && isValid(baseDate)) {
          onChange(baseDate);
        }

        return { ...state, selectedHour, inputValue };
      }
      /* istanbul ignore next */
      default:
        throw new Error();
    }
  };

export function retrieveInitialState(initialProps: IDateTimePickerProps): IDateTimePickerState {
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
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
      }).format(previewDate);
    }
  }

  const selectedHour = initialProps.value ? initialProps.value.getHours() : 0;
  const selectedMinute = initialProps.value ? initialProps.value.getMinutes() : 0;

  return {
    isOpen: false,
    previewDate,
    inputValue,
    selectedHour,
    selectedMinute
  };
}
