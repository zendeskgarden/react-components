/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { ReactElement } from 'react';
import { Placement } from '../../types';
export interface IToastOptions {
    /** Sets the toast ID, otherwise the ID is generated */
    id?: string;
    /** Determines whether to automatically dismiss the toast. Can be expressed in milliseconds. */
    autoDismiss: boolean | number;
    /** Adjusts the placement of the toast content */
    placement: Placement;
}
export type Content = ({ close }: {
    close: () => void;
}) => ReactElement;
export interface IToast {
    id: string;
    content: Content;
    options: IToastOptions;
}
export declare const useToast: () => {
    addToast: (content: Content, options?: Partial<IToastOptions>) => string;
    removeToast: (id: string) => void;
    updateToast: (id: string, options: {
        content?: Content;
    } & Partial<IToastOptions>) => void;
    removeAllToasts: () => void;
    toasts: IToast[];
};
