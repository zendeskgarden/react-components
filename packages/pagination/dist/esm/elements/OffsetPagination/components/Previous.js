/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import SvgChevronLeftStroke from '../../../node_modules/@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg.js';
import SvgChevronRightStroke from '../../../node_modules/@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg.js';
import { useText } from '@zendeskgarden/react-theming';
import '../../../styled/OffsetPagination/StyledList.js';
import '../../../styled/OffsetPagination/StyledListItem.js';
import '../../../styled/OffsetPagination/StyledPage.js';
import '../../../styled/CursorPagination/StyledCursorPagination.js';
import '../../../styled/CursorPagination/StyledCursor.js';
import '../../../styled/CursorPagination/StyledIcon.js';
import '../../../styled/OffsetPagination/StyledGapListItem.js';
import { StyledNavigation } from '../../../styled/OffsetPagination/StyledNavigation.js';
import '../../../styled/OffsetPagination/StyledNav.js';

const PreviousComponent$1 = forwardRef((props, ref) => {
  const ariaLabel = useText(PreviousComponent$1, props, 'aria-label', 'Previous page');
  const theme = useContext(ThemeContext);
  return React__default.createElement(StyledNavigation, Object.assign({
    type: "button"
  }, props, {
    "aria-label": ariaLabel,
    ref: ref
  }), theme.rtl ? React__default.createElement(SvgChevronRightStroke, null) : React__default.createElement(SvgChevronLeftStroke, null));
});
PreviousComponent$1.displayName = 'Pagination.Previous';
const Previous$1 = PreviousComponent$1;

export { Previous$1 as Previous };
