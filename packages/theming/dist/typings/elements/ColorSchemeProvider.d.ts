/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React, { PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import { IColorSchemeContext, IColorSchemeProviderProps } from '../types';
export declare const ColorSchemeContext: React.Context<IColorSchemeContext | undefined>;
export declare const ColorSchemeProvider: {
    ({ children, colorSchemeKey, initialColorScheme }: PropsWithChildren<IColorSchemeProviderProps>): React.JSX.Element;
    propTypes: {
        colorSchemeKey: PropTypes.Requireable<string>;
        initialColorScheme: PropTypes.Requireable<string>;
    };
};
