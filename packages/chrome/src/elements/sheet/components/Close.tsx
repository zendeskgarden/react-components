/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';

import { StyledSheetClose } from '../../../styled';

export const SheetCloseButton = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    return (
      <StyledSheetClose aria-label={props['aria-label'] || 'Close Sheet'} ref={ref} {...props}>
        <XStrokeIcon />
      </StyledSheetClose>
    );
  }
);

SheetCloseButton.displayName = 'SheetCloseButton';
