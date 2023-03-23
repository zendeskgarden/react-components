/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, LiHTMLAttributes, PropsWithChildren } from 'react';
import { StyledItem } from '../../../styled';
import { useDraggableListContext } from '../../../utils/useDraggableListContext';

const ItemComponent = forwardRef<HTMLLIElement, PropsWithChildren<LiHTMLAttributes<HTMLLIElement>>>(
  (props, ref) => {
    const { isHorizontal } = useDraggableListContext();

    return <StyledItem {...props} isHorizontal={isHorizontal} ref={ref} />;
  }
);

ItemComponent.displayName = 'DraggableList.Item';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Item = ItemComponent;
