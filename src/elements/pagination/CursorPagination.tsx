/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, forwardRef } from 'react';

import { StyledCursorPagination } from '../../views/pagination/StyledCursorPagination';
import { Next } from './CursorPaginationNext';
import { Previous } from './CursorPaginationPrevious';
import { First } from './First';
import { Last } from './Last';

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
