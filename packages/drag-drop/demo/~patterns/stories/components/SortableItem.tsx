/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { ISortableItemProps } from '../types';
import { DraggableList } from '@zendeskgarden/react-drag-drop';
import { Item } from './Item';

export const SortableItem = ({ data, activeItem, isPlaceholder }: ISortableItemProps) => {
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition } =
    useSortable({
      id: data.id
    });
  const isActive = activeItem?.id === data.id;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: !isPlaceholder && isActive ? 0 : 1
  };

  return (
    <DraggableList.Item style={style} ref={setNodeRef}>
      <Item
        data={data}
        {...attributes}
        {...listeners}
        isPlaceholder={isPlaceholder && isActive}
        ref={setActivatorNodeRef}
      />
    </DraggableList.Item>
  );
};

SortableItem.displayName = 'SortableItem';
