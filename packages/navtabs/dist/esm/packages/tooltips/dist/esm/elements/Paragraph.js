/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import { StyledParagraph } from '../styled/StyledParagraph.js';

const Paragraph = forwardRef((props, ref) => React__default.createElement(StyledParagraph, Object.assign({
  ref: ref
}, props)));
Paragraph.displayName = 'Tooltip.Paragraph';

export { Paragraph };
