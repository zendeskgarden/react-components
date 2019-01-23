/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { transparentize } from 'polished';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import { zdColorGrey800, zdColorGrey100, zdSpacingXxs } from '@zendeskgarden/css-variables';

const COMPONENT_ID = 'skeletons.skeleton';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
`;

const skeletonAnimation = keyframes`
  0% {
    left: -1200px;
  }

  100% {
    left: 100%;
  }
`;

const StyledSkeleton = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: inline-block;
  position: relative;

  ${props =>
    props.isHidden
      ? `
      opacity: 0;
      `
      : `
  animation: ${fadeInAnimation} 0.3s linear; /* stylelint-disable-line */
  opacity: 0.1; /* stylelint-disable-line */
  `}

  border-radius: ${zdSpacingXxs};
  background-color: ${zdColorGrey800};
  width: ${props => props.width};
  height: ${props => props.height};
  overflow: hidden;
  line-height: 1;

  &::before {
    position: absolute;
    top: 0;
    left: -1200px;
    animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
    width: 1000px;
    height: 100%;
    content: '';
    /* stylelint-disable */
    background-image: linear-gradient(
      45deg,
      ${transparentize(1, zdColorGrey800)},
      ${transparentize(0.4, zdColorGrey100)},
      ${transparentize(1, zdColorGrey800)}
    );
    /* stylelint-enable */
  }

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

class Skeleton extends Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    dark: PropTypes.bool,
    style: PropTypes.object,
    delayMs: PropTypes.number
  };

  static defaultProps = {
    width: '100%',
    height: '100%',
    delayMs: 400
  };

  state = {
    isSkeletonVisible: false
  };

  componentDidMount() {
    const { delayMs } = this.props;

    this.visibilityDelay = setTimeout(() => {
      this.setState({ isSkeletonVisible: true });
    }, delayMs);
  }

  componentWillUnmount() {
    clearTimeout(this.visibilityDelay);
  }

  render() {
    const { width, height, style, dark } = this.props;
    const { isSkeletonVisible } = this.state;

    return (
      <StyledSkeleton
        isHidden={!isSkeletonVisible}
        dark={dark}
        width={width}
        height={height}
        style={style}
      >
        &nbsp;
      </StyledSkeleton>
    );
  }
}

/** @component */
export default Skeleton;
