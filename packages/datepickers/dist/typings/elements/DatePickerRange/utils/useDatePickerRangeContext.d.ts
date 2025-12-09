/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { MutableRefObject } from 'react';
import { DateFnsIndex } from '../../../utils/calendar-utils';
import { IDatePickerRangeState, DatePickerRangeAction } from './date-picker-range-reducer';
export interface IDatePickerRangeContext {
    state: IDatePickerRangeState;
    dispatch: React.Dispatch<DatePickerRangeAction>;
    locale?: string;
    weekStartsOn?: DateFnsIndex;
    isCompact?: boolean;
    minValue?: Date;
    maxValue?: Date;
    startValue?: Date;
    endValue?: Date;
    onChange?: (values: {
        startValue?: Date;
        endValue?: Date;
    }) => void;
    startInputRef: MutableRefObject<HTMLInputElement | undefined>;
    endInputRef: MutableRefObject<HTMLInputElement | undefined>;
    customParseDate?: (inputValue?: string) => Date;
}
export declare const DatePickerRangeContext: import("react").Context<IDatePickerRangeContext | undefined>;
/**
 * Retrieve Dropdown component context
 */
declare const useDatePickerContext: () => IDatePickerRangeContext;
export default useDatePickerContext;
