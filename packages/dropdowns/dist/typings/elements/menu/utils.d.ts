/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { IItemGroupProps, IItemProps } from '../../types';
import { IMenuItemBase, MenuItem } from '@zendeskgarden/container-menu';
import { ReactNode } from 'react';
/**
 * Convert `Item` props to a valid object for `useMenu`.
 *
 * @param props `Item` props.
 *
 * @returns A valid `useMenu` item object.
 */
export declare const toItem: (props: IItemProps & {
    selectionType?: IItemGroupProps["type"];
}) => IMenuItemBase;
/**
 * Convert an array of `Item` and `ItemGroup` children to a valid `items`
 * data structure for `useMenu`.
 *
 * @param children The `children` prop from `Combobox`.
 * @param type The group type, if any.
 *
 * @returns A valid `IUseMenuProps['items']` data structure.
 */
export declare const toItems: (children: ReactNode, type?: "radio" | "checkbox") => MenuItem[];
