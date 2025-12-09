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
import { StyledEllipsis } from '../styled/StyledEllipsis.js';
import '../styled/StyledFont.js';
import '../styled/StyledIcon.js';
import '../styled/StyledKbd.js';
import '../styled/StyledList.js';
import '../styled/StyledListItem.js';
import '../styled/StyledParagraph.js';

const Ellipsis = forwardRef(({
  children,
  title,
  tag = 'div',
  ...other
}, ref) => {
  let textContent = undefined;
  if (title !== undefined) {
    textContent = title;
  } else if (typeof children === 'string') {
    textContent = children;
  }
  return React.createElement(StyledEllipsis, Object.assign({
    as: tag,
    ref: ref,
    title: textContent
  }, other), children);
});
Ellipsis.displayName = 'Ellipsis';
Ellipsis.propTypes = {
  title: PropTypes.string,
  tag: PropTypes.any
};

export { Ellipsis };
