/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ButtonHTMLAttributes, forwardRef } from 'react';
import ChevronLeftIcon from 'svg-icons-legacy/src/16/chevron-left-stroke.svg';

import { StyledCursor } from '../../views/pagination/StyledCursor';
import { StyledIcon } from '../../views/pagination/StyledIcon';

const PreviousComponent = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, ...other }, ref) => {
    return (
      <StyledCursor ref={ref} as="button" {...other}>
        <StyledIcon $type="previous">
          <ChevronLeftIcon />
        </StyledIcon>
        <span>{children}</span>
      </StyledCursor>
    );
  }
);

PreviousComponent.displayName = 'CursorPagination.Previous';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Previous = PreviousComponent;
