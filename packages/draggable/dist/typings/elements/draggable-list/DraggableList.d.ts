/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { DropIndicator } from './components/DropIndicator';
import { Item } from './components/Item';
import { IDraggableListProps } from '../../types';
declare const DraggableListComponent: React.ForwardRefExoticComponent<IDraggableListProps & React.RefAttributes<HTMLUListElement>>;
/**
 * @extends HTMLAttributes<HTMLUListElement>
 */
export declare const DraggableList: typeof DraggableListComponent & {
    Item: typeof Item;
    DropIndicator: typeof DropIndicator;
};
export {};
