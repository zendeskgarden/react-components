/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React, { HTMLAttributes } from 'react';
import { DateFnsIndex } from '../../../utils/calendar-utils';
interface ICalendarProps extends HTMLAttributes<HTMLDivElement> {
    value?: Date;
    minValue?: Date;
    maxValue?: Date;
    isCompact?: boolean;
    locale?: string;
    weekStartsOn?: DateFnsIndex;
}
export declare const Calendar: React.ForwardRefExoticComponent<ICalendarProps & React.RefAttributes<HTMLDivElement>>;
export {};
