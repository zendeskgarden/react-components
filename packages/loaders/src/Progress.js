/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { zdColorGreen600, zdColorGrey200, zdSpacingXs } from '@zendeskgarden/css-variables';

const COMPONENT_ID = 'loaders.progress';

const HEIGHTS = {
  small: 2,
  medium: 6,
  large: 12
};

const sizeToBorderRadius = size => HEIGHTS[size] / 2;

const ProgressBackground = styled.div.attrs(props => ({
  borderRadius: sizeToBorderRadius(props.size)
}))`
  margin: ${zdSpacingXs} 0;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${zdColorGrey200};
  color: ${({ color }) => color || zdColorGreen600};
`;

const ProgressIndicator = styled.div.attrs(props => ({
  height: HEIGHTS[props.size],
  borderRadius: sizeToBorderRadius(props.size)
}))`
  transition: width 0.1s ease-in-out;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background: currentColor;
  width: ${({ value }) => value}%;
  height: ${({ height }) => height}px;
`;

const Progress = forwardRef(({ value, size, ...other }, ref) => {
  const percentage = Math.max(0, Math.min(100, value));

  return (
    <ProgressBackground
      data-garden-id={COMPONENT_ID}
      data-garden-version={PACKAGE_VERSION}
      aria-valuemax="100"
      aria-valuemin="0"
      aria-valuenow={percentage}
      ref={ref}
      role="progressbar"
      size={size}
      {...other}
    >
      <ProgressIndicator value={percentage} size={size} />
    </ProgressBackground>
  );
});

Progress.propTypes = {
  color: PropTypes.string,
  /** The progress as a value between 0 and 100 */
  value: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Progress.defaultProps = {
  value: 0,
  size: 'medium'
};

export default Progress;
