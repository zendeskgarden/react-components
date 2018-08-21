/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { retrieveXTransform, retrieveYTransform, KEYFRAME_MAX } from './utils/dot-transforms';
import { LoadingPlaceholder, StyledCircle, StyledSVG } from './styled-elements';

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
    velocity: 0.5,
    delayMS: 750
  };

  state = {
    frame: 0,
    delayComplete: false,
    timestamp: 0
  };

  componentDidMount() {
    const { delayMS } = this.props;

    this.renderingDelayTimeout = setTimeout(() => {
      this.setState({ delayComplete: true }, () => {
        this.performAnimationFrame();
      });
    }, delayMS);
  }

  componentWillUnmount() {
    clearTimeout(this.renderingDelayTimeout);
    cancelAnimationFrame(this.animationFrame);
  }

  performAnimationFrame = (timestamp = 0) => {
    const { velocity } = this.props;

    this.setState(
      prevState => {
        const factor = 1000 + 1000 * velocity;
        const elapsed = (timestamp - prevState.timestamp) / factor;
        const frame = prevState.frame + (elapsed % KEYFRAME_MAX);

        return { frame, timestamp };
      },
      () => {
        this.animationFrame = requestAnimationFrame(this.performAnimationFrame);
      }
    );
  };

  retrieveFrame = offset => {
    const loop = KEYFRAME_MAX * 2;

    return (this.state.frame + offset * loop) % loop;
  };

  render() {
    const { size, color, delayMS, ...other } = this.props;
    const { delayComplete } = this.state;

    if (!delayComplete && delayMS !== 0) {
      return <LoadingPlaceholder fontSize={size}>&nbsp;</LoadingPlaceholder>;
    }

    const dotOneFrame = this.retrieveFrame(0);
    const dotTwoFrame = this.retrieveFrame(1 / 3);
    const dotThreeFrame = this.retrieveFrame(2 / 3);

    return (
      <StyledSVG fontSize={size} color={color} {...other}>
        <StyledCircle
          transform={`translate(${retrieveXTransform(dotOneFrame)} ${retrieveYTransform(
            dotOneFrame
          )})`}
        />
        <StyledCircle
          transform={`translate(${retrieveXTransform(dotTwoFrame)} ${retrieveYTransform(
            dotTwoFrame
          )})`}
        />
        <StyledCircle
          transform={`translate(${retrieveXTransform(dotThreeFrame)} ${retrieveYTransform(
            dotThreeFrame
          )})`}
        />
      </StyledSVG>
    );
  }
}
