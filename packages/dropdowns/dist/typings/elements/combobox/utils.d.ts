/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { ReactNode } from 'react';
import { IOption } from '@zendeskgarden/container-combobox';
import { IOptionProps } from '../../types';
/**
 * Convert `Option` props to a valid object for `useCombobox`.
 *
 * @param props `Option` props.
 *
 * @returns A valid `IOption` object.
 */
export declare const toOption: (props: IOptionProps) => IOption;
/**
 * Convert an array of `Option` and `OptGroup` children to a valid `options`
 * data structure for `useCombobox` (collect `tagProps` along the way).
 *
 * @param children The `children` prop from `Combobox`.
 * @param optionTagProps A collection that maps option values to tag props.
 *
 * @returns A valid `IUseComboboxProps['options']` data structure.
 */
export declare const toOptions: (children: ReactNode, optionTagProps: Record<string, IOptionProps["tagProps"]>) => (IOption | {
    options: IOption[];
    label?: string;
})[];
