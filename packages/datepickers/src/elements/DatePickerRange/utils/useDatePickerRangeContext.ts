/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext, createContext, MutableRefObject } from 'react';
import { IDatePickerRangeValueSettledResult } from '../../../types';
import { DateFnsIndex } from '../../../utils/calendar-utils';
import { IDatePickerRangeState, DatePickerRangeAction } from './date-picker-range-reducer';

export interface IDatePickerRangeContext {
  state: IDatePickerRangeState;
  dispatch: React.Dispatch<DatePickerRangeAction>;
  locale?: string;
  weekStartsOn?: DateFnsIndex;
  isCompact?: boolean;
  minValue?: Date;
  maxValue?: Date;
  startValue?: Date;
  endValue?: Date;
  onChange?: (values: { startValue?: Date; endValue?: Date }) => void;
  onValueSettled?: (result: IDatePickerRangeValueSettledResult) => void;
  startInputRef: MutableRefObject<HTMLInputElement | undefined>;
  endInputRef: MutableRefObject<HTMLInputElement | undefined>;
  calendarId: string;
  getInputProps: (props?: Record<string, unknown>) => Record<string, unknown>;
  customParseDate?: (inputValue?: string) => Date;
  previousMonthLabel?: string;
  nextMonthLabel?: string;
}

export const DatePickerRangeContext = createContext<IDatePickerRangeContext | undefined>(undefined);

/**
 * Retrieve Dropdown component context
 */
const useDatePickerContext = () => {
  return useContext<IDatePickerRangeContext>(DatePickerRangeContext as any);
};

export default useDatePickerContext;
