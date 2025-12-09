/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { Message } from './components/Message';
import { Icon } from './components/Icon';
import { IDropzoneProps } from '../../types';
declare const DropzoneComponent: React.ForwardRefExoticComponent<IDropzoneProps & React.RefAttributes<HTMLDivElement>>;
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export declare const Dropzone: typeof DropzoneComponent & {
    Icon: typeof Icon;
    Message: typeof Message;
};
export {};
