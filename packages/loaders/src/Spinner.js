/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { dPathFrames, strokeWidthFrames } from './utils/spinner-coordinates';
import { LoadingPlaceholder, Path, StyledSVG } from './styled-elements';

const COMPONENT_ID = 'loaders.spinner';

export default class Spinner extends React.Component {
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
    rawFrame: 0,
    totalFrames: dPathFrames.length - 1,
    duration: 1250,
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

  performAnimationFrame = (nowTime = 0) => {
    const { totalFrames, duration, rawFrame, timestamp } = this.state;

    this.setState(
      () => {
        const frameMultiplier = (totalFrames + 1) / duration;
        const elaspedTime = nowTime - timestamp;
        const nextValue = rawFrame + elaspedTime * frameMultiplier;
        const actualFrame = Math.floor(nextValue);
        const frame = actualFrame % totalFrames;
        const currentRawFrame = nextValue % totalFrames;

        return { frame, rawFrame: currentRawFrame, timestamp: nowTime };
      },
      () => {
        this.animationFrame = requestAnimationFrame(this.performAnimationFrame);
      }
    );
  };

  render() {
    const { size, color, delayMS, ...other } = this.props;
    const { delayComplete } = this.state;

    if (!delayComplete && delayMS !== 0) {
      return <LoadingPlaceholder fontSize={size}>&nbsp;</LoadingPlaceholder>;
    }

    return (
      <StyledSVG
        fontSize={size}
        color={color}
        width="80"
        height="80"
        data-garden-id={COMPONENT_ID}
        {...other}
      >
        <Path d={dPathFrames[this.state.frame]} strokeWidth={strokeWidthFrames[this.state.frame]} />
      </StyledSVG>
    );
  }
}
