/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import '../styled/StyledDots.js';
import '../styled/StyledLoadingPlaceholder.js';
import '../styled/StyledProgress.js';
import { StyledSkeleton } from '../styled/StyledSkeleton.js';
import '../styled/StyledSpinnerCircle.js';
import '../styled/StyledSVG.js';
import '../styled/StyledInline.js';

const Skeleton = forwardRef(({
  width = '100%',
  height = '100%',
  isLight,
  ...other
}, ref) => {
  return React.createElement(StyledSkeleton, Object.assign({
    ref: ref,
    $isLight: isLight,
    $width: width,
    $height: height
  }, other), "\xA0");
});
Skeleton.displayName = 'Skeleton';
Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  isLight: PropTypes.bool
};

export { Skeleton };
