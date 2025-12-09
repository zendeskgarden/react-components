/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { IFileProps } from '../../../types';
import { Close } from './Close';
import { Delete } from './Delete';
declare const FileComponent: React.ForwardRefExoticComponent<IFileProps & React.RefAttributes<HTMLDivElement>>;
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export declare const File: typeof FileComponent & {
    Close: typeof Close;
    Delete: typeof Delete;
};
export {};
