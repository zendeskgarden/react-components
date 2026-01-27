/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { StyledSkeleton } from '../styled';
import { ISkeletonProps } from '../types';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Skeleton = forwardRef<HTMLDivElement, ISkeletonProps>(
  ({ width = '100%', height = '100%', isLight, ...other }, ref) => {
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
