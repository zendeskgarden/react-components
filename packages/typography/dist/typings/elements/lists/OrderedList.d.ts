/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { Item } from './OrderedListItem';
import { IOrderedListProps } from '../../types';
declare const OrderedListComponent: React.ForwardRefExoticComponent<IOrderedListProps & React.RefAttributes<HTMLOListElement>>;
/**
 * @extends OlHTMLAttributes<HTMLOListElement>
 */
export declare const OrderedList: typeof OrderedListComponent & {
    Item: typeof Item;
};
export {};
