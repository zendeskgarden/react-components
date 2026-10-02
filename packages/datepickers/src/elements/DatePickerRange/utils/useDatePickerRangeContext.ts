/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext, createContext } from 'react';
import { DateFnsIndex, IUseDatePickerRangeReturnValue, ToolbarDateLabel } from '../../../types';

export interface IDatePickerRangeContext extends IUseDatePickerRangeReturnValue {
  locale?: string;
  weekStartsOn?: DateFnsIndex;
  isCompact: boolean;
  minValue?: Date;
  maxValue?: Date;
  startValue?: Date;
  endValue?: Date;
  previousMonthLabel?: ToolbarDateLabel;
  nextMonthLabel?: ToolbarDateLabel;
  previousYearLabel?: ToolbarDateLabel;
  nextYearLabel?: ToolbarDateLabel;
  toolbarLabel?: string;
  inRangeLabel?: string;
  startOfRangeLabel?: string;
  endOfRangeLabel?: string;
  selectableCellRoleDescription?: string;
}

export const DatePickerRangeContext = createContext<IDatePickerRangeContext | undefined>(undefined);

const useDatePickerContext = () => {
  const context = useContext(DatePickerRangeContext);

  if (!context) {
    throw new Error('This component must be rendered within a <DatePickerRange>.');
  }

  return context;
};

export default useDatePickerContext;
