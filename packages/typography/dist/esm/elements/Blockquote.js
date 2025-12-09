/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { SIZE } from '../types/index.js';
import { StyledBlockquote } from '../styled/StyledBlockquote.js';
import '../styled/StyledCode.js';
import '../styled/StyledCodeBlock.js';
import '../styled/StyledCodeBlockContainer.js';
import '../styled/StyledCodeBlockLine.js';
import '../styled/StyledCodeBlockToken.js';
import '../styled/StyledEllipsis.js';
import '../styled/StyledFont.js';
import '../styled/StyledIcon.js';
import '../styled/StyledKbd.js';
import '../styled/StyledList.js';
import '../styled/StyledListItem.js';
import '../styled/StyledParagraph.js';

const Blockquote = forwardRef((_ref, ref) => {
  let {
    size = 'medium',
    ...props
  } = _ref;
  return React.createElement(StyledBlockquote, Object.assign({
    ref: ref,
    size: size
  }, props));
});
Blockquote.displayName = 'Blockquote';
Blockquote.propTypes = {
  size: PropTypes.oneOf(SIZE)
};

export { Blockquote };
