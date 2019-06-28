/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Locale } from 'date-fns';
import format from 'date-fns/format';
import addMonths from 'date-fns/addMonths';
import subMonths from 'date-fns/subMonths';
import isValid from 'date-fns/isValid';
import { IDatepickerProps } from '../Datepicker';

export interface IDatepickerState {
  isOpen: boolean;
  previewDate: Date;
  inputValue: string;
}

/**
 * Format inputValue with the correct locale
 */
function formatInputValue({
  date,
  locale,
  dateFormat
}: {
  date?: Date;
  locale: Locale;
  dateFormat: string;
}) {
  if (!date) {
    return '';
  }

  return format(date, dateFormat, { locale });
}

export type DatepickerAction =
  | { type: 'open' }
  | { type: 'close' }
  | { type: 'preview_next_month' }
  | { type: 'preview_previous_month' }
  | { type: 'manually_update_input'; value: string }
  | { type: 'controlled_value_change'; value?: Date }
  | { type: 'controlled_locale_change' }
  | { type: 'select_date'; value: Date };

export const datepickerReducer = ({
  value,
  dateFormat,
  locale
}: {
  value?: Date;
  dateFormat: string;
  locale: any;
}) => (state: IDatepickerState, action: DatepickerAction): IDatepickerState => {
  switch (action.type) {
    case 'open':
      return { ...state, isOpen: true, previewDate: value || new Date() };
    case 'close': {
      const inputValue = formatInputValue({ date: value, locale, dateFormat });

      return { ...state, isOpen: false, inputValue };
    }
    case 'preview_next_month': {
      const previewDate = addMonths(state.previewDate, 1);

      return { ...state, previewDate };
    }
    case 'preview_previous_month': {
      const previewDate = subMonths(state.previewDate, 1);

      return { ...state, previewDate };
    }
    case 'manually_update_input': {
      return { ...state, isOpen: true, inputValue: action.value };
    }
    case 'controlled_value_change': {
      return { ...state, previewDate: action.value || new Date() };
    }
    case 'controlled_locale_change': {
      const inputValue = formatInputValue({ date: value, locale, dateFormat });

      return { ...state, inputValue };
    }
    case 'select_date': {
      const inputValue = formatInputValue({ date: action.value, locale, dateFormat });

      return { ...state, isOpen: false, inputValue };
    }
    /* istanbul ignore next */
    default:
      throw new Error();
  }
};

/**
 * Retrieve initial state for the Datepicker reducer
 */
export function retrieveInitialState(initialProps: IDatepickerProps): IDatepickerState {
  let previewDate = initialProps.value;

  if (previewDate === undefined || !isValid(previewDate)) {
    previewDate = new Date();
  }

  let inputValue = '';

  if (initialProps.value !== undefined) {
    inputValue = format(previewDate, initialProps.dateFormat!, { locale: initialProps.locale });
  }

  return {
    isOpen: false,
    previewDate,
    inputValue
  };
}
