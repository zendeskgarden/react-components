/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import GripIcon from '@zendeskgarden/svg-icons/src/12/grip.svg';
import { StyledDraggableGrip } from '../../../styled';

const DraggableGripComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => (
    <StyledDraggableGrip {...props} ref={ref}>
      <GripIcon />
    </StyledDraggableGrip>
  )
);

DraggableGripComponent.displayName = 'Draggable.Grip';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const DraggableGrip = DraggableGripComponent;
