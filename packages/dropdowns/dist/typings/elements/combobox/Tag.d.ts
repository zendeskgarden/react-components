/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { ITagProps } from '../../types';
import { TagAvatar } from './TagAvatar';
declare const TagComponent: React.ForwardRefExoticComponent<ITagProps & React.RefAttributes<HTMLDivElement>>;
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export declare const Tag: typeof TagComponent & {
    Avatar: typeof TagAvatar;
};
export {};
