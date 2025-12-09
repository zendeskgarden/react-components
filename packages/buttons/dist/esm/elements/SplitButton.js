/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import '../styled/StyledAnchor.js';
import '../styled/StyledButton.js';
import { StyledSplitButton } from '../styled/StyledSplitButton.js';
import '../styled/StyledExternalIcon.js';
import '../styled/StyledIcon.js';
import '../styled/StyledIconButton.js';
import { SplitButtonContext } from '../utils/useSplitButtonContext.js';

const SplitButton = forwardRef((_ref, ref) => {
  let {
    children,
    ...other
  } = _ref;
  return React__default.createElement(SplitButtonContext.Provider, {
    value: true
  }, React__default.createElement(StyledSplitButton, Object.assign({
    ref: ref
  }, other), children));
});
SplitButton.displayName = 'SplitButton';

export { SplitButton };
