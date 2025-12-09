/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { IPaneProviderProps } from '../../types';
export declare const PaneProvider: {
    ({ id, totalPanesWidth, totalPanesHeight, defaultRowValues, defaultColumnValues, rowValues, columnValues, onChange, children }: IPaneProviderProps): React.JSX.Element;
    displayName: string;
    propTypes: {
        id: PropTypes.Requireable<string>;
        totalPanesWidth: PropTypes.Validator<number>;
        totalPanesHeight: PropTypes.Validator<number>;
        defaultRowValues: PropTypes.Requireable<object>;
        defaultColumnValues: PropTypes.Requireable<object>;
        rowValues: PropTypes.Requireable<object>;
        columnValues: PropTypes.Requireable<object>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        children: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
