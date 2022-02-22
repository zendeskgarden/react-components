/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import { IconButton, IIconButtonProps as IChevronButtonProps } from './IconButton';
import ChevronDownIcon from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const ChevronButton = forwardRef<HTMLButtonElement, IChevronButtonProps>(
  ({ ...buttonProps }, ref) => (
    <IconButton ref={ref} {...buttonProps}>
      <ChevronDownIcon />
    </IconButton>
  )
);

ChevronButton.displayName = 'ChevronButton';

ChevronButton.propTypes = IconButton.propTypes;

ChevronButton.defaultProps = {
  isBasic: false,
  isPill: false,
  size: 'medium'
};
