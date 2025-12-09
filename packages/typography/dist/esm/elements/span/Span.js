/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import '../../styled/StyledBlockquote.js';
import '../../styled/StyledCode.js';
import '../../styled/StyledCodeBlock.js';
import '../../styled/StyledCodeBlockContainer.js';
import '../../styled/StyledCodeBlockLine.js';
import '../../styled/StyledCodeBlockToken.js';
import '../../styled/StyledEllipsis.js';
import { StyledFont } from '../../styled/StyledFont.js';
import '../../styled/StyledIcon.js';
import '../../styled/StyledKbd.js';
import '../../styled/StyledList.js';
import '../../styled/StyledListItem.js';
import '../../styled/StyledParagraph.js';
import { StartIcon } from './StartIcon.js';
import { Icon } from './Icon.js';

const SpanComponent = forwardRef((_ref, ref) => {
  let {
    hue,
    isBold,
    isMonospace,
    tag = 'span',
    ...other
  } = _ref;
  return React.createElement(StyledFont, Object.assign({
    $hue: hue,
    $isBold: isBold,
    $isMonospace: isMonospace,
    $size: "inherit",
    as: tag,
    ref: ref
  }, other));
});
SpanComponent.displayName = 'Span';
SpanComponent.propTypes = {
  tag: PropTypes.any,
  isBold: PropTypes.bool,
  isMonospace: PropTypes.bool,
  hue: PropTypes.string
};
const Span = SpanComponent;
Span.Icon = Icon;
Span.StartIcon = StartIcon;

export { Span };
