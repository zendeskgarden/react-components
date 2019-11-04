/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StyledSkeleton } from '../styled';

interface ISkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  /** Apply styling for use with dark backgrounds */
  isDark?: boolean;
}

/**
 * Loader used to create Skeleton objects
 */
const Skeleton: React.FC<ISkeletonProps> = ({ width, height, isDark, ...other }) => {
  return (
    <StyledSkeleton isDark={isDark} customWidth={width} customHeight={height} {...other}>
      &nbsp;
    </StyledSkeleton>
  );
};

Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  isDark: PropTypes.bool
};

Skeleton.defaultProps = {
  width: '100%',
  height: '100%'
};

/** @component */
export default Skeleton;
