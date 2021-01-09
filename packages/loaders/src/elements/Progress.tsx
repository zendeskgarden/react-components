/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledProgressBackground, StyledProgressIndicator } from '../styled';

const COMPONENT_ID = 'loaders.progress';

export interface IProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** Sets the progress as a value between 0 and 100 */
  value?: number;
  /**
   * Sets the foreground bar's fill color.
   * Defaults to the `successHue` [theme](/components/theme-object#colors) value.
   */
  color?: string;
  /** Adjusts the height */
  size?: 'small' | 'medium' | 'large';
}

const Progress = React.forwardRef<HTMLDivElement, IProgressProps>(
  ({ value, size, ...other }, ref) => {
    const percentage = Math.max(0, Math.min(100, value!));

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
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Progress.defaultProps = {
  value: 0,
  size: 'medium'
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export default Progress as React.FunctionComponent<
  IProgressProps & React.RefAttributes<HTMLDivElement>
>;
