/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledDotsCircleOne, StyledDotsCircleTwo, StyledDotsCircleThree } from '../styled/StyledDots.js';
import '../styled/StyledLoadingPlaceholder.js';
import '../styled/StyledProgress.js';
import '../styled/StyledSkeleton.js';
import '../styled/StyledSpinnerCircle.js';
import { StyledSVG } from '../styled/StyledSVG.js';
import '../styled/StyledInline.js';

const COMPONENT_ID$2 = 'loaders.dots';
const Dots = forwardRef(({
  size = 'inherit',
  color = 'inherit',
  duration = 1250,
  delayMS = 750,
  ...other
}, ref) => {
  return React.createElement(StyledSVG, Object.assign({
    "data-garden-id": COMPONENT_ID$2,
    ref: ref,
    $fontSize: size,
    $color: color,
    $width: "80",
    $height: "72",
    $delayShow: delayMS
  }, other), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement(StyledDotsCircleOne, {
    $duration: duration,
    $delay: delayMS
  }), React.createElement(StyledDotsCircleTwo, {
    $duration: duration,
    $delay: delayMS
  }), React.createElement(StyledDotsCircleThree, {
    $duration: duration,
    $delay: delayMS
  })));
});
Dots.displayName = 'Dots';
Dots.propTypes = {
  size: PropTypes.any,
  duration: PropTypes.number,
  color: PropTypes.string,
  delayMS: PropTypes.number
};

export { Dots };
