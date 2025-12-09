/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import { StyledTitle } from '../styled/StyledTitle.js';

const Title = forwardRef((props, ref) => React__default.createElement(StyledTitle, Object.assign({
  ref: ref
}, props)));
Title.displayName = 'Tooltip.Title';

export { Title };
