/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import '../styled/StyledBlockquote.js';
import '../styled/StyledCode.js';
import '../styled/StyledCodeBlock.js';
import '../styled/StyledCodeBlockContainer.js';
import '../styled/StyledCodeBlockLine.js';
import '../styled/StyledCodeBlockToken.js';
import '../styled/StyledEllipsis.js';
import '../styled/StyledFont.js';
import '../styled/StyledIcon.js';
import { StyledKbd } from '../styled/StyledKbd.js';
import '../styled/StyledList.js';
import '../styled/StyledListItem.js';
import '../styled/StyledParagraph.js';
import { INHERIT_SIZE } from '../types/index.js';

const Kbd = forwardRef(({
  size = 'inherit',
  ...other
}, ref) => React.createElement(StyledKbd, Object.assign({
  $size: size
}, other, {
  ref: ref
})));
Kbd.displayName = 'Kbd';
Kbd.propTypes = {
  size: PropTypes.oneOf(INHERIT_SIZE)
};

export { Kbd };
