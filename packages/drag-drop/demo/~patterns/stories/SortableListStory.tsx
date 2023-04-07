/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

import type { Story } from '@storybook/react';
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import type { ISortableItem } from './types';

import {
  closestCorners,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import {
  sortableKeyboardCoordinates,
  SortableContext,
  verticalListSortingStrategy,
  arrayMove
} from '@dnd-kit/sortable';

import { DraggableList } from '@zendeskgarden/react-drag-drop';

import { getAnnouncements } from './utilities';
import { Item } from './components/Item';
import { SortableItem } from './components/SortableItem';

interface IArgs {
  items: ISortableItem[];
  hasPlaceholder?: boolean;
}

const StyledSortablesContainer = styled.div`
  max-width: 250px;
`;

export const SortableListStory: Story<IArgs> = ({ items, hasPlaceholder = false }: IArgs) => {
  const [sortableItems, setSortableItems] = useState<ISortableItem[]>(items);

  // state fallback for cancelled drag
  const [snapshot, setSnapshot] = useState<ISortableItem[] | null>(null);

  // active drag item pointer - item & column
  const [activeItem, setActiveItem] = useState<ISortableItem | null>(null);

  // Overlay ref to move focus when dragging
  const overlayRef = useRef(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const onDragStart = ({ active }: DragStartEvent) => {
    const draggingItem = items.find(item => item.id === active.id);

    setActiveItem(draggingItem!);
    setSnapshot(sortableItems);
  };

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (over && active.id !== over.id) {
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

  // prefer position over index in announcements
  const getPosition = useCallback(
    (id: UniqueIdentifier | undefined) => {
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
              <SortableItem
                data={item}
                activeItem={activeItem}
                isPlaceholder={hasPlaceholder}
                key={item.id}
              />
            ))}
          </DraggableList>
        </SortableContext>
      </StyledSortablesContainer>
      <DragOverlay>
        {activeItem ? <Item data={activeItem} isOverlay isGrabbed ref={overlayRef} /> : null}
      </DragOverlay>
    </DndContext>
  );
};
