/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import ChevronRightIcon from '@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';

import { StyledIcon, StyledCursor } from '../../../styled';

const NextComponent = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, ...other }, ref) => {
    return (
      <StyledCursor ref={ref} as="button" {...other}>
        <span>{children}</span>
        <StyledIcon $type="next">
          <ChevronRightIcon />
        </StyledIcon>
      </StyledCursor>
    );
  }
);

NextComponent.displayName = 'CursorPagination.Next';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Next = NextComponent;
