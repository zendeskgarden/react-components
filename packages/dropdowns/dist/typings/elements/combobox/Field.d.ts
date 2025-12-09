/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { Hint } from './Hint';
import { Label } from './Label';
import { Message } from './Message';
declare const FieldComponent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export declare const Field: typeof FieldComponent & {
    Hint: typeof Hint;
    Label: typeof Label;
    Message: typeof Message;
};
export {};
