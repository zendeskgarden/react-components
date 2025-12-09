/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import { useText } from '@zendeskgarden/react-theming';
import '../../../styled/OffsetPagination/StyledList.js';
import '../../../styled/OffsetPagination/StyledListItem.js';
import { StyledPage } from '../../../styled/OffsetPagination/StyledPage.js';
import '../../../styled/CursorPagination/StyledCursorPagination.js';
import '../../../styled/CursorPagination/StyledCursor.js';
import '../../../styled/CursorPagination/StyledIcon.js';
import '../../../styled/OffsetPagination/StyledGapListItem.js';
import '../../../styled/OffsetPagination/StyledNavigation.js';
import '../../../styled/OffsetPagination/StyledNav.js';

const PageComponent = forwardRef((props, ref) => {
  const ariaLabel = useText(PageComponent, props, 'aria-label', `Page ${props.children}`);
  return React__default.createElement(StyledPage, Object.assign({
    type: "button"
  }, props, {
    "aria-label": ariaLabel,
    ref: ref
  }));
});
PageComponent.displayName = 'Pagination.Page';
const Page = PageComponent;

export { Page };
