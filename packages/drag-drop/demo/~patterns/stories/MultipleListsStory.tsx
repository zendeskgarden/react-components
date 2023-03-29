/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import styled from 'styled-components';

import type { Story } from '@storybook/react';
import type { DragEndEvent, DragOverEvent, DragStartEvent, UniqueIdentifier } from '@dnd-kit/core';
import type { ISortableItem, ISortableItemProps } from './types';

import {
  closestCorners,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useDroppable,
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
import { Draggable, DraggableList, Dropzone } from '@zendeskgarden/react-drag-drop';
import { MD, SM } from '@zendeskgarden/react-typography';
import { getAnnouncements } from './data';

interface IColumnProps {
  id: UniqueIdentifier;
  items: ISortableItem[];
}

type IColumns = Record<UniqueIdentifier, ISortableItem[]>;

interface IArgs {
  columns: IColumns;
}

const StyledSortablesContainer = styled.div`
  display: flex;
  gap: 16px;
  max-width: 600px;
`;

function findColumn(
  id: UniqueIdentifier | undefined,
  columns: IColumns
): UniqueIdentifier | undefined {
  if (!id) return undefined;

  if (id in columns) {
    return id;
  }

  return Object.keys(columns).find(cId => {
    return columns[cId].findIndex(item => item?.id === id) > -1;
  });
}

export const MultipleListsStory: Story<IArgs> = ({ columns: defaultColumns }: IArgs) => {
  const [columns, setColumns] = useState<IColumns>(defaultColumns);

  // state fallback for cancelled drag
  const [snapshot, setSnapshot] = useState<IColumns | null>(null);

  // active drag item pointer - item & column
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [activeColumnId, setActiveColumnId] = useState<UniqueIdentifier | null>(null);

  // derive the active item if activeId/activeColumnId is present
  const activeItem =
    activeId && activeColumnId
      ? columns[findColumn(activeId, columns)!].find(item => item.id === activeId)
      : null;

  // DndKit interaction sensors
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const onDragStart = ({ active }: DragStartEvent) => {
    const columnId = findColumn(active.id, columns) as UniqueIdentifier;

    setActiveId(active.id);
    setActiveColumnId(columnId);
    setSnapshot(columns);
  };

  const onDragOver = useMemo(
    () =>
      debounce(({ active, over }: DragOverEvent) => {
        const overId = over?.id;

        if (!overId || active.id in columns) return;

        // Find column ids
        const overColId = findColumn(overId, columns);
        const activeColId = findColumn(active.id, columns);

        if (!overColId || !activeColId) return;

        if (activeColumnId !== overColId) {
          setActiveColumnId(overColId);
        }

        if (activeColId === overColId) return;

        setColumns(prevColumns => {
          const nextColumns = { ...prevColumns };
          const activeItems = nextColumns[activeColId];
          const overItems = nextColumns[overColId];

          // Find the indices for items
          const activeIndex = activeItems.findIndex(item => item.id === active.id);
          const overIndex = overItems.findIndex(item => item.id === overId);
          let newIndex: number;

          if (overId in nextColumns) {
            newIndex = overItems.length + 1;
          } else {
            const isBelowLastItem =
              over &&
              overIndex === overItems.length - 1 &&
              active.rect?.current?.translated?.top &&
              active.rect.current.translated.top > over.rect.top + over.rect.height;

            const modifier = isBelowLastItem ? 1 : 0;

            newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
          }

          // Remove moved item
          nextColumns[activeColId] = nextColumns[activeColId].filter(item => item.id !== active.id);

          // Add moved item
          nextColumns[overColId] = [
            ...nextColumns[overColId].slice(0, newIndex),
            prevColumns[activeColId][activeIndex],
            ...nextColumns[overColId].slice(newIndex, nextColumns[overColId].length)
          ];

          return nextColumns;
        });
      }, 100),
    [activeColumnId, columns]
  );

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    const activeColId = findColumn(active.id, columns);
    const overId = over?.id;

    if (!activeColId || !overId) {
      setActiveId(null);
      setActiveColumnId(null);

      return;
    }

    const overColId = findColumn(overId, columns);

    if (!overColId) return;

    const activeIndex = columns[activeColId].findIndex(item => item.id === active.id);
    const overIndex = columns[overColId].findIndex(item => item.id === overId);

    if (activeIndex !== overIndex) {
      setColumns(prevColumns => {
        const nextColumns = { ...prevColumns };

        nextColumns[overColId] = arrayMove(prevColumns[overColId], activeIndex, overIndex);

        return nextColumns;
      });
    }

    setSnapshot(null);
    setActiveId(null);
    setActiveColumnId(null);
  };

  const onDragCancel = () => {
    setColumns(snapshot!);
    setSnapshot(null);
    setActiveId(null);
    setActiveColumnId(null);
  };

  const SortableItem = ({ data, isOverlay }: ISortableItemProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
      id: data.id
    });
    const isPlaceholder = !isOverlay && activeId === data.id;
    const isDragging = isOverlay && activeId === data.id;
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      opacity: isPlaceholder ? 0 : 1
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

  const Column = ({ items, id }: IColumnProps) => {
    const { setNodeRef } = useDroppable({ id });
    const isActive = !!activeId;
    const isHighlighted = activeColumnId === id;

    return (
      <SortableContext id={id as string} items={items} strategy={verticalListSortingStrategy}>
        <Dropzone ref={setNodeRef} isActive={isActive} isHighlighted={isHighlighted}>
          {items.length > 0 && (
            <DraggableList>
              {items.map(item => (
                <SortableItem data={item} key={item.id} />
              ))}
            </DraggableList>
          )}
          {items.length === 0 && <Dropzone.Message>Drag items here</Dropzone.Message>}
        </Dropzone>
      </SortableContext>
    );
  };

  // prefer position over index in announcements
  const getPosition = (id: UniqueIdentifier | undefined) => {
    if (!id) return 1;

    const activeColId = findColumn(id, columns) as string;
    const itemIndex = columns[activeColId]?.findIndex(item => item.id === id) || 0;

    return itemIndex + 1;
  };

  const activeItemsCount = columns[activeColumnId!]?.length;

  return (
    <DndContext
      accessibility={{ announcements: getAnnouncements(getPosition, activeItemsCount) }}
      collisionDetection={closestCorners}
      sensors={sensors}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onDragCancel={onDragCancel}
    >
      <StyledSortablesContainer>
        {Object.keys(columns).map(columnId => (
          <Column items={columns[columnId]} id={columnId} key={columnId} />
        ))}
      </StyledSortablesContainer>
      <DragOverlay wrapperElement={DraggableList as unknown as 'ul'}>
        {activeItem ? <SortableItem data={activeItem} isOverlay /> : null}
      </DragOverlay>
    </DndContext>
  );
};
