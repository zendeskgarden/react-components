/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { IDatePickerProps } from '../../../types';
export interface IDatePickerState {
    isOpen: boolean;
    previewDate: Date;
    inputValue: string;
}
export type DatePickerAction = {
    type: 'OPEN';
} | {
    type: 'CLOSE';
} | {
    type: 'PREVIEW_NEXT_MONTH';
} | {
    type: 'PREVIEW_PREVIOUS_MONTH';
} | {
    type: 'MANUALLY_UPDATE_INPUT';
    value: string;
} | {
    type: 'CONTROLLED_VALUE_CHANGE';
    value?: Date;
} | {
    type: 'CONTROLLED_LOCALE_CHANGE';
} | {
    type: 'SELECT_DATE';
    value: Date;
};
export declare const datepickerReducer: ({ value, formatDate, locale, customParseDate, onChange }: {
    value?: Date;
    formatDate?: (date: Date) => string;
    locale: any;
    customParseDate?: (inputValue: string) => Date;
    onChange?: (date: Date) => void;
}) => (state: IDatePickerState, action: DatePickerAction) => IDatePickerState;
/**
 * Retrieve initial state for the DatePicker reducer
 */
export declare function retrieveInitialState(initialProps: IDatePickerProps): IDatePickerState;
