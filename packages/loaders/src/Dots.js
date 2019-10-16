/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { retrieveXCoordinate, retrieveYCoordinate, KEYFRAME_MAX } from './utils/dot-coordinates';
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
     * Velocity (speed) of the animation. Between -1 and 1.
     * This should only be maniuplated at extreme sizes.
     **/
    velocity: PropTypes.number,
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
    velocity: 0.05,
    delayMS: 750
  };

  state = {
    frame: 0,
    timestamp: 0
  };

  performAnimationFrame = (timestamp = 0) => {
    const { velocity } = this.props;

    let pinnedVelocity = velocity;

    if (velocity < -1) {
      pinnedVelocity = -0.9;
    } else if (velocity > 1) {
      pinnedVelocity = 1;
    }

    this.setState(prevState => {
      const factor = 1000 + 1000 * pinnedVelocity;
      const elapsed = (timestamp - prevState.timestamp) / factor;
      const frame = prevState.frame + (elapsed % KEYFRAME_MAX);

      return { frame, timestamp };
    });
  };

  retrieveFrame = offset => {
    const loop = KEYFRAME_MAX * 2;

    return (this.state.frame + offset * loop) % loop;
  };

  render() {
    const { size, color, delayMS, ...other } = this.props;
    const dotOneFrame = this.retrieveFrame(0);
    const dotTwoFrame = this.retrieveFrame(1 / 3);
    const dotThreeFrame = this.retrieveFrame(2 / 3);

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
              <DotsCircle
                transform={`translate(${retrieveXCoordinate(dotOneFrame)} ${retrieveYCoordinate(
                  dotOneFrame
                )})`}
              />
              <DotsCircle
                transform={`translate(${retrieveXCoordinate(dotTwoFrame)} ${retrieveYCoordinate(
                  dotTwoFrame
                )})`}
              />
              <DotsCircle
                transform={`translate(${retrieveXCoordinate(dotThreeFrame)} ${retrieveYCoordinate(
                  dotThreeFrame
                )})`}
              />
            </g>
          </StyledSVG>
        )}
      </ScheduleContainer>
    );
  }
}
