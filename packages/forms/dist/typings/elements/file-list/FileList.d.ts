/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { Item } from './components/Item';
declare const FileListComponent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLUListElement> & React.RefAttributes<HTMLUListElement>>;
/**
 * @extends HTMLAttributes<HTMLUListElement>
 */
export declare const FileList: typeof FileListComponent & {
    Item: typeof Item;
};
export {};
