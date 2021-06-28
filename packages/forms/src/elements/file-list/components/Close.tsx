/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import XIcon from '@zendeskgarden/svg-icons/src/12/x-stroke.svg';
import { StyledClose } from '../../../styled';

export const Close = React.forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  (props, ref) => (
    <StyledClose ref={ref} {...props}>
      <XIcon />
    </StyledClose>
  )
);

Close.displayName = 'Close';
