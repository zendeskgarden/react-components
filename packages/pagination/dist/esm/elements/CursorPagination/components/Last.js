/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import SvgChevronDoubleRightStroke from '../../../node_modules/@zendeskgarden/svg-icons/src/16/chevron-double-right-stroke.svg.js';
import '../../../styled/OffsetPagination/StyledList.js';
import '../../../styled/OffsetPagination/StyledListItem.js';
import '../../../styled/OffsetPagination/StyledPage.js';
import '../../../styled/CursorPagination/StyledCursorPagination.js';
import { StyledCursor } from '../../../styled/CursorPagination/StyledCursor.js';
import { StyledIcon } from '../../../styled/CursorPagination/StyledIcon.js';
import '../../../styled/OffsetPagination/StyledGapListItem.js';
import '../../../styled/OffsetPagination/StyledNavigation.js';
import '../../../styled/OffsetPagination/StyledNav.js';

const LastComponent = forwardRef(({
  children,
  ...other
}, ref) => {
  return React__default.createElement(StyledCursor, Object.assign({
    ref: ref,
    as: "button"
  }, other), React__default.createElement("span", null, children), React__default.createElement(StyledIcon, {
    $type: "last"
  }, React__default.createElement(SvgChevronDoubleRightStroke, null)));
});
LastComponent.displayName = 'CursorPagination.Last';
const Last = LastComponent;

export { Last };
