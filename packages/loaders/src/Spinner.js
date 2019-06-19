/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  STROKE_WIDTH_FRAMES,
  DASHARRAY_FRAMES,
  ROTATION_FRAMES
} from './utils/spinner-coordinates';
import { SpinnerCircle, StyledSVG } from './styled-elements';
import { useSchedule } from '@zendeskgarden/container-schedule';

const COMPONENT_ID = 'loaders.spinner';
const totalFrames = 100;

const computeFrames = (frames, duration) => {
  return Object.entries(frames).reduce((acc, item, index, arr) => {
    const [frame, value] = item;
    const [nextFrame, nextValue] = arr[index + 1] || [totalFrames, arr[0][1]];
    const diff = nextFrame - frame;
    const frameHz = 1000 / 60;

    let subDuration = (duration / (totalFrames - 1)) * diff;
    let lastValue = value;

    acc[frame] = value;
    for (let idx = 0; idx < diff; idx++) {
      lastValue = lastValue + (nextValue - lastValue) * (frameHz / subDuration);
      subDuration = (duration / (totalFrames - 1)) * (diff - idx);

      acc[parseInt(frame, 10) + idx + 1] = lastValue;
    }
    acc[nextFrame] = nextValue;

    return acc;
  }, {});
};

export default function Spinner({
  size = 'inherit',
  duration = 1250,
  color = 'inherit',
  delayMS = 750,
  ...other
}) {
  const strokeWidthValues = computeFrames(STROKE_WIDTH_FRAMES, duration);
  const rotationValues = computeFrames(ROTATION_FRAMES, duration);
  const dasharrayValues = computeFrames(DASHARRAY_FRAMES, duration);

  const elapsed = useSchedule({ duration, delayMS });
  const frame = (elapsed * 100).toFixed(0);

  const strokeWidthValue = strokeWidthValues[frame];
  const rotationValue = rotationValues[frame];
  const dasharrayValue = dasharrayValues[frame];

  const WIDTH = 80;
  const HEIGHT = 80;

  return (
    <StyledSVG
      fontSize={size}
      color={color}
      width={WIDTH}
      height={HEIGHT}
      data-garden-id={COMPONENT_ID}
      {...other}
    >
      <SpinnerCircle
        strokeDasharray={`${dasharrayValue} 250`}
        strokeWidth={strokeWidthValue}
        transform={`rotate(${rotationValue}, ${WIDTH / 2}, ${HEIGHT / 2})`}
      />
    </StyledSVG>
  );
}

Spinner.propTypes = {
  /**
   * Size of the loader. Can inherit from `font-size` styling.
   **/
  size: PropTypes.any,
  /**
   * Duration (ms) of the animation. Default is 1250ms.
   **/
  duration: PropTypes.number,
  /**
   * Color of the loader. Can inherit from `color` styling.
   **/
  color: PropTypes.string,
  /**
   * Delay in MS to begin loader rendering. This helps prevent
   * quick flashes of the loader during normal loading times.
   **/
  delayMS: PropTypes.number
};
