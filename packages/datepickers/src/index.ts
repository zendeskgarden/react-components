/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export { DatePicker } from './elements/DatePicker/DatePicker';
export { DatePickerRange } from './elements/DatePickerRange/DatePickerRange';

export {
  useDatePicker,
  type IGetDayPropsOptions,
  type IUseDatePickerProps,
  type IUseDatePickerReturnValue
} from './utils/useDatePicker';

export {
  useDatePickerRange,
  type IGetRangeDayPropsOptions,
  type IUseDatePickerRangeProps,
  type IUseDatePickerRangeReturnValue
} from './elements/DatePickerRange/utils/useDatePickerRange';

export type {
  DatePickerInvalidReason,
  DatePickerRangeInvalidReason,
  IDatePickerProps,
  IDatePickerRangeProps,
  IDatePickerRangeValueSettledResult,
  IDatePickerValueSettledResult
} from './types';
