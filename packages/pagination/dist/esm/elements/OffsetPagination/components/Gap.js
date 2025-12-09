/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import '../../../styled/OffsetPagination/StyledList.js';
import '../../../styled/OffsetPagination/StyledListItem.js';
import '../../../styled/OffsetPagination/StyledPage.js';
import '../../../styled/CursorPagination/StyledCursorPagination.js';
import '../../../styled/CursorPagination/StyledCursor.js';
import '../../../styled/CursorPagination/StyledIcon.js';
import { StyledGapListItem } from '../../../styled/OffsetPagination/StyledGapListItem.js';
import '../../../styled/OffsetPagination/StyledNavigation.js';
import '../../../styled/OffsetPagination/StyledNav.js';
import { useText } from '@zendeskgarden/react-theming';

const GapComponent = forwardRef((props, ref) => {
  const ariaLabel = useText(GapComponent, props, 'aria-label', 'Ellipsis indicating non-visible pages');
  return React__default.createElement(StyledGapListItem, Object.assign({}, props, {
    "aria-label": ariaLabel,
    ref: ref
  }), "\u2026");
});
GapComponent.displayName = 'Pagination.Gap';
const Gap = GapComponent;

export { Gap };
