/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledSkeleton } from '../styled';

export interface ISkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Sets the width as a percentage of the the parent element's width */
  width?: string;
  /** Sets the height as a percentage of parent element's height if the height is not already inherited by `line-height` */
  height?: string;
  /** Inverts the color for use on dark backgrounds */
  isLight?: boolean;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Skeleton = forwardRef<HTMLDivElement, ISkeletonProps>(
  ({ width, height, isLight, ...other }, ref) => {
    return (
      <StyledSkeleton
        ref={ref}
        isLight={isLight}
        customWidth={width}
        customHeight={height}
        {...other}
      >
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
