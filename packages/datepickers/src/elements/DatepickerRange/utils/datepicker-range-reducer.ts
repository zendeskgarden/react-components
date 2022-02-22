/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import addMonths from 'date-fns/addMonths';
import subMonths from 'date-fns/subMonths';
import isBefore from 'date-fns/isBefore';
import isValid from 'date-fns/isValid';
import isSameDay from 'date-fns/isSameDay';
import endOfMonth from 'date-fns/endOfMonth';
import parse from 'date-fns/parse';
import startOfMonth from 'date-fns/startOfMonth';
import compareAsc from 'date-fns/compareAsc';
import isAfter from 'date-fns/isAfter';
import { IDatepickerRangeProps } from '../DatepickerRange';

export interface IDatepickerRangeState {
  previewDate: Date;
  hoverDate?: Date;
  isStartFocused: boolean;
  isEndFocused: boolean;
  startInputValue?: string;
  endInputValue?: string;
}

/**
 * Format date value to a localized string
 */
function formatValue({
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
function parseInputValue({ inputValue }: { inputValue?: string }): Date {
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

export type DatepickerRangeAction =
  | { type: 'HOVER_DATE'; value?: Date }
  | { type: 'CLICK_DATE'; value: Date }
  | { type: 'PREVIEW_NEXT_MONTH' }
  | { type: 'PREVIEW_PREVIOUS_MONTH' }
  | { type: 'START_INPUT_ONCHANGE'; value: string }
  | { type: 'END_INPUT_ONCHANGE'; value: string }
  | { type: 'START_BLUR' }
  | { type: 'END_BLUR' }
  | { type: 'START_FOCUS' }
  | { type: 'END_FOCUS' }
  | { type: 'CONTROLLED_START_VALUE_CHANGE'; value?: Date }
  | { type: 'CONTROLLED_END_VALUE_CHANGE'; value?: Date };

export const datepickerRangeReducer =
  ({
    startValue,
    endValue,
    locale,
    formatDate,
    onChange,
    customParseDate
  }: {
    startValue?: Date;
    endValue?: Date;
    locale?: string;
    formatDate?: any;
    onChange?: (values: { startValue?: Date; endValue?: Date }) => void;
    customParseDate?: (inputValue?: string) => Date;
  }) =>
  (state: IDatepickerRangeState, action: DatepickerRangeAction): IDatepickerRangeState => {
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
      case 'START_BLUR': {
        let parsedDate;

        if (customParseDate) {
          parsedDate = customParseDate(state.startInputValue);
        } else {
          parsedDate = parseInputValue({
            inputValue: state.startInputValue
          });
        }

        if (onChange && parsedDate && isValid(parsedDate) && !isSameDay(parsedDate, startValue!)) {
          onChange({ startValue: parsedDate, endValue });
        }

        const startInputValue = formatValue({ value: parsedDate, locale, formatDate });

        return {
          ...state,
          startInputValue:
            startInputValue || formatValue({ value: startValue, locale, formatDate }),
          isStartFocused: false
        };
      }
      case 'END_BLUR': {
        let parsedDate;

        if (customParseDate) {
          parsedDate = customParseDate(state.endInputValue);
        } else {
          parsedDate = parseInputValue({
            inputValue: state.endInputValue
          });
        }

        if (onChange && parsedDate && isValid(parsedDate) && !isSameDay(parsedDate, endValue!)) {
          onChange({ startValue, endValue: parsedDate });
        }

        const endInputValue =
          formatValue({ value: parsedDate, locale, formatDate }) ||
          formatValue({ value: endValue, locale, formatDate });

        return {
          ...state,
          endInputValue,
          isEndFocused: false
        };
      }
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
        if (onChange) {
          if (state.isStartFocused) {
            if (
              endValue !== undefined &&
              (isBefore(action.value, endValue) || isSameDay(action.value, endValue))
            ) {
              onChange({ startValue: action.value, endValue });
            } else {
              onChange({ startValue: action.value, endValue: undefined });
            }
          } else if (state.isEndFocused) {
            if (
              startValue !== undefined &&
              (isAfter(action.value, startValue) || isSameDay(action.value, startValue))
            ) {
              onChange({ startValue, endValue: action.value });
            } else {
              onChange({ startValue: action.value, endValue: undefined });
            }
          } else if (startValue === undefined) {
            onChange({ startValue: action.value, endValue: undefined });
          } else if (endValue === undefined) {
            if (isBefore(action.value, startValue)) {
              onChange({ startValue: action.value, endValue: undefined });
            } else {
              onChange({ startValue, endValue: action.value });
            }
          } else {
            onChange({ startValue: action.value, endValue: undefined });
          }
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
      case 'PREVIEW_NEXT_MONTH': {
        const previewDate = addMonths(state.previewDate, 1);

        return { ...state, previewDate, hoverDate: undefined };
      }
      case 'PREVIEW_PREVIOUS_MONTH': {
        const previewDate = subMonths(state.previewDate, 1);

        return { ...state, previewDate, hoverDate: undefined };
      }
      /* istanbul ignore next */
      default:
        throw new Error();
    }
  };

/**
 * Retrieve initial state for the Datepicker reducer
 */
export function retrieveInitialState(initialProps: IDatepickerRangeProps): IDatepickerRangeState {
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
    startInputValue,
    endInputValue,
    isStartFocused: false,
    isEndFocused: false
  };
}
