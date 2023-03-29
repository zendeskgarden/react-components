/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, LiHTMLAttributes } from 'react';
import { StyledItem } from '../../../styled';
import { useDraggableListContext } from '../../../utils/useDraggableListContext';

const ItemComponent = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>((props, ref) => {
  const draggableListContext = useDraggableListContext();
  const isHorizontal = draggableListContext?.isHorizontal || false;

  return <StyledItem {...props} isHorizontal={isHorizontal} ref={ref} />;
});

ItemComponent.displayName = 'DraggableList.Item';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Item = ItemComponent;
