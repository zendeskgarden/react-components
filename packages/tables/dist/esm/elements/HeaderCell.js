/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import '../styled/StyledBody.js';
import '../styled/StyledCaption.js';
import '../styled/StyledHeaderRow.js';
import '../styled/StyledHead.js';
import '../styled/StyledCell.js';
import '../styled/StyledGroupRow.js';
import '../styled/StyledTable.js';
import { StyledHeaderCell } from '../styled/StyledHeaderCell.js';
import { StyledHiddenCell } from '../styled/StyledHiddenCell.js';
import '../styled/StyledSortableButton.js';
import '../styled/StyledOverflowButton.js';
import '../styled/StyledRow.js';
import { useTableContext } from '../utils/useTableContext.js';
import { Cell } from './Cell.js';

const HeaderCell = forwardRef((_ref, ref) => {
  let {
    hidden,
    isMinimum,
    isTruncated,
    hasOverflow,
    ...props
  } = _ref;
  const {
    size
  } = useTableContext();
  return React__default.createElement(StyledHeaderCell, Object.assign({
    ref: ref,
    $size: size,
    $isMinimum: isMinimum,
    $isTruncated: isTruncated,
    $hasOverflow: hasOverflow
  }, props), hidden && props.children ? React__default.createElement(StyledHiddenCell, null, props.children) : props.children);
});
HeaderCell.displayName = 'Table.HeaderCell';
HeaderCell.propTypes = Cell.propTypes;

export { HeaderCell };
