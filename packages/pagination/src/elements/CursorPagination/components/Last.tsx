/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import ChevronDoubleRight from '@zendeskgarden/svg-icons/src/16/chevron-double-right-stroke.svg';
import { StyledIcon, StyledCursor } from '../../../styled';

export const Last = React.forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  ({ children, ...other }, ref) => {
    return (
      <StyledCursor ref={ref} as="button" {...other}>
        <span>{children}</span>
        <StyledIcon type="last">
          <ChevronDoubleRight />
        </StyledIcon>
      </StyledCursor>
    );
  }
);

Last.displayName = 'Last';
