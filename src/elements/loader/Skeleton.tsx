/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { ISkeletonProps } from '../../types/elements';
import { StyledSkeleton } from '../../views/loader/StyledSkeleton';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Skeleton = forwardRef<HTMLDivElement, ISkeletonProps>(
  ({ width = '100%', height = '100%', isLight, ...other }, ref) => {
    return (
      <StyledSkeleton
        ref={ref}
        $isLight={isLight}
        $width={width}
        $height={height}
        {...other}
        data-garden-id={COMPONENT_IDS['loaders.skeleton']}
        data-garden-version={PACKAGE_VERSION}
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
