/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import { First } from './components/First.js';
import { Next } from './components/Next.js';
import { Previous } from './components/Previous.js';
import { Last } from './components/Last.js';
import '../../styled/OffsetPagination/StyledList.js';
import '../../styled/OffsetPagination/StyledListItem.js';
import '../../styled/OffsetPagination/StyledPage.js';
import { StyledCursorPagination } from '../../styled/CursorPagination/StyledCursorPagination.js';
import '../../styled/CursorPagination/StyledCursor.js';
import '../../styled/CursorPagination/StyledIcon.js';
import '../../styled/OffsetPagination/StyledGapListItem.js';
import '../../styled/OffsetPagination/StyledNavigation.js';
import '../../styled/OffsetPagination/StyledNav.js';

const CursorPaginationComponent = forwardRef((props, ref) => React__default.createElement(StyledCursorPagination, Object.assign({
  ref: ref
}, props)));
CursorPaginationComponent.displayName = 'CursorPagination';
const CursorPagination = CursorPaginationComponent;
CursorPagination.First = First;
CursorPagination.Next = Next;
CursorPagination.Previous = Previous;
CursorPagination.Last = Last;

export { CursorPagination };
