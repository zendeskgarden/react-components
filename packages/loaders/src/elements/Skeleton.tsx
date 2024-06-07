/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ISkeletonProps } from '../types';
import { StyledSkeleton } from '../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Skeleton = forwardRef<HTMLDivElement, ISkeletonProps>(
  ({ width, height, isLight, ...other }, ref) => {
    return (
      <StyledSkeleton ref={ref} $isLight={isLight} $width={width} $height={height} {...other}>
        &nbsp;
      </StyledSkeleton>
    );
  }
);

Skeleton.displayName = 'Skeleton';

Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  isLight: PropTypes.bool
};

Skeleton.defaultProps = {
  width: '100%',
  height: '100%'
};
