/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { IButtonProps } from '../types';
import { StartIcon } from './components/StartIcon';
import { EndIcon } from './components/EndIcon';
declare const ButtonComponent: React.ForwardRefExoticComponent<IButtonProps & React.RefAttributes<HTMLButtonElement>>;
/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export declare const Button: typeof ButtonComponent & {
    EndIcon: typeof EndIcon;
    StartIcon: typeof StartIcon;
};
export {};
