/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import '../styled/StyledBody.js';
import '../styled/StyledCaption.js';
import { StyledHeaderRow } from '../styled/StyledHeaderRow.js';
import '../styled/StyledHead.js';
import '../styled/StyledCell.js';
import '../styled/StyledGroupRow.js';
import '../styled/StyledTable.js';
import '../styled/StyledHeaderCell.js';
import '../styled/StyledHiddenCell.js';
import '../styled/StyledSortableButton.js';
import '../styled/StyledOverflowButton.js';
import '../styled/StyledRow.js';
import { useTableContext } from '../utils/useTableContext.js';

const HeaderRow = React__default.forwardRef((props, ref) => {
  const {
    size
  } = useTableContext();
  return React__default.createElement(StyledHeaderRow, Object.assign({
    ref: ref,
    $size: size
  }, props));
});
HeaderRow.displayName = 'Table.HeaderRow';

export { HeaderRow };
