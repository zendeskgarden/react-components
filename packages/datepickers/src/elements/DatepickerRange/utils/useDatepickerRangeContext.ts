/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext, createContext, MutableRefObject } from 'react';
import { IDatepickerRangeState, DatepickerRangeAction } from './datepicker-range-reducer';

export interface IDatepickerRangeContext {
  state: IDatepickerRangeState;
  dispatch: React.Dispatch<DatepickerRangeAction>;
  locale?: string;
  isCompact?: boolean;
  minValue?: Date;
  maxValue?: Date;
  startValue?: Date;
  endValue?: Date;
  onChange?: (values: { startValue?: Date; endValue?: Date }) => void;
  startInputRef: MutableRefObject<HTMLInputElement | undefined>;
  endInputRef: MutableRefObject<HTMLInputElement | undefined>;
}

export const DatepickerRangeContext = createContext<IDatepickerRangeContext | undefined>(undefined);

/**
 * Retrieve Dropdown component context
 */
const useDatepickerContext = () => {
  return useContext<IDatepickerRangeContext>(DatepickerRangeContext as any);
};

export default useDatepickerContext;
