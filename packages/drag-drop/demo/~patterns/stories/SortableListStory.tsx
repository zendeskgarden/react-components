/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import type { Story } from '@storybook/react';
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import type { ISortableItem, ISortableItemProps } from './types';

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
  useSortable,
  arrayMove
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { Draggable, DraggableList } from '@zendeskgarden/react-drag-drop';
import { MD, SM } from '@zendeskgarden/react-typography';

import { getAnnouncements } from './utilities';

interface IArgs {
  items: ISortableItem[];
  placeholder?: boolean;
}

const StyledSortablesContainer = styled.div`
  max-width: 250px;
`;

export const SortableListStory: Story<IArgs> = ({ items, placeholder = false }: IArgs) => {
  const [sortableItems, setSortableItems] = useState<ISortableItem[]>(items);

  // state fallback for cancelled drag
  const [snapshot, setSnapshot] = useState<ISortableItem[] | null>(null);

  // active drag item pointer - item & column
  const [activeItem, setActiveItem] = useState<ISortableItem | null>(null);

  // Overlay ref to move focus when dragging
  const overlayRef = useRef(null);

  // DndKit interaction sensors
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  // DndKit event handlers
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

  const Item = forwardRef<HTMLDivElement, ISortableItemProps>((props, ref) => {
    const { isOverlay, data, tabIndex } = props;

    useEffect(() => {
      const draggableRef = ref as RefObject<HTMLDivElement>;

      if (isOverlay && draggableRef?.current) {
        draggableRef.current?.focus();
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
  });

  Item.displayName = 'Item';

  const DraggableItem = ({ data }: ISortableItemProps) => {
    const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition } =
      useSortable({
        id: data.id
      });
    const isActive = activeItem?.id === data.id;

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      opacity: !placeholder && isActive ? 0 : 1
    };

    return (
      <DraggableList.Item style={style} ref={setNodeRef}>
        <Item
          data={data}
          {...attributes}
          {...listeners}
          isPlaceholder={placeholder && isActive}
          ref={setActivatorNodeRef}
        />
      </DraggableList.Item>
    );
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
              <DraggableItem data={item} key={item.id} />
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
