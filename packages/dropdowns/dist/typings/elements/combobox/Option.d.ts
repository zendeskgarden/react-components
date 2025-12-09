/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { IOptionProps } from '../../types';
import { OptionMeta } from './OptionMeta';
declare const OptionComponent: React.ForwardRefExoticComponent<IOptionProps & React.RefAttributes<HTMLLIElement>>;
/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export declare const Option: typeof OptionComponent & {
    Meta: typeof OptionMeta;
};
export {};
