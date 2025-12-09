/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React, { HTMLAttributes } from 'react';
interface IMonthProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    displayDate: Date;
    isPreviousHidden?: boolean;
    isNextHidden?: boolean;
}
export declare const Month: React.ForwardRefExoticComponent<IMonthProps & React.RefAttributes<HTMLDivElement>>;
export {};
