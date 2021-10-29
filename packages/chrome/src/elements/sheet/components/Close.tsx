/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import { IconButton } from '@zendeskgarden/react-buttons';

import { StyledSheetCloseButtonContainer } from '../../../styled';

export const SheetCloseButton = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return (
      <StyledSheetCloseButtonContainer>
        <IconButton aria-expanded aria-label="Close Sheet" ref={ref as any} {...(props as any)}>
          <XStrokeIcon />
        </IconButton>
      </StyledSheetCloseButtonContainer>
    );
  }
);

SheetCloseButton.displayName = 'SheetCloseButton';
