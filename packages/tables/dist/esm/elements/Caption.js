/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import '../styled/StyledBody.js';
import { StyledCaption } from '../styled/StyledCaption.js';
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

const Caption = forwardRef((props, ref) => React__default.createElement(StyledCaption, Object.assign({
  ref: ref
}, props)));
Caption.displayName = 'Table.Caption';

export { Caption };
