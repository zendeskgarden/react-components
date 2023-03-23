/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, LiHTMLAttributes, PropsWithChildren } from 'react';
import { useDraggableListContext } from '../../../utils/useDraggableListContext';
import { StyledDraggableListDropIndicator } from '../../../styled';

const DraggableListDropIndicatorComponent = forwardRef<
  HTMLLIElement,
  PropsWithChildren<LiHTMLAttributes<HTMLLIElement>>
>((props, ref) => {
  const { isHorizontal } = useDraggableListContext();

  return <StyledDraggableListDropIndicator {...props} isHorizontal={isHorizontal} ref={ref} />;
});

DraggableListDropIndicatorComponent.displayName = 'DraggableList.DropIndicator';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const DraggableListDropIndicator = DraggableListDropIndicatorComponent;
