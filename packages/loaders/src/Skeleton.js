/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { rgba } from 'polished';
import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';
import {
  zdColorGrey800,
  zdColorKale700,
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

const skeletonRtlAnimation = keyframes`
  100% {
    right: 100%;
  }
`;

/* eslint-disable */
const StyledSkeleton = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: inline-block;
  position: relative;
  animation: ${fadeInAnimation} 750ms linear;
  border-radius: ${zdSpacingXxs};
  background-color: ${props => (props.dark ? rgba(zdColorWhite, 0.2) : rgba(zdColorGrey800, 0.1))};
  width: ${props => props.customWidth};
  height: ${props => props.customHeight};
  overflow: hidden;
  line-height: 0.6;

  &::before {
    position: absolute;
    top: 0;

    ${props =>
      isRtl(props)
        ? css`
            right: -1800px;
            animation: ${skeletonRtlAnimation} 1.5s ease-in-out 300ms infinite;
          `
        : css`
            left: -1800px;
            animation: ${skeletonAnimation} 1.5s ease-in-out 300ms infinite;
          `}

    /* stylelint-disable function-comma-space-after */
    background-image:
      linear-gradient(${props => (isRtl(props) ? '-45deg' : '45deg')},
      transparent,
      ${props => (props.dark ? rgba(zdColorKale700, 0.4) : rgba(zdColorWhite, 0.6))},
      transparent);
    /* stylelint-enable function-comma-space-after */

    width: 1000px;
    height: 100%;
    content: '';
  }

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;
/* eslint-enable */

/**
 * Loader used to create Skeleton objects
 */
function Skeleton({ width, height, dark, ...other }) {
  return (
    <StyledSkeleton dark={dark} customWidth={width} customHeight={height} {...other}>
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
