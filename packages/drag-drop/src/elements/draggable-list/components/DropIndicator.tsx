/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, LiHTMLAttributes } from 'react';
import { useDraggableListContext } from '../../../utils/useDraggableListContext';
import { StyledDropIndicator } from '../../../styled';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const DropIndicator = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>(
  (props, ref) => {
    const { isHorizontal } = useDraggableListContext();

    return (
      <StyledDropIndicator aria-hidden="true" {...props} isHorizontal={isHorizontal} ref={ref} />
    );
  }
);

DropIndicator.displayName = 'DraggableList.DropIndicator';
