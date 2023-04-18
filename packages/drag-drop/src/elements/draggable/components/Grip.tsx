/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import GripIcon from '@zendeskgarden/svg-icons/src/12/grip.svg';
import { StyledGrip } from '../../../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Grip = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <StyledGrip {...props} ref={ref}>
    <GripIcon />
  </StyledGrip>
));

Grip.displayName = 'Draggable.Grip';
