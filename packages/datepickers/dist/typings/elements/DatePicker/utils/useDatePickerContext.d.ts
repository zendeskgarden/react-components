/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { IDatePickerState, DatePickerAction } from './date-picker-reducer';
export interface IDatePickerContext {
    state: IDatePickerState;
    dispatch: React.Dispatch<DatePickerAction>;
}
export declare const DatePickerContext: import("react").Context<IDatePickerContext | undefined>;
/**
 * Retrieve Dropdown component context
 */
declare const useDatePickerContext: () => IDatePickerContext;
export default useDatePickerContext;
