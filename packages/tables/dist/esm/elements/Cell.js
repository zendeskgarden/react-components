/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import PropTypes from 'prop-types';
import '../styled/StyledBody.js';
import '../styled/StyledCaption.js';
import '../styled/StyledHeaderRow.js';
import '../styled/StyledHead.js';
import { StyledCell } from '../styled/StyledCell.js';
import '../styled/StyledGroupRow.js';
import '../styled/StyledTable.js';
import '../styled/StyledHeaderCell.js';
import { StyledHiddenCell } from '../styled/StyledHiddenCell.js';
import '../styled/StyledSortableButton.js';
import '../styled/StyledOverflowButton.js';
import '../styled/StyledRow.js';
import { useTableContext } from '../utils/useTableContext.js';

const Cell = React__default.forwardRef((_ref, ref) => {
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
  return React__default.createElement(StyledCell, Object.assign({
    ref: ref,
    $size: size,
    $isMinimum: isMinimum,
    $isTruncated: isTruncated,
    $hasOverflow: hasOverflow
  }, props), hidden && props.children ? React__default.createElement(StyledHiddenCell, null, props.children) : props.children);
});
Cell.displayName = 'Table.Cell';
Cell.propTypes = {
  isMinimum: PropTypes.bool,
  isTruncated: PropTypes.bool,
  hasOverflow: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export { Cell };
