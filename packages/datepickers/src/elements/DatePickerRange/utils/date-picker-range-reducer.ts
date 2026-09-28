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
import {
  DatePickerRangeField,
  IDatePickerRangeProps,
  IDatePickerRangeValueSettledResult
} from '../../../types';
import { isDateWithinRange } from '../../../utils/calendar-utils';

/**
 * Whether `date` falls within the two currently-visible months (`previewDate`'s month and the
 * one after it). Compares against the true end of the *second* month, since `addMonths(endOfMonth
 * (previewDate), 1)` miscalculates whenever that month has more days than the first (e.g. Feb 28
 * + 1 month lands on Mar 28, not Mar 31).
 */
function isWithinVisibleMonths(date: Date, previewDate: Date): boolean {
  const secondMonthEnd = endOfMonth(addMonths(previewDate, 1));

  return (
    compareAsc(date, startOfMonth(previewDate)) !== -1 && compareAsc(date, secondMonthEnd) !== 1
  );
}

function isSameValue(a?: Date, b?: Date) {
  return a === undefined || b === undefined ? a === b : isSameDay(a, b);
}

export interface IDatePickerRangeState {
  previewDate: Date;
  focusedDate: Date;
  hoverDate?: Date;
  isStartFocused: boolean;
  isEndFocused: boolean;
  isStartValueInvalid: boolean;
  isEndValueInvalid: boolean;
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

export interface IRangeSelection {
  startValue?: Date;
  endValue?: Date;
  /** The field the clicked day was committed to. */
  field: DatePickerRangeField;
  /** Only possible when no start value is set and the day falls after the end value. */
  isOutOfOrder: boolean;
}

/**
 * The single source of truth for what a day click selects - `getCellProps`
 * emits it via `onChange`/`onValueSettled`, and `CLICK_DATE` only formats it
 * into the inputs, so the two can't disagree.
 */
export function resolveRangeSelection({
  date,
  startValue,
  endValue,
  isStartActive,
  isEndActive,
  disabledOrReadOnlyField
}: {
  date: Date;
  startValue?: Date;
  endValue?: Date;
  /** Start is focused, or holds rejected text. Takes precedence over `isEndActive`. */
  isStartActive: boolean;
  /** End is focused, or holds rejected text. */
  isEndActive: boolean;
  /** Its value can't change, so every click commits to the other field instead - regardless of which is active. */
  disabledOrReadOnlyField?: DatePickerRangeField;
}): IRangeSelection {
  const isStartTarget =
    disabledOrReadOnlyField === 'end' || (disabledOrReadOnlyField !== 'start' && isStartActive);
  const isEndTarget =
    disabledOrReadOnlyField === 'start' || (disabledOrReadOnlyField !== 'end' && isEndActive);
  const toStart = (keptEndValue?: Date): IRangeSelection => ({
    startValue: date,
    endValue: keptEndValue,
    field: 'start',
    isOutOfOrder: false
  });
  const toEnd = (): IRangeSelection => ({
    startValue,
    endValue: date,
    field: 'end',
    isOutOfOrder: false
  });

  if (isStartTarget) {
    return endValue !== undefined && (isBefore(date, endValue) || isSameDay(date, endValue))
      ? toStart(endValue)
      : toStart();
  }

  if (isEndTarget) {
    return startValue === undefined || isAfter(date, startValue) || isSameDay(date, startValue)
      ? toEnd()
      : toStart();
  }

  if (startValue === undefined) {
    return {
      ...toStart(endValue),
      isOutOfOrder: endValue !== undefined && isAfter(date, endValue)
    };
  }

  if (endValue === undefined) {
    return isBefore(date, startValue) ? toStart() : toEnd();
  }

  return toStart();
}

export type DatePickerRangeAction =
  | { type: 'HOVER_DATE'; value?: Date }
  | {
      type: 'CLICK_DATE';
      selection: IRangeSelection;
      previousStartValue?: Date;
      previousEndValue?: Date;
      locale?: string;
      formatDate?: any;
    }
  | { type: 'PREVIEW_NEXT_MONTH' }
  | { type: 'PREVIEW_PREVIOUS_MONTH' }
  | { type: 'PREVIEW_NEXT_YEAR' }
  | { type: 'PREVIEW_PREVIOUS_YEAR' }
  | { type: 'START_INPUT_ONCHANGE'; value: string }
  | { type: 'END_INPUT_ONCHANGE'; value: string }
  | { type: 'START_BLUR'; isRejected: boolean }
  | { type: 'END_BLUR'; isRejected: boolean }
  | { type: 'START_FOCUS'; startValue?: Date }
  | { type: 'END_FOCUS'; endValue?: Date }
  | {
      type: 'CONTROLLED_START_VALUE_CHANGE';
      value?: Date;
      locale?: string;
      formatDate?: any;
    }
  | {
      type: 'CONTROLLED_END_VALUE_CHANGE';
      value?: Date;
      locale?: string;
      formatDate?: any;
    }
  | {
      type: 'CONTROLLED_LOCALE_CHANGE';
      startValue?: Date;
      endValue?: Date;
      locale?: string;
      formatDate?: any;
    }
  | { type: 'FOCUS_DATE'; value: Date };

export const datepickerRangeReducer = (
  state: IDatePickerRangeState,
  action: DatePickerRangeAction
): IDatePickerRangeState => {
  switch (action.type) {
    case 'START_FOCUS': {
      const { startValue } = action;
      let previewDate = state.previewDate;

      if (startValue) {
        previewDate = isWithinVisibleMonths(startValue, state.previewDate)
          ? state.previewDate
          : startOfMonth(startValue);
      }

      return { ...state, previewDate, isStartFocused: true, isEndFocused: false };
    }
    case 'END_FOCUS': {
      const { endValue } = action;
      let previewDate = state.previewDate;

      if (endValue) {
        previewDate = isWithinVisibleMonths(endValue, state.previewDate)
          ? state.previewDate
          : startOfMonth(endValue);
      }

      return { ...state, previewDate, isEndFocused: true, isStartFocused: false };
    }
    case 'START_BLUR':
      return { ...state, isStartFocused: false, isStartValueInvalid: action.isRejected };
    case 'END_BLUR':
      return { ...state, isEndFocused: false, isEndValueInvalid: action.isRejected };
    case 'CONTROLLED_START_VALUE_CHANGE': {
      const startInputValue = formatValue({
        value: action.value,
        locale: action.locale,
        formatDate: action.formatDate
      });

      let previewDate = state.previewDate;

      if (action.value) {
        previewDate = isWithinVisibleMonths(action.value, state.previewDate)
          ? state.previewDate
          : startOfMonth(action.value);
      }

      return {
        ...state,
        startInputValue,
        hoverDate: undefined,
        previewDate,
        isStartValueInvalid: false
      };
    }
    case 'CONTROLLED_END_VALUE_CHANGE': {
      const endInputValue = formatValue({
        value: action.value,
        locale: action.locale,
        formatDate: action.formatDate
      });

      let previewDate = state.previewDate;

      if (action.value) {
        previewDate = isWithinVisibleMonths(action.value, state.previewDate)
          ? state.previewDate
          : startOfMonth(action.value);
      }

      return {
        ...state,
        endInputValue,
        hoverDate: undefined,
        previewDate,
        isEndValueInvalid: false
      };
    }
    case 'CONTROLLED_LOCALE_CHANGE': {
      const startInputValue = formatValue({
        value: action.startValue,
        locale: action.locale,
        formatDate: action.formatDate
      });
      const endInputValue = formatValue({
        value: action.endValue,
        locale: action.locale,
        formatDate: action.formatDate
      });

      return { ...state, startInputValue, endInputValue };
    }
    case 'CLICK_DATE': {
      const { selection, previousStartValue, previousEndValue, locale, formatDate } = action;
      const isStartRewritten =
        selection.field === 'start' || !isSameValue(selection.startValue, previousStartValue);
      const isEndRewritten =
        selection.field === 'end' || !isSameValue(selection.endValue, previousEndValue);

      return {
        ...state,
        isStartFocused: false,
        isEndFocused: false,
        ...(isStartRewritten && {
          startInputValue: formatValue({ value: selection.startValue, locale, formatDate }),
          isStartValueInvalid: false
        }),
        ...(isEndRewritten && {
          endInputValue: formatValue({ value: selection.endValue, locale, formatDate }),
          isEndValueInvalid: false
        })
      };
    }
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
    isEndFocused: false,
    isStartValueInvalid: false,
    isEndValueInvalid: false
  };
}
