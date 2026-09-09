/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { addMonths } from 'date-fns/addMonths';
import { subMonths } from 'date-fns/subMonths';
import { addYears } from 'date-fns/addYears';
import { subYears } from 'date-fns/subYears';
import { isBefore } from 'date-fns/isBefore';
import { isValid } from 'date-fns/isValid';
import { isSameDay } from 'date-fns/isSameDay';
import { isSameMonth } from 'date-fns/isSameMonth';
import { endOfMonth } from 'date-fns/endOfMonth';
import { parse } from 'date-fns/parse';
import { startOfMonth } from 'date-fns/startOfMonth';
import { compareAsc } from 'date-fns/compareAsc';
import { isAfter } from 'date-fns/isAfter';
import { IDatePickerRangeProps, IDatePickerRangeValueSettledResult } from '../../../types';
import { isDateWithinRange } from '../../../utils/calendar-utils';

export interface IDatePickerRangeState {
  previewDate: Date;
  focusedDate: Date;
  hoverDate?: Date;
  isStartFocused: boolean;
  isEndFocused: boolean;
  startInputValue?: string;
  endInputValue?: string;
}

/**
 * Format date value to a localized string
 */
export function formatValue({
  value,
  locale,
  formatDate
}: {
  value?: Date;
  formatDate?: any;
  locale?: string;
}) {
  let stringValue = '';

  if (value !== undefined && isValid(value)) {
    if (formatDate) {
      stringValue = formatDate(value);
    } else {
      stringValue = new Intl.DateTimeFormat(locale, {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }).format(value);
    }
  }

  return stringValue;
}

/**
 * Parse string input value using current locale and date formats
 */
