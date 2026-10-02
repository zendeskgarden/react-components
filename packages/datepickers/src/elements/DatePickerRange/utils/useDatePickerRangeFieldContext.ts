/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';
import { DatePickerRangeField } from '../../../types';

/** Provided by `StartGroup`/`EndGroup`, so a `Trigger` composed inside one knows which field it belongs to. */
export const DatePickerRangeFieldContext = createContext<DatePickerRangeField | undefined>(
  undefined
);

const useDatePickerRangeFieldContext = () => useContext(DatePickerRangeFieldContext);

export default useDatePickerRangeFieldContext;
