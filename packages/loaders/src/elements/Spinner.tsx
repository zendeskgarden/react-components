/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useSchedule } from '@zendeskgarden/container-schedule';

import {
  STROKE_WIDTH_FRAMES,
  DASHARRAY_FRAMES,
  ROTATION_FRAMES
} from '../utils/spinner-coordinates';
import { StyledSpinnerCircle, StyledSVG, StyledLoadingPlaceholder } from '../styled';

const COMPONENT_ID = 'loaders.spinner';
const TOTAL_FRAMES = 100;

const computeFrames = (
  frames: Record<number, number>,
  duration: number
): Record<string, number> => {
  return Object.entries<number>(frames).reduce((acc: Record<string, number>, item, index, arr) => {
    const [frame, value] = item;
    const [nextFrame, nextValue] = arr[index + 1] || [TOTAL_FRAMES, arr[0][1]];
    const diff = parseInt(nextFrame, 10) - parseInt(frame, 10);
    const frameHz = 1000 / 60;

    let subDuration = (duration / (TOTAL_FRAMES - 1)) * diff;
    let lastValue = value;

    acc[frame] = value;
    for (let idx = 0; idx < diff; idx++) {
      lastValue = lastValue + (nextValue - lastValue) * (frameHz / subDuration);
      subDuration = (duration / (TOTAL_FRAMES - 1)) * (diff - idx);

      acc[parseInt(frame, 10) + idx + 1] = lastValue;
    }
    acc[nextFrame] = nextValue;

    return acc;
  }, {});
};

export interface ISpinnerProps extends React.SVGAttributes<SVGSVGElement> {
  /**
   * Sets the height and width in pixels. Inherits the parent's font size by default.
   **/
  size?: string;
  /**
   * Sets the length of the animation cycle in milliseconds
   **/
  duration?: number;
  /**
   * Sets the fill color. Inherits the parent's `color` by default.
   **/
  color?: string;
  /**
   * Delays displaying the loader to prevent a render flash during normal loading times
   **/
  delayMS?: number;
}

/**
 * @extends SVGAttributes<SVGSVGElement>
 */
const Spinner: React.FC<ISpinnerProps> = ({ size, duration, color, delayMS, ...other }) => {
  const strokeWidthValues = computeFrames(STROKE_WIDTH_FRAMES, duration!);
  const rotationValues = computeFrames(ROTATION_FRAMES, duration!);
  const dasharrayValues = computeFrames(DASHARRAY_FRAMES, duration!);

  const { elapsed, delayComplete } = useSchedule({ duration, delayMS });
  const frame = (elapsed * 100).toFixed(0);

  const strokeWidthValue = strokeWidthValues[frame];
  const rotationValue = rotationValues[frame];
  const dasharrayValue = dasharrayValues[frame];

  const WIDTH = 80;
  const HEIGHT = 80;

  if (!delayComplete && delayMS !== 0) {
    return (
      <StyledLoadingPlaceholder width="1em" height="1em" fontSize={size!}>
        &nbsp;
      </StyledLoadingPlaceholder>
    );
  }

  return (
    <StyledSVG
      fontSize={size}
      color={color}
      width={WIDTH}
      height={HEIGHT}
      dataGardenId={COMPONENT_ID}
      containerHeight="1em"
      containerWidth="1em"
      {...other}
    >
      <StyledSpinnerCircle
        dasharrayValue={dasharrayValue}
        strokeWidthValue={strokeWidthValue}
        transform={`rotate(${rotationValue}, ${WIDTH / 2}, ${HEIGHT / 2})`}
      />
    </StyledSVG>
  );
};

Spinner.propTypes = {
  size: PropTypes.any,
  duration: PropTypes.number,
  color: PropTypes.string,
  delayMS: PropTypes.number
};

Spinner.defaultProps = {
  size: 'inherit',
  duration: 1250,
  color: 'inherit',
  delayMS: 750
};

export default Spinner;
