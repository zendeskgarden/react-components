/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { isRtl } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'loaders.inline';

const pulseAnimation = keyframes`
  0%, 100% {
    opacity: .2;
  }

  50% {
    opacity: .8;
  }
`;

export const StyledCircle = styled.circle.attrs({
  fill: 'currentColor',
  cy: 2,
  r: 2
})``;

const StyledTypingSvg = styled.svg.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  viewBox: '0 0 16 4',
  width: props.size,
  height: props.size * 0.25
}))`
  color: ${({ color }) => color};

  ${StyledCircle} {
    opacity: 0.2;

    &:nth-child(1) {
      animation: ${pulseAnimation} 1s infinite;
      animation-delay: ${props => (isRtl(props) ? 'unset' : '0.4s')};
    }

    &:nth-child(2) {
      animation: ${pulseAnimation} 1s infinite;
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation: ${pulseAnimation} 1s infinite;
      animation-delay: ${props => (isRtl(props) ? '0.4s' : 'unset')};
    }
  }
`;

/**
 * All other props are spread onto the root `<svg>` element
 */
const Inline = ({ size, color, ...other }) => {
  return (
    <StyledTypingSvg size={size} color={color} {...other}>
      <StyledCircle cx="14" />
      <StyledCircle cx="8" />
      <StyledCircle cx="2" />
    </StyledTypingSvg>
  );
};

Inline.propTypes = {
  /* Width of the loader in px */
  size: PropTypes.number,
  color: PropTypes.string
};

Inline.defaultProps = {
  size: 16,
  color: 'inherit'
};

export default Inline;
