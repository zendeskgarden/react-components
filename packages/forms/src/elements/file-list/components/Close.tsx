/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import XIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import { StyledFileClose } from '../../../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Close = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => (
    <StyledFileClose ref={ref} {...props}>
      <XIcon />
    </StyledFileClose>
  )
);

Close.displayName = 'Close';
