/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React, { PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import { IToastProviderProps } from '../../types';
export declare const ToastProvider: {
    ({ limit, zIndex, placementProps, children }: PropsWithChildren<IToastProviderProps>): React.JSX.Element;
    displayName: string;
    propTypes: {
        limit: PropTypes.Requireable<number>;
        zIndex: PropTypes.Requireable<number>;
        placementProps: PropTypes.Requireable<object>;
    };
};
