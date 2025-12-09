/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { IWellProps } from '../../types';
import { Title } from '../Title';
import { Paragraph } from '../Paragraph';
export declare const WellComponent: React.ForwardRefExoticComponent<IWellProps & React.RefAttributes<HTMLDivElement>>;
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export declare const Well: typeof WellComponent & {
    Paragraph: typeof Paragraph;
    Title: typeof Title;
};
