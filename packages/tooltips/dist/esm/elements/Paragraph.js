/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { forwardRef } from 'react';
import { StyledParagraph } from '../styled/StyledParagraph.js';
import '../styled/StyledTitle.js';
import '../styled/StyledTooltip.js';
import '../styled/StyledTooltipWrapper.js';

const Paragraph = forwardRef((props, ref) => React.createElement(StyledParagraph, Object.assign({
  ref: ref
}, props)));
Paragraph.displayName = 'Tooltip.Paragraph';

export { Paragraph };
