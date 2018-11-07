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

  performAnimationFrame = (nowTime = 0) => {
    const { totalFrames, rawFrame, timestamp } = this.state;
    const { duration } = this.props;
    const elapsedTime = nowTime - timestamp;
    const frameMultiplier = (totalFrames + 1) / duration;
    const nextValue = rawFrame + elapsedTime * frameMultiplier;
    const actualFrame = Math.floor(nextValue);
    const frame = actualFrame % totalFrames;
    const currentRawFrame = nextValue % totalFrames;

    this.setState({ frame, rawFrame: currentRawFrame, timestamp: nowTime });
  };

  render() {
    const { size, color, delayMS, ...other } = this.props;
    const { frame } = this.state;
    const strokeWidthValue = STROKE_WIDTH_FRAMES[frame];
    const rotationValue = ROTATION_FRAMES[frame];
    const dasharrayValue = DASHARRAY_FRAMES[frame];
    const WIDTH = 80;
    const HEIGHT = 80;

    return (
      <ScheduleContainer tick={this.performAnimationFrame} size={size} delayMS={delayMS}>
        {() => (
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
        )}
      </ScheduleContainer>
    );
  }
}
