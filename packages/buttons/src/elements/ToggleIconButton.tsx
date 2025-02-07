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
  ({ isPill = true, isBasic = true, size = 'medium', isPressed, ...otherProps }, ref) => (
    <IconButton
      isPill={isPill}
      isBasic={isBasic}
      size={size}
      aria-pressed={isPressed}
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
