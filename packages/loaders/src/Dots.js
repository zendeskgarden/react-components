/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { DOT_ONE_FRAMES, DOT_TWO_FRAMES, DOT_THREE_FRAMES } from './utils/dot-coordinates';
import { DotsCircle, StyledSVG } from './styled-elements';
import ScheduleContainer from './containers/ScheduleContainer';

const COMPONENT_ID = 'loaders.dots';

export default class Dots extends React.Component {
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

  constructor(props) {
    super(props);

    this.state = {
      frame: 0,
      timestamp: 0,
      rawFrame: 0,
      totalFrames: 100
    };
  }

  performAnimationFrame = (timestamp = 0) => {
    const { duration } = this.props;
    const { totalFrames, rawFrame } = this.state;
    const elapsedTime = timestamp - this.state.timestamp;
    const frameMultiplier = (totalFrames + 1) / duration;
    const nextValue = rawFrame + elapsedTime * frameMultiplier;
    const actualFrame = Math.floor(nextValue);
    const frame = actualFrame % totalFrames;
    const currentRawFrame = nextValue % totalFrames;

    this.setState({ timestamp, frame, rawFrame: currentRawFrame });
  };

  render() {
    const { size, color, delayMS, ...other } = this.props;
    const { frame } = this.state;
    const [dotOneX, dotOneY] = DOT_ONE_FRAMES[frame];
    const [dotTwoX, dotTwoY] = DOT_TWO_FRAMES[frame];
    const [dotThreeX, dotThreeY] = DOT_THREE_FRAMES[frame];

    return (
      <ScheduleContainer tick={this.performAnimationFrame} size={size} delayMS={delayMS}>
        {() => (
          <StyledSVG
            fontSize={size}
            color={color}
            width="80"
            height="72"
            data-garden-id={COMPONENT_ID}
            {...other}
          >
            <g fill="currentColor">
              <DotsCircle transform={`translate(${dotOneX} ${dotOneY})`} />
              <DotsCircle transform={`translate(${dotTwoX} ${dotTwoY})`} />
              <DotsCircle transform={`translate(${dotThreeX} ${dotThreeY})`} />
            </g>
          </StyledSVG>
        )}
      </ScheduleContainer>
    );
  }
}
