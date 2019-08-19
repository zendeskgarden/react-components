/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StyledClose } from '../styled';
import XIcon from '@zendeskgarden/svg-icons/src/12/x-stroke.svg';

/**
 * Used to close a Tag. Supports all `<div>` props.
 */
const Close = React.forwardRef(({ ...props }, ref) => (
  <StyledClose ref={ref} {...props}>
    <XIcon />
  </StyledClose>
));

/** @component */
export default Close;
