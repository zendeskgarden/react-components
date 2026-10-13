/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext } from 'react';

import { DatePickerContext } from '../../context/datepicker/DatePickerContext';
import type { IDatePickerContext } from '../../types/context';

/**
 * Retrieve DatePicker component context
 */
export const useDatePickerContext = () => {
  return useContext<IDatePickerContext>(DatePickerContext as any);
};
