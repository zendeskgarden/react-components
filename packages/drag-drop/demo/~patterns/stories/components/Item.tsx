/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { RefObject, forwardRef, useEffect } from 'react';
import { ISortableItemProps } from '../types';
import { Draggable } from '@zendeskgarden/react-drag-drop';
import { MD, SM } from '@zendeskgarden/react-typography';

export const Item = forwardRef<HTMLDivElement, Omit<ISortableItemProps, 'activeItem'>>(
  (props, ref) => {
    const { isOverlay, data, tabIndex } = props;

    useEffect(() => {
      const draggableRef = ref as RefObject<HTMLDivElement>;

      if (isOverlay && draggableRef?.current?.focus) {
        draggableRef.current.focus();
      }
    });

    return (
      <Draggable {...props} tabIndex={isOverlay ? -1 : tabIndex} ref={ref}>
        <Draggable.Grip />
        <Draggable.Content>
          <MD isBold>{data.label}</MD>
          <SM>{data.caption}</SM>
        </Draggable.Content>
      </Draggable>
    );
  }
);

Item.displayName = 'Item';
