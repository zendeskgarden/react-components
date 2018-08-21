/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import { getDotTransforms, KEYFRAME_MAX } from './utils/transforms';

const COMPONENT_ID = 'loaders.dots';

const StyledCircle = styled.circle.attrs({
  cx: 9,
  cy: 9,
  r: 9,
  transform: props => props.transform
})`
  will-change: transform;
`;

StyledCircle.propTypes = {
  transform: PropTypes.string
};

const StyledSvg = styled.svg.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  xmlns: 'http://www.w3.org/2000/svg',
  width: 80,
  height: 72,
  focusable: 'false',
  viewBox: '0 0 80 72',
  role: 'progressbar'
})`
  width: 1em;
  height: 0.9em; /* stylelint-disable-line */
  color: ${props => props.color};
  font-size: ${props => props.fontSize};

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

StyledSvg.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.any
};

const StyledSVG = ({ children, fontSize, ...other }) => {
  return (
    <StyledSvg fontSize={fontSize} {...other}>
      <g fill="currentColor">{children}</g>
    </StyledSvg>
  );
};

StyledSVG.propTypes = {
  children: PropTypes.node,
  fontSize: PropTypes.any
};

const LoadingPlaceholder = styled.div.attrs({
  role: 'progressbar'
})`
  display: inline;
  width: 1em;
  height: 0.9em; /* stylelint-disable-line */
  font-size: ${props => props.fontSize};
`;

LoadingPlaceholder.propTypes = {
  fontSize: PropTypes.any
};

export default class Dots extends React.Component {
  static propTypes = {
    /** Size of the loader. Can inherit from `font-size` styling */
    size: PropTypes.any,
    /** Velocity (speed) of the animation */
    velocity: PropTypes.number, // between -1 and 1
    /** Color of the loader. Can inherit from `color` styling */
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
    velocity: 0,
    delayMS: 750
  };

  constructor(...args) {
    super(...args);

    this.state = {
      frame: 0,
      delayComplete: false,
      timestamp: 0
    };
  }

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
    const { size, delayMS, ...other } = this.props;
    const { delayComplete } = this.state;

    if (!delayComplete && delayMS !== 0) {
      return <LoadingPlaceholder fontSize={size}>&nbsp;</LoadingPlaceholder>;
    }

    const dotTransforms = getDotTransforms();
    const dotOneFrame = this.retrieveFrame(0);
    const dotTwoFrame = this.retrieveFrame(1 / 3);
    const dotThreeFrame = this.retrieveFrame(2 / 3);

    return (
      <StyledSVG fontSize={size} {...other}>
        <StyledCircle
          transform={`translate(${dotTransforms.retrieveX(dotOneFrame)} ${dotTransforms.retrieveY(
            dotOneFrame
          )})`}
        />
        <StyledCircle
          transform={`translate(${dotTransforms.retrieveX(dotTwoFrame)} ${dotTransforms.retrieveY(
            dotTwoFrame
          )})`}
        />
        <StyledCircle
          transform={`translate(${dotTransforms.retrieveX(dotThreeFrame)} ${dotTransforms.retrieveY(
            dotThreeFrame
          )})`}
        />
      </StyledSVG>
    );
  }
}
