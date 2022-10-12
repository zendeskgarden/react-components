/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useText } from '@zendeskgarden/react-theming';
import { IProgressProps, SIZE } from '../types';
import { StyledProgressBackground, StyledProgressIndicator } from '../styled';

const COMPONENT_ID = 'loaders.progress';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Progress = React.forwardRef<HTMLDivElement, IProgressProps>(
  ({ value, size, 'aria-label': label, ...other }, ref) => {
    const percentage = Math.max(0, Math.min(100, value!));

    const ariaLabel = useText(Progress, { 'aria-label': label }, 'aria-label', 'Progress');

    return (
      <StyledProgressBackground
        data-garden-id={COMPONENT_ID}
        data-garden-version={PACKAGE_VERSION}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={percentage}
        role="progressbar"
        size={size!}
        ref={ref}
        aria-label={ariaLabel}
        {...other}
      >
        <StyledProgressIndicator value={percentage} size={size!} />
      </StyledProgressBackground>
    );
  }
);

Progress.displayName = 'Progress';

Progress.propTypes = {
  color: PropTypes.string,
  value: PropTypes.number.isRequired,
  size: PropTypes.oneOf(SIZE)
};

Progress.defaultProps = {
  value: 0,
  size: 'medium'
};