export function parseInputValue({ inputValue }: { inputValue?: string }): Date {
  const MINIMUM_DATE = new Date(1001, 0, 0);
  let tryParseDate = parse(inputValue || '', 'P', new Date());

  if (isValid(tryParseDate) && !isBefore(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }

  tryParseDate = parse(inputValue || '', 'PP', new Date());

  if (isValid(tryParseDate) && !isBefore(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }

  tryParseDate = parse(inputValue || '', 'PPP', new Date());

  if (isValid(tryParseDate) && !isBefore(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }

  return new Date(NaN);
}

/**
 * Determine whether a typed input value currently represents a valid,
 * in-range, correctly-ordered date, for reporting via `onValueSettled`.
 */
export function resolveSettledValue({
  inputValue,
  required,
  minValue,
  maxValue,
  notBefore,
  notAfter,
  customParseDate
}: {
  inputValue?: string;
  required?: boolean;
  minValue?: Date;
  maxValue?: Date;
  notBefore?: Date;
  notAfter?: Date;
  customParseDate?: (inputValue?: string) => Date;
}): Omit<IDatePickerRangeValueSettledResult, 'field'> {
  if (!inputValue) {
    const valid = !required;

    return {
      date: undefined,
      inputValue: inputValue || '',
      valid,
      reason: valid ? undefined : 'required'
    };
  }

  const date = customParseDate ? customParseDate(inputValue) : parseInputValue({ inputValue });

  if (!isValid(date)) {
    return { date: undefined, inputValue, valid: false, reason: 'malformed' };
  }

  if (!isDateWithinRange(date, minValue, maxValue)) {
    return { date: undefined, inputValue, valid: false, reason: 'out-of-range' };
  }

  if ((notBefore && isBefore(date, notBefore)) || (notAfter && isAfter(date, notAfter))) {
    return { date: undefined, inputValue, valid: false, reason: 'out-of-order' };
  }

  return { date, inputValue, valid: true };
}

export type DatePickerRangeAction =
  | { type: 'HOVER_DATE'; value?: Date }
  | { type: 'CLICK_DATE'; value: Date }
  | { type: 'PREVIEW_NEXT_MONTH' }
  | { type: 'PREVIEW_PREVIOUS_MONTH' }
  | { type: 'PREVIEW_NEXT_YEAR' }
  | { type: 'PREVIEW_PREVIOUS_YEAR' }
  | { type: 'START_INPUT_ONCHANGE'; value: string }
  | { type: 'END_INPUT_ONCHANGE'; value: string }
  | { type: 'START_BLUR' }
  | { type: 'END_BLUR' }
  | { type: 'START_FOCUS' }
  | { type: 'END_FOCUS' }
  | { type: 'CONTROLLED_START_VALUE_CHANGE'; value?: Date }
  | { type: 'CONTROLLED_END_VALUE_CHANGE'; value?: Date }
  | { type: 'FOCUS_DATE'; value: Date };

export const datepickerRangeReducer =
  ({
    startValue,
    endValue,
    locale,
    formatDate
  }: {
    startValue?: Date;
    endValue?: Date;
    locale?: string;
    formatDate?: any;
  }) =>
  (state: IDatePickerRangeState, action: DatePickerRangeAction): IDatePickerRangeState => {
    switch (action.type) {
      case 'START_FOCUS': {
        let previewDate = state.previewDate;

        if (startValue) {
          if (
            compareAsc(startValue, startOfMonth(state.previewDate)) === 1 &&
            compareAsc(startValue, addMonths(endOfMonth(state.previewDate), 1)) === -1
          ) {
            previewDate = state.previewDate;
          } else {
            previewDate = startOfMonth(startValue);
          }
        }

        return { ...state, previewDate, isStartFocused: true, isEndFocused: false };
      }
      case 'END_FOCUS': {
        let previewDate = state.previewDate;

        if (endValue) {
          if (
            compareAsc(endValue, startOfMonth(state.previewDate)) === 1 &&
            compareAsc(endValue, addMonths(endOfMonth(state.previewDate), 1)) === -1
          ) {
            previewDate = state.previewDate;
          } else {
            previewDate = startOfMonth(endValue);
          }
        }

        return { ...state, previewDate, isEndFocused: true, isStartFocused: false };
      }
      case 'START_BLUR':
        return { ...state, isStartFocused: false };
      case 'END_BLUR':
        return { ...state, isEndFocused: false };
      case 'CONTROLLED_START_VALUE_CHANGE': {
        const startInputValue = formatValue({ value: action.value, locale, formatDate });

        let previewDate = state.previewDate;

        if (action.value) {
          if (
            compareAsc(action.value, startOfMonth(state.previewDate)) === 1 &&
            compareAsc(action.value, addMonths(endOfMonth(state.previewDate), 1)) === -1
          ) {
            previewDate = state.previewDate;
          } else {
            previewDate = startOfMonth(action.value);
          }
        }

        return {
          ...state,
          startInputValue,
          hoverDate: undefined,
          previewDate
        };
      }
      case 'CONTROLLED_END_VALUE_CHANGE': {
        const endInputValue = formatValue({ value: action.value, locale, formatDate });

        let previewDate = state.previewDate;

        if (action.value) {
          if (
            compareAsc(action.value, startOfMonth(state.previewDate)) === 1 &&
            compareAsc(action.value, addMonths(endOfMonth(state.previewDate), 1)) === -1
          ) {
            previewDate = state.previewDate;
          } else {
            previewDate = startOfMonth(action.value);
          }
        }

        return {
          ...state,
          endInputValue,
          hoverDate: undefined,
          previewDate
        };
      }
      case 'CLICK_DATE':
        if (state.isStartFocused) {
          if (
            endValue !== undefined &&
            (isBefore(action.value, endValue) || isSameDay(action.value, endValue))
          ) {
            return {
              ...state,
              isStartFocused: false,
              isEndFocused: false,
              startInputValue: formatValue({ value: action.value })
            };
          }

          return {
            ...state,
            isStartFocused: false,
            isEndFocused: false,
            startInputValue: formatValue({ value: action.value }),
            endInputValue: undefined
          };
        } else if (state.isEndFocused) {
          if (
            startValue !== undefined &&
            (isAfter(action.value, startValue) || isSameDay(action.value, startValue))
          ) {
            return {
              ...state,
              isStartFocused: false,
              isEndFocused: false,
              endInputValue: formatValue({ value: action.value })
            };
          }

          return {
            ...state,
            isStartFocused: false,
            isEndFocused: false,
            startInputValue: formatValue({ value: action.value })
          };
        } else if (startValue === undefined) {
          return {
            ...state,
            startInputValue: formatValue({ value: action.value })
          };
        } else if (endValue === undefined) {
          if (isBefore(action.value, startValue)) {
            return {
              ...state,
              startInputValue: formatValue({ value: action.value }),
              endInputValue: undefined
            };
          }

          return { ...state, endInputValue: formatValue({ value: action.value }) };
        }

        return state;
      case 'START_INPUT_ONCHANGE': {
        return { ...state, startInputValue: action.value };
      }
      case 'END_INPUT_ONCHANGE': {
        return { ...state, endInputValue: action.value };
      }
      case 'HOVER_DATE':
        return { ...state, hoverDate: action.value };
      case 'FOCUS_DATE': {
        const focusedDate = action.value;
        const secondMonthDate = addMonths(state.previewDate, 1);

        let previewDate = state.previewDate;

        if (
          !isSameMonth(focusedDate, state.previewDate) &&
          !isSameMonth(focusedDate, secondMonthDate)
        ) {
          previewDate = isBefore(focusedDate, state.previewDate)
            ? startOfMonth(focusedDate)
            : subMonths(startOfMonth(focusedDate), 1);
        }

        return { ...state, focusedDate, previewDate, hoverDate: focusedDate };
      }
      case 'PREVIEW_NEXT_MONTH': {
        const previewDate = addMonths(state.previewDate, 1);
        const focusedDate = addMonths(state.focusedDate, 1);

        return { ...state, previewDate, focusedDate, hoverDate: undefined };
      }
      case 'PREVIEW_PREVIOUS_MONTH': {
        const previewDate = subMonths(state.previewDate, 1);
        const focusedDate = subMonths(state.focusedDate, 1);

        return { ...state, previewDate, focusedDate, hoverDate: undefined };
      }
      case 'PREVIEW_NEXT_YEAR': {
        const previewDate = addYears(state.previewDate, 1);
        const focusedDate = addYears(state.focusedDate, 1);

        return { ...state, previewDate, focusedDate, hoverDate: undefined };
      }
      case 'PREVIEW_PREVIOUS_YEAR': {
        const previewDate = subYears(state.previewDate, 1);
        const focusedDate = subYears(state.focusedDate, 1);

        return { ...state, previewDate, focusedDate, hoverDate: undefined };
      }
      /* istanbul ignore next */
      default:
        throw new Error();
    }
  };

/**
 * Retrieve initial state for the DatePicker reducer
 */
export function retrieveInitialState(initialProps: IDatePickerRangeProps): IDatePickerRangeState {
  let previewDate = initialProps.startValue!;

  if (previewDate === undefined || !isValid(previewDate)) {
    previewDate = new Date();
  }

  const startInputValue = formatValue({
    value: initialProps.startValue,
    locale: initialProps.locale,
    formatDate: initialProps.formatDate
  });

  const endInputValue = formatValue({
    value: initialProps.endValue,
    locale: initialProps.locale,
    formatDate: initialProps.formatDate
  });

  return {
    previewDate,
    focusedDate: previewDate,
    startInputValue,
    endInputValue,
    isStartFocused: false,
    isEndFocused: false
  };
}
