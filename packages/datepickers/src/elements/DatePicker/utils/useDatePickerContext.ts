/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext, createContext } from 'react';
import { IUseDatePickerReturnValue } from '../../../utils/useDatePicker';

export type IDatePickerContext = IUseDatePickerReturnValue;

export const DatePickerContext = createContext<IDatePickerContext | undefined>(undefined);

const useDatePickerContext = () => {
  const context = useContext(DatePickerContext);

  if (!context) {
    throw new Error('This component must be rendered within a <DatePicker>.');
  }

  return context;
};

export default useDatePickerContext;
