/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { IDatePickerRangeProps } from '../../../types';
export interface IDatePickerRangeState {
    previewDate: Date;
    hoverDate?: Date;
    isStartFocused: boolean;
    isEndFocused: boolean;
    startInputValue?: string;
    endInputValue?: string;
}
/**
 * Format date value to a localized string
 */
export declare function formatValue({ value, locale, formatDate }: {
    value?: Date;
    formatDate?: any;
    locale?: string;
}): string;
/**
 * Parse string input value using current locale and date formats
 */
export declare function parseInputValue({ inputValue }: {
    inputValue?: string;
}): Date;
export type DatePickerRangeAction = {
    type: 'HOVER_DATE';
    value?: Date;
} | {
    type: 'CLICK_DATE';
    value: Date;
} | {
    type: 'PREVIEW_NEXT_MONTH';
} | {
    type: 'PREVIEW_PREVIOUS_MONTH';
} | {
    type: 'START_INPUT_ONCHANGE';
    value: string;
} | {
    type: 'END_INPUT_ONCHANGE';
    value: string;
} | {
    type: 'START_BLUR';
} | {
    type: 'END_BLUR';
} | {
    type: 'START_FOCUS';
} | {
    type: 'END_FOCUS';
} | {
    type: 'CONTROLLED_START_VALUE_CHANGE';
    value?: Date;
} | {
    type: 'CONTROLLED_END_VALUE_CHANGE';
    value?: Date;
};
export declare const datepickerRangeReducer: ({ startValue, endValue, locale, formatDate, customParseDate }: {
    startValue?: Date;
    endValue?: Date;
    locale?: string;
    formatDate?: any;
    customParseDate?: (inputValue?: string) => Date;
}) => (state: IDatePickerRangeState, action: DatePickerRangeAction) => IDatePickerRangeState;
/**
 * Retrieve initial state for the DatePicker reducer
 */
export declare function retrieveInitialState(initialProps: IDatePickerRangeProps): IDatePickerRangeState;
