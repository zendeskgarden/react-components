/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { IItemProps } from '../../../types';
/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export declare const NextItem: React.ForwardRefExoticComponent<Omit<IItemProps, "component" | "hasIcon"> & React.RefAttributes<HTMLLIElement>>;
