/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DateFnsIndex } from 'packages/datepickers/src/utils/calendar-utils';
import { useContext, createContext, MutableRefObject } from 'react';
import { IDatepickerRangeState, DatepickerRangeAction } from './datepicker-range-reducer';

export interface IDatepickerRangeContext {
  state: IDatepickerRangeState;
  dispatch: React.Dispatch<DatepickerRangeAction>;
  locale?: string;
  weekStartsOn?: DateFnsIndex;
  isCompact?: boolean;
  minValue?: Date;
  maxValue?: Date;
  startValue?: Date;
  endValue?: Date;
  onChange?: (values: { startValue?: Date; endValue?: Date }) => void;
  startInputRef: MutableRefObject<HTMLInputElement | undefined>;
  endInputRef: MutableRefObject<HTMLInputElement | undefined>;
  customParseDate?: (inputValue?: string) => Date;
}

export const DatepickerRangeContext = createContext<IDatepickerRangeContext | undefined>(undefined);

/**
 * Retrieve Dropdown component context
 */
const useDatepickerContext = () => {
  return useContext<IDatepickerRangeContext>(DatepickerRangeContext as any);
};

export default useDatepickerContext;
