/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { IToggleIconButtonProps } from '../types';
import { IconButton } from './IconButton';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const ToggleIconButton = forwardRef<HTMLButtonElement, IToggleIconButtonProps>(
  ({ isPressed, isPill = true, isBasic = true, size = 'medium', ...otherProps }, ref) => (
    <IconButton
      aria-pressed={isPressed}
      isPill={isPill}
      isBasic={isBasic}
      size={size}
      ref={ref}
      {...otherProps}
    />
  )
);

ToggleIconButton.displayName = 'ToggleIconButton';

ToggleIconButton.propTypes = {
  ...IconButton.propTypes,
  isPressed: PropTypes.oneOf([true, false, 'mixed'])
};
