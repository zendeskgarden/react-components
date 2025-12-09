/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useText } from '@zendeskgarden/react-theming';
import '../styled/StyledDots.js';
import '../styled/StyledLoadingPlaceholder.js';
import '../styled/StyledProgress.js';
import '../styled/StyledSkeleton.js';
import '../styled/StyledSpinnerCircle.js';
import '../styled/StyledSVG.js';
import { StyledInline, StyledCircle } from '../styled/StyledInline.js';

const Inline = forwardRef(({
  size = 16,
  color = 'inherit',
  ...other
}, ref) => {
  const ariaLabel = useText(Inline, other, 'aria-label', 'loading');
  return (
    React.createElement(StyledInline, Object.assign({
      ref: ref,
      $size: size,
      $color: color,
      "aria-label": ariaLabel,
      role: "img"
    }, other), React.createElement(StyledCircle, {
      cx: "14"
    }), React.createElement(StyledCircle, {
      cx: "8"
    }), React.createElement(StyledCircle, {
      cx: "2"
    }))
  );
});
Inline.displayName = 'Inline';
Inline.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};

export { Inline };
