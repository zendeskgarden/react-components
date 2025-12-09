/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React from 'react';
import '../../styled/StyledBlockquote.js';
import '../../styled/StyledCode.js';
import '../../styled/StyledCodeBlock.js';
import '../../styled/StyledCodeBlockContainer.js';
import '../../styled/StyledCodeBlockLine.js';
import '../../styled/StyledCodeBlockToken.js';
import '../../styled/StyledEllipsis.js';
import '../../styled/StyledFont.js';
import { StyledIcon } from '../../styled/StyledIcon.js';
import '../../styled/StyledKbd.js';
import '../../styled/StyledList.js';
import '../../styled/StyledListItem.js';
import '../../styled/StyledParagraph.js';

const StartIconComponent = props => React.createElement(StyledIcon, Object.assign({
  $isStart: true
}, props));
StartIconComponent.displayName = 'Span.StartIcon';
const StartIcon = StartIconComponent;

export { StartIcon };
