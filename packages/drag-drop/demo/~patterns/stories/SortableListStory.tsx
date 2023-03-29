/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useState } from 'react';
import { Story } from '@storybook/react';

import {
  closestCorners,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core';

import {
  sortableKeyboardCoordinates,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { Draggable, DraggableList } from '@zendeskgarden/react-drag-drop';
import { MD, SM } from '@zendeskgarden/react-typography';
import type { IDraggableProps } from '@zendeskgarden/react-drag-drop';

import styled from 'styled-components';
import { getAnnouncements } from './data';

interface ISortableItem extends IDraggableProps {
  label: string;
  caption: string;
  id: string;
}

type ISortableItemProps = {
  data: ISortableItem;
  isOverlay?: boolean;
};

interface IArgs {
  items: ISortableItem[];
}

const StyledSortablesContainer = styled.div`
  max-width: 250px;
`;

/**
 * Given an id and column state, return the active column and item being dragged.
 */
const getDragData = (id: string | number, items: ISortableItem[]): ISortableItem | null => {
  let item = null;

  for (const itm of items) {
    if (itm.id === id) {
      item = itm;
      break;
    }
  }

  return item;
};

export const SortableListStory: Story<IArgs> = ({ items }: IArgs) => {
  const [sortableItems, setSortableItems] = useState<ISortableItem[]>(items);

  // state fallback for cancelled drag
  const [snapshot, setSnapshot] = useState<ISortableItem[] | null>(null);

  // active drag item pointer - item & column
  const [activeItem, setActiveItem] = useState<ISortableItem | null>(null);

  // DndKit interaction sensors
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  // DndKit event handlers
  const onDragStart = ({ active }: DragStartEvent) => {
    const item = getDragData(active.id, sortableItems);

    setActiveItem(item);
    setSnapshot(sortableItems);
  };

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (over && active.id !== over?.id) {
      const activeIndex = sortableItems.findIndex(({ id }) => id === active.id);
      const overIndex = sortableItems.findIndex(({ id }) => id === over.id);

      setSortableItems(arrayMove(sortableItems, activeIndex, overIndex));
    }

    setSnapshot(null);
    setActiveItem(null);
  };

  const onDragCancel = () => {
    setSortableItems(snapshot!);
    setSnapshot(null);
    setActiveItem(null);
  };

  const SortableItem = ({ data, isOverlay }: ISortableItemProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
      id: data.id
    });
    const isDragging = isOverlay && activeItem?.id === data.id;
    const isDropPosition = !isOverlay && activeItem?.id === data.id;
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      opacity: isDropPosition ? 0 : 1
    };

    return (
      <DraggableList.Item style={style} ref={setNodeRef}>
        <Draggable {...attributes} {...listeners} isDragging={isDragging}>
          <Draggable.Grip />
          <Draggable.Content>
            <MD isBold>{data.label}</MD>
            <SM>{data.caption}</SM>
          </Draggable.Content>
        </Draggable>
      </DraggableList.Item>
    );
  };

  // prefer position over index in announcements
  const getPosition = useCallback(
    (id: string | number) => {
      const idx = sortableItems.findIndex(item => item.id === id);

      return idx + 1;
    },
    [sortableItems]
  );

  const activeItemsCount = sortableItems.length;

  return (
    <DndContext
      accessibility={{ announcements: getAnnouncements(getPosition, activeItemsCount) }}
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragCancel={onDragCancel}
    >
      <StyledSortablesContainer>
        <SortableContext
          id="sortable-list"
          items={sortableItems}
          strategy={verticalListSortingStrategy}
        >
          <DraggableList>
            {sortableItems.map(item => (
              <SortableItem data={item} key={item.id} />
            ))}
          </DraggableList>
        </SortableContext>
      </StyledSortablesContainer>
      <DragOverlay>{!!activeItem && <SortableItem data={activeItem} isOverlay />}</DragOverlay>
    </DndContext>
  );
};
