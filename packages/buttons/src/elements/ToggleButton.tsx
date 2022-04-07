/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IToggleButtonProps } from '../types';
import { Button } from './Button';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const ToggleButton = forwardRef<HTMLButtonElement, IToggleButtonProps>(
  ({ isPressed, ...otherProps }, ref) => (
    <Button aria-pressed={isPressed} ref={ref} {...otherProps} />
  )
);

ToggleButton.displayName = 'ToggleButton';

ToggleButton.propTypes = {
  ...Button.propTypes,
  isPressed: PropTypes.oneOf([true, false, 'mixed'])
};

ToggleButton.defaultProps = {
  size: 'medium'
};
