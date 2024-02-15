/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, LiHTMLAttributes } from 'react';
import { useDraggableListContext } from '../../../utils/useDraggableListContext';
import { StyledDropIndicator } from '../../../styled';
import { useText } from '@zendeskgarden/react-theming';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const DropIndicator = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>(
  (props, ref) => {
    const { isHorizontal } = useDraggableListContext();
    const ariaLabel = useText(DropIndicator, props, 'aria-label', 'Drop indicator');

    return (
      <StyledDropIndicator
        {...props}
        aria-label={ariaLabel}
        isHorizontal={isHorizontal}
        ref={ref}
      />
    );
  }
);

DropIndicator.displayName = 'DraggableList.DropIndicator';
