/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, LiHTMLAttributes } from 'react';

import { useDraggableListContext } from '../../hooks/draggable/useDraggableListContext';
import { StyledItem } from '../../views/draggable/StyledItem';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Item = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>((props, ref) => {
  const { isHorizontal } = useDraggableListContext();

  return (
    <StyledItem
      {...props}
      data-garden-id={COMPONENT_IDS['draggable_list.item']}
      data-garden-version={PACKAGE_VERSION}
      $isHorizontal={isHorizontal}
      ref={ref}
    />
  );
});

Item.displayName = 'DraggableList.Item';
