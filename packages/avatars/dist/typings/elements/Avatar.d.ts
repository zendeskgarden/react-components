/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { IAvatarProps } from '../types';
import { Text } from './components/Text';
declare const AvatarComponent: React.ForwardRefExoticComponent<IAvatarProps & React.RefAttributes<HTMLElement>>;
/**
 * @extends HTMLAttributes<HTMLElement>
 */
export declare const Avatar: typeof AvatarComponent & {
    Text: typeof Text;
};
export {};
