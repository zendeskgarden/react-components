/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import '../../styled/StyledAnchor.js';
import '../../styled/StyledButton.js';
import '../../styled/StyledSplitButton.js';
import '../../styled/StyledExternalIcon.js';
import { StyledIcon } from '../../styled/StyledIcon.js';
import '../../styled/StyledIconButton.js';

const StartIconComponent = ({
  isRotated,
  ...props
}) => React__default.createElement(StyledIcon, Object.assign({
  $position: "start",
  $isRotated: isRotated
}, props));
StartIconComponent.displayName = 'Button.StartIcon';
const StartIcon = StartIconComponent;

export { StartIcon };
