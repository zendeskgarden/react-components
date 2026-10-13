/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext } from 'react';

import { DatePickerRangeContext } from '../../context/datepicker/DatePickerRangeContext';
import type { IDatePickerRangeContext } from '../../types/context';

/**
 * Retrieve DatePickerRange component context
 */
export const useDatePickerRangeContext = () => {
  return useContext<IDatePickerRangeContext>(DatePickerRangeContext as any);
};
