/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { Dispatch, ReactElement, RefAttributes } from 'react';
import { DatePickerAction, IDatePickerState } from '../utils/date-picker-reducer';
interface IInputProps {
    dispatch: Dispatch<DatePickerAction>;
    element: ReactElement & RefAttributes<HTMLInputElement>;
    refKey: string;
    state: IDatePickerState;
}
export declare const Input: import("react").ForwardRefExoticComponent<IInputProps & RefAttributes<HTMLInputElement>>;
export {};
