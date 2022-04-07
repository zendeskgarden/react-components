/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IToggleIconButtonProps } from '../types';
import { IconButton } from './IconButton';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const ToggleIconButton = forwardRef<HTMLButtonElement, IToggleIconButtonProps>(
  ({ isPressed, ...otherProps }, ref) => (
    <IconButton aria-pressed={isPressed} ref={ref} {...otherProps} />
  )
);

ToggleIconButton.displayName = 'ToggleIconButton';

ToggleIconButton.propTypes = {
  ...IconButton.propTypes,
  isPressed: PropTypes.oneOf([true, false, 'mixed'])
};

ToggleIconButton.defaultProps = {
  isPill: true,
  isBasic: true,
  size: 'medium'
};
