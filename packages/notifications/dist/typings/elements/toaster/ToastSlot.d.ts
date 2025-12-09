/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React, { HTMLAttributes } from 'react';
import { Placement } from '../../types';
import { IToast } from './useToast';
interface IToastSlotProps extends HTMLAttributes<HTMLDivElement> {
    toasts: IToast[];
    placement: Placement;
    limit: number;
    zIndex?: number;
}
export declare const ToastSlot: ({ toasts, placement, zIndex, limit, ...props }: IToastSlotProps) => React.JSX.Element;
export {};
