/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import { StyledBody } from '../styled/StyledBody.js';
import '../styled/StyledCaption.js';
import '../styled/StyledHeaderRow.js';
import '../styled/StyledHead.js';
import '../styled/StyledCell.js';
import '../styled/StyledGroupRow.js';
import '../styled/StyledTable.js';
import '../styled/StyledHeaderCell.js';
import '../styled/StyledHiddenCell.js';
import '../styled/StyledSortableButton.js';
import '../styled/StyledOverflowButton.js';
import '../styled/StyledRow.js';

const Body = forwardRef((props, ref) => React__default.createElement(StyledBody, Object.assign({
  ref: ref
}, props)));
Body.displayName = 'Table.Body';

export { Body };
