/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { IAlertProps } from '../../types';
import { Title } from './Title';
import { Paragraph } from './Paragraph';
import { Close } from './Close';
export declare const AlertComponent: React.ForwardRefExoticComponent<IAlertProps & React.RefAttributes<HTMLDivElement>>;
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export declare const Alert: typeof AlertComponent & {
    Close: typeof Close;
    Paragraph: typeof Paragraph;
    Title: typeof Title;
};
