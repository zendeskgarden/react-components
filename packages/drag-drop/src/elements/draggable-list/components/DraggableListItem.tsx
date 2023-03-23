/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, LiHTMLAttributes, PropsWithChildren } from 'react';
import { StyledDraggableListItem } from '../../../styled';
import { useDraggableListContext } from '../../../utils/useDraggableListContext';

const DraggableListItemComponent = forwardRef<
  HTMLLIElement,
  PropsWithChildren<LiHTMLAttributes<HTMLLIElement>>
>((props, ref) => {
  const { isHorizontal } = useDraggableListContext();

  return <StyledDraggableListItem {...props} isHorizontal={isHorizontal} ref={ref} />;
});

DraggableListItemComponent.displayName = 'DraggableList.Item';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const DraggableListItem = DraggableListItemComponent;
