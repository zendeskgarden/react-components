/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React, { PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import { IDatePickerRangeProps } from '../../types';
import { Start } from './components/Start';
import { End } from './components/End';
import { Calendar } from './components/Calendar';
declare const DatePickerRangeComponent: {
    (props: PropsWithChildren<IDatePickerRangeProps>): React.JSX.Element;
    propTypes: {
        locale: PropTypes.Requireable<string>;
        weekStartsOn: PropTypes.Requireable<number>;
        startValue: PropTypes.Requireable<Date>;
        endValue: PropTypes.Requireable<Date>;
        minValue: PropTypes.Requireable<Date>;
        maxValue: PropTypes.Requireable<Date>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        formatDate: PropTypes.Requireable<(...args: any[]) => any>;
        customParseDate: PropTypes.Requireable<(...args: any[]) => any>;
        isCompact: PropTypes.Requireable<boolean>;
    };
};
export declare const DatePickerRange: typeof DatePickerRangeComponent & {
    Calendar: typeof Calendar;
    End: typeof End;
    Start: typeof Start;
};
export {};
