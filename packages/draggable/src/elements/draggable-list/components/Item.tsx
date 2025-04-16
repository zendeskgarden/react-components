/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, LiHTMLAttributes } from 'react';
import { StyledItem } from '../../../styled';
import { useDraggableListContext } from '../../../utils/useDraggableListContext';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Item = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>((props, ref) => {
  const { isHorizontal } = useDraggableListContext();

  return <StyledItem {...props} $isHorizontal={isHorizontal} ref={ref} />;
});

Item.displayName = 'DraggableList.Item';
