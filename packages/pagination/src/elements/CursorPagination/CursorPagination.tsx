/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  HTMLAttributes,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes
} from 'react';
import { First } from './components/First';
import { Next } from './components/Next';
import { Previous } from './components/Previous';
import { Last } from './components/Last';
import { StyledCursorPagination } from '../../styled';

interface IStaticCursorPaginationExport<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  First: typeof First;
  Next: typeof Next;
  Previous: typeof Previous;
  Last: typeof Last;
}

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const CursorPagination = React.forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  (props, ref) => <StyledCursorPagination ref={ref} {...props} />
) as IStaticCursorPaginationExport<HTMLDivElement, HTMLAttributes<HTMLElement>>;

CursorPagination.First = First;
CursorPagination.Next = Next;
CursorPagination.Previous = Previous;
CursorPagination.Last = Last;

CursorPagination.displayName = 'CursorPagination';
