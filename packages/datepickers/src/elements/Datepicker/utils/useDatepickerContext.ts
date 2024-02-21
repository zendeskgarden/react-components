/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext, createContext } from 'react';
import { IDatePickerState, DatePickerAction } from './date-picker-reducer';

export interface IDatePickerContext {
  state: IDatePickerState;
  dispatch: React.Dispatch<DatePickerAction>;
}

export const DatePickerContext = createContext<IDatePickerContext | undefined>(undefined);

/**
 * Retrieve Dropdown component context
 */
const useDatePickerContext = () => {
  return useContext<IDatePickerContext>(DatePickerContext as any);
};

export default useDatePickerContext;
