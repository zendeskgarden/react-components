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
import ScheduleContainer from './containers/ScheduleContainer';

const COMPONENT_ID = 'loaders.spinner';

export default class Spinner extends React.Component {
  constructor(props) {
    super(props);

    this.strokeWidthValues = this.computeFrames(STROKE_WIDTH_FRAMES);
    this.rotationValues = this.computeFrames(ROTATION_FRAMES);
    this.dasharrayValues = this.computeFrames(DASHARRAY_FRAMES);
  }

  static propTypes = {
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

  static defaultProps = {
    size: 'inherit',
    color: 'inherit',
    delayMS: 750,
    duration: 1250
  };

  state = {
    frame: 0,
    rawFrame: 0,
    totalFrames: 100,
    delayComplete: false,
    timestamp: 0
  };

  computeFrames = frames => {
    const { duration } = this.props;
    const { totalFrames } = this.state;

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

  performAnimationFrame = (nowTime = 0) => {
    const { totalFrames, rawFrame, timestamp } = this.state;
    const { duration } = this.props;
    const elapsedTime = nowTime - timestamp;

    this.setState(() => {
      const frameMultiplier = (totalFrames + 1) / duration;
      const nextValue = rawFrame + elapsedTime * frameMultiplier;
      const actualFrame = Math.floor(nextValue);
      const frame = actualFrame % totalFrames;
      const currentRawFrame = nextValue % totalFrames;

      return { frame, rawFrame: currentRawFrame, timestamp: nowTime };
    });
  };

  render() {
    const { size, color, delayMS, ...other } = this.props;
    const { frame } = this.state;

    const strokeWidthValue = this.strokeWidthValues[frame];
    const rotationValue = this.rotationValues[frame];
    const dasharrayValue = this.dasharrayValues[frame];

    return (
      <ScheduleContainer tick={this.performAnimationFrame} size={size} delayMS={delayMS}>
        {() => (
          <StyledSVG
            fontSize={size}
            color={color}
            width="80"
            height="80"
            data-garden-id={COMPONENT_ID}
            {...other}
          >
            <SpinnerCircle
              strokeDasharray={`${dasharrayValue} 250`}
              strokeWidth={strokeWidthValue}
              transform={`rotate(${rotationValue})`}
            />
          </StyledSVG>
        )}
      </ScheduleContainer>
    );
  }
}
