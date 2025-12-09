/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import SvgSortStroke from '../node_modules/@zendeskgarden/svg-icons/src/12/sort-stroke.svg.js';
import SvgSortFill from '../node_modules/@zendeskgarden/svg-icons/src/12/sort-fill.svg.js';
import { SORT } from '../types/index.js';
import '../styled/StyledBody.js';
import '../styled/StyledCaption.js';
import '../styled/StyledHeaderRow.js';
import '../styled/StyledHead.js';
import '../styled/StyledCell.js';
import '../styled/StyledGroupRow.js';
import '../styled/StyledTable.js';
import { StyledHeaderCell } from '../styled/StyledHeaderCell.js';
import '../styled/StyledHiddenCell.js';
import { StyledSortableButton, StyledSortableStrokeIconWrapper, StyledSortableFillIconWrapper } from '../styled/StyledSortableButton.js';
import '../styled/StyledOverflowButton.js';
import '../styled/StyledRow.js';

const SortableCell = forwardRef(({
  sort,
  cellProps = {},
  width,
  children,
  ...sortableButtonProps
}, ref) => {
  const {
    isMinimum,
    isTruncated,
    hasOverflow,
    ...otherCellProps
  } = cellProps;
  let ariaSortValue = 'none';
  if (sort === 'asc') {
    ariaSortValue = 'ascending';
  } else if (sort === 'desc') {
    ariaSortValue = 'descending';
  }
  const SortIcon = sort === undefined ? SvgSortStroke : SvgSortFill;
  return React__default.createElement(StyledHeaderCell, Object.assign({
    "aria-sort": ariaSortValue,
    width: width,
    $isMinimum: isMinimum,
    $isTruncated: isTruncated,
    $hasOverflow: hasOverflow
  }, otherCellProps), React__default.createElement(StyledSortableButton, Object.assign({
    $sort: sort,
    ref: ref
  }, sortableButtonProps), children, React__default.createElement(StyledSortableStrokeIconWrapper, null, React__default.createElement(SortIcon, null)), React__default.createElement(StyledSortableFillIconWrapper, null, React__default.createElement(SvgSortFill, null))));
});
SortableCell.displayName = 'Table.SortableCell';
SortableCell.propTypes = {
  sort: PropTypes.oneOf(SORT),
  cellProps: PropTypes.any,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export { SortableCell };
