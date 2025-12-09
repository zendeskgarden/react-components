/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { forwardRef } from 'react';
import '../styled/StyledParagraph.js';
import { StyledTitle } from '../styled/StyledTitle.js';
import '../styled/StyledTooltip.js';
import '../styled/StyledTooltipWrapper.js';

const Title = forwardRef((props, ref) => React.createElement(StyledTitle, Object.assign({
  ref: ref
}, props)));
Title.displayName = 'Tooltip.Title';

export { Title };
