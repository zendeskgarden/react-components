/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { IFauxInputProps } from '../../types';
import { StartIcon } from './components/StartIcon';
import { EndIcon } from './components/EndIcon';
declare const FauxInputComponent: React.ForwardRefExoticComponent<IFauxInputProps & React.RefAttributes<HTMLDivElement>>;
/**
 *  @extends HTMLAttributes<HTMLDivElement>
 */
export declare const FauxInput: typeof FauxInputComponent & {
    EndIcon: typeof EndIcon;
    StartIcon: typeof StartIcon;
};
export {};
