/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';
import { First } from './components/First';
import { Next } from './components/Next';
import { Previous } from './components/Previous';
import { Last } from './components/Last';
import { StyledCursorPagination } from '../../styled';

const CursorPaginationComponent = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  (props, ref) => <StyledCursorPagination ref={ref} {...props} />
);

CursorPaginationComponent.displayName = 'CursorPagination';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const CursorPagination = CursorPaginationComponent as typeof CursorPaginationComponent & {
  First: typeof First;
  Last: typeof Last;
  Next: typeof Next;
  Previous: typeof Previous;
};

CursorPagination.First = First;
CursorPagination.Next = Next;
CursorPagination.Previous = Previous;
CursorPagination.Last = Last;
