/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { rgba, transparentize } from 'polished';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import {
  zdColorGrey800,
  zdColorGrey100,
  zdColorKale800,
  zdColorWhite,
  zdSpacingXxs
} from '@zendeskgarden/css-variables';

const COMPONENT_ID = 'loaders.skeleton';

const fadeInAnimation = keyframes`
  0%, 60% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const skeletonAnimation = keyframes`
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

  animation: ${fadeInAnimation} 700ms linear; /* stylelint-disable-line */

  border-radius: ${zdSpacingXxs};
  background-color: ${props => (props.dark ? rgba(zdColorWhite, 0.1) : rgba(zdColorGrey800, 0.15))};
  width: ${props => props.width};
  height: ${props => props.height};
  overflow: hidden;
  line-height: 0.6; /* stylelint-disable-line */

  &::before {
    position: absolute;
    top: 0;
    left: -1800px;
    animation: ${skeletonAnimation} 1.5s ease-in-out 300ms infinite;
    width: 1600px;
    height: 100%;
    content: '';
    /* stylelint-disable */
    background-image: linear-gradient(
      -45deg,
      ${transparentize(1, zdColorWhite)},
      ${props => transparentize(0.4, props.dark ? zdColorKale800 : zdColorGrey100)},
      ${transparentize(1, zdColorWhite)}
    );
    /* stylelint-enable */
  }

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/**
 * Loader used to create Skeleton objects
 */
function Skeleton({ width, height, style, dark }) {
  return (
    <StyledSkeleton dark={dark} width={width} height={height} style={style}>
      &nbsp;
    </StyledSkeleton>
  );
}

Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  /** Apply styling for use with dark backgrounds */
  dark: PropTypes.bool,
  /** Apply inline styles to the loader */
  style: PropTypes.object
};

Skeleton.defaultProps = {
  width: '100%',
  height: '100%'
};

/** @component */
export default Skeleton;
