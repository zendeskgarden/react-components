/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import ChevronDownIcon from '@zendeskgarden/svg-icons/src/chevron-down.svg';
import { forwardRef } from 'react';

import { IIconButtonProps } from '../../types/elements';
import { IconButton } from './IconButton';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const ChevronButton = forwardRef<HTMLButtonElement, IIconButtonProps>(
  ({ isBasic = false, isPill, size = 'medium', ...props }, ref) => (
    <IconButton ref={ref} isBasic={isBasic} isPill={isPill} size={size} {...props}>
      <ChevronDownIcon />
    </IconButton>
  )
);

ChevronButton.displayName = 'ChevronButton';

ChevronButton.propTypes = IconButton.propTypes;
