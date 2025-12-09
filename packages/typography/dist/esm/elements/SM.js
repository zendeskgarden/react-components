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
import { StyledFont } from '../styled/StyledFont.js';
import '../styled/StyledIcon.js';
import '../styled/StyledKbd.js';
import '../styled/StyledList.js';
import '../styled/StyledListItem.js';
import '../styled/StyledParagraph.js';

const SM = forwardRef(({
  isBold,
  isMonospace,
  tag = 'div',
  ...other
}, ref) => React.createElement(StyledFont, Object.assign({
  $isBold: isBold,
  $isMonospace: isMonospace,
  as: tag,
  ref: ref,
  $size: "small"
}, other)));
SM.displayName = 'SM';
SM.propTypes = {
  tag: PropTypes.any,
  isBold: PropTypes.bool,
  isMonospace: PropTypes.bool
};

export { SM };
