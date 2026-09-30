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
import { useSplitButtonContext } from '../utils/useSplitButtonContext';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const ChevronButton = forwardRef<HTMLButtonElement, IIconButtonProps>(
  ({ isBasic, isPill, ...props }, ref) => {
    const splitButton = useSplitButtonContext();

    return (
      <IconButton
        ref={ref}
        isBasic={isBasic ?? splitButton?.isBasic ?? false}
        isPill={isPill ?? splitButton?.isPill ?? false}
        {...props}
      >
        <ChevronDownIcon />
      </IconButton>
    );
  }
);

ChevronButton.displayName = 'ChevronButton';

ChevronButton.propTypes = IconButton.propTypes;
