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

const EndIconComponent = _ref => {
  let {
    isRotated,
    ...props
  } = _ref;
  return React__default.createElement(StyledIcon, Object.assign({
    $position: "end",
    $isRotated: isRotated
  }, props));
};
EndIconComponent.displayName = 'Button.EndIcon';
const EndIcon = EndIconComponent;

export { EndIcon };
