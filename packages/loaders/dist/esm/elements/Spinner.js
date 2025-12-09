/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useSchedule } from '@zendeskgarden/container-schedule';
import { STROKE_WIDTH_FRAMES, ROTATION_FRAMES, DASHARRAY_FRAMES } from '../utils/spinner-coordinates.js';
import '../styled/StyledDots.js';
import { StyledLoadingPlaceholder } from '../styled/StyledLoadingPlaceholder.js';
import '../styled/StyledProgress.js';
import '../styled/StyledSkeleton.js';
import { StyledSpinnerCircle } from '../styled/StyledSpinnerCircle.js';
import { StyledSVG } from '../styled/StyledSVG.js';
import '../styled/StyledInline.js';

const COMPONENT_ID = 'loaders.spinner';
const TOTAL_FRAMES = 100;
const computeFrames = (frames, duration) => {
  return Object.entries(frames).reduce((acc, item, index, arr) => {
    const [frame, value] = item;
    const [nextFrame, nextValue] = arr[index + 1] || [TOTAL_FRAMES, arr[0][1]];
    const diff = parseInt(nextFrame, 10) - parseInt(frame, 10);
    const frameHz = 1000 / 60;
    let subDuration = duration / (TOTAL_FRAMES - 1) * diff;
    let lastValue = value;
    acc[frame] = value;
    for (let idx = 0; idx < diff; idx++) {
      lastValue = lastValue + (nextValue - lastValue) * (frameHz / subDuration);
      subDuration = duration / (TOTAL_FRAMES - 1) * (diff - idx);
      acc[parseInt(frame, 10) + idx + 1] = lastValue;
    }
    acc[nextFrame] = nextValue;
    return acc;
  }, {});
};
const Spinner = forwardRef((_ref, ref) => {
  let {
    size = 'inherit',
    duration = 1250,
    color = 'inherit',
    delayMS = 750,
    ...other
  } = _ref;
  const strokeWidthValues = computeFrames(STROKE_WIDTH_FRAMES, duration);
  const rotationValues = computeFrames(ROTATION_FRAMES, duration);
  const dasharrayValues = computeFrames(DASHARRAY_FRAMES, duration);
  const {
    elapsed,
    delayComplete
  } = useSchedule({
    duration,
    delayMS
  });
  const frame = (elapsed * 100).toFixed(0);
  const strokeWidthValue = strokeWidthValues[frame];
  const rotationValue = rotationValues[frame];
  const dasharrayValue = dasharrayValues[frame];
  const WIDTH = 80;
  const HEIGHT = 80;
  if (!delayComplete && delayMS !== 0) {
    return React.createElement(StyledLoadingPlaceholder, {
      $width: "1em",
      $height: "1em",
      $fontSize: size
    }, "\xA0");
  }
  return React.createElement(StyledSVG, Object.assign({
    $color: color,
    $containerHeight: "1em",
    $containerWidth: "1em",
    $fontSize: size,
    "data-garden-id": COMPONENT_ID,
    $height: HEIGHT,
    ref: ref,
    $width: WIDTH
  }, other), React.createElement(StyledSpinnerCircle, {
    $dasharrayValue: dasharrayValue,
    $strokeWidthValue: strokeWidthValue,
    transform: `rotate(${rotationValue}, ${WIDTH / 2}, ${HEIGHT / 2})`
  }));
});
Spinner.displayName = 'Spinner';
Spinner.propTypes = {
  size: PropTypes.any,
  duration: PropTypes.number,
  color: PropTypes.string,
  delayMS: PropTypes.number
};

export { Spinner };
