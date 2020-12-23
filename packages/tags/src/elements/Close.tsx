/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledClose } from '../styled';
import XIcon from '@zendeskgarden/svg-icons/src/12/x-stroke.svg';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
const Close = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <StyledClose ref={ref} {...props}>
    <XIcon />
  </StyledClose>
));

Close.displayName = 'Close';

/** @component */
export default Close;
