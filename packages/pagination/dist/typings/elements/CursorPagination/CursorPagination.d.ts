/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { First } from './components/First';
import { Next } from './components/Next';
import { Previous } from './components/Previous';
import { Last } from './components/Last';
declare const CursorPaginationComponent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
/**
 * @extends HTMLAttributes<HTMLElement>
 */
export declare const CursorPagination: typeof CursorPaginationComponent & {
    First: typeof First;
    Last: typeof Last;
    Next: typeof Next;
    Previous: typeof Previous;
};
export {};
