/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { IToast } from './useToast';
interface IToastProps {
    toast: IToast;
    pauseTimers: boolean;
}
export declare const Toast: ({ toast, pauseTimers }: IToastProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export {};
