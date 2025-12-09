/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { INotificationProps } from '../types';
import { Title } from './Title';
import { Paragraph } from './Paragraph';
import { Close } from './Close';
export declare const NotificationComponent: React.ForwardRefExoticComponent<INotificationProps & React.RefAttributes<HTMLDivElement>>;
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export declare const Notification: typeof NotificationComponent & {
    Close: typeof Close;
    Paragraph: typeof Paragraph;
    Title: typeof Title;
};
