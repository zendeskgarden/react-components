/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import SvgOverflowVerticalStroke from '../node_modules/@zendeskgarden/svg-icons/src/16/overflow-vertical-stroke.svg.js';
import '../styled/StyledBody.js';
import '../styled/StyledCaption.js';
import '../styled/StyledHeaderRow.js';
import '../styled/StyledHead.js';
import '../styled/StyledCell.js';
import '../styled/StyledGroupRow.js';
import '../styled/StyledTable.js';
import '../styled/StyledHeaderCell.js';
import '../styled/StyledHiddenCell.js';
import '../styled/StyledSortableButton.js';
import { StyledOverflowButton } from '../styled/StyledOverflowButton.js';
import '../styled/StyledRow.js';
import { useTableContext } from '../utils/useTableContext.js';

const OverflowButton = forwardRef((props, ref) => {
  const {
    size
  } = useTableContext();
  return React__default.createElement(StyledOverflowButton, Object.assign({
    type: "button",
    $size: size,
    ref: ref
  }, props, {
    focusInset: true
  }), React__default.createElement(SvgOverflowVerticalStroke, null));
});
OverflowButton.displayName = 'Table.OverflowButton';

export { OverflowButton };
