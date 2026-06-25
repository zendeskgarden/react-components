/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext, createContext } from 'react';

import { IDateTimePickerState, DateTimePickerAction } from './date-time-picker-reducer';

export interface IDateTimePickerContext {
  state: IDateTimePickerState;
  dispatch: React.Dispatch<DateTimePickerAction>;
  isAmPm: boolean;
  timeStep: number;
  minValue?: Date;
  maxValue?: Date;
  value?: Date;
  isCompact?: boolean;
  locale: string;
}

export const DateTimePickerContext = createContext<IDateTimePickerContext | undefined>(undefined);

const useDateTimePickerContext = () => {
  return useContext<IDateTimePickerContext>(DateTimePickerContext as any);
};

export default useDateTimePickerContext;
