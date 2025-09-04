/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import { IconButton } from './IconButton';
import ChevronDownIcon from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { IIconButtonProps } from '../types';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const ChevronButton = forwardRef<HTMLButtonElement, IIconButtonProps>(
  ({ isBasic = false, isPill = false, size = 'medium', ...props }, ref) => (
    <IconButton ref={ref} isBasic={isBasic} isPill={isPill} size={size} {...props}>
      <ChevronDownIcon />
    </IconButton>
  )
);

ChevronButton.displayName = 'ChevronButton';

ChevronButton.propTypes = IconButton.propTypes;
