/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { Content, IToast, IToastOptions } from './useToast';
export interface IToasterState {
    toasts: IToast[];
}
export type ToasterReducerAction = {
    type: 'ADD_TOAST';
    payload: IToast;
} | {
    type: 'REMOVE_TOAST';
    payload: string;
} | {
    type: 'UPDATE_TOAST';
    payload: {
        id: string;
        options: {
            content?: Content;
        } & Partial<IToastOptions>;
    };
} | {
    type: 'REMOVE_ALL_TOASTS';
};
export declare const getInitialState: () => IToasterState;
export declare const toasterReducer: (state: IToasterState, action: ToasterReducerAction) => IToasterState;
