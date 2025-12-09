/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React from 'react';
import PropTypes from 'prop-types';
import { useText } from '@zendeskgarden/react-theming';
import { SIZE } from '../types/index.js';
import '../styled/StyledDots.js';
import '../styled/StyledLoadingPlaceholder.js';
import { StyledProgressBackground, StyledProgressIndicator } from '../styled/StyledProgress.js';
import '../styled/StyledSkeleton.js';
import '../styled/StyledSpinnerCircle.js';
import '../styled/StyledSVG.js';
import '../styled/StyledInline.js';

const COMPONENT_ID = 'loaders.progress';
const Progress = React.forwardRef((_ref, ref) => {
  let {
    color,
    value = 0,
    size = 'medium',
    'aria-label': label,
    ...other
  } = _ref;
  const percentage = Math.max(0, Math.min(100, value));
  const ariaLabel = useText(Progress, {
    'aria-label': label
  }, 'aria-label', 'Progress');
  return (
    React.createElement(StyledProgressBackground, Object.assign({
      "data-garden-id": COMPONENT_ID,
      "data-garden-version": '9.12.3',
      "aria-valuemax": 100,
      "aria-valuemin": 0,
      "aria-valuenow": percentage,
      role: "progressbar",
      $size: size,
      $color: color,
      ref: ref,
      "aria-label": ariaLabel
    }, other), React.createElement(StyledProgressIndicator, {
      $value: percentage,
      $size: size
    }))
  );
});
Progress.displayName = 'Progress';
Progress.propTypes = {
  color: PropTypes.string,
  value: PropTypes.number.isRequired,
  size: PropTypes.oneOf(SIZE)
};

export { Progress };
