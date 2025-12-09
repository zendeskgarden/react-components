/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { IProgressProps } from '../types';
/**
 * 1. Garden progress bar is quite custom, and while using a native
 *    `progress` element would be ideal, its inclusion of a shadow
 *    root in Safari prevents straightforward restyling/functional overrides.
 */
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export declare const Progress: React.ForwardRefExoticComponent<IProgressProps & React.RefAttributes<HTMLDivElement>>;
