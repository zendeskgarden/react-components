/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { RefObject, forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import styled from 'styled-components';

import type { Story } from '@storybook/react';
import type {
  Announcements,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  UniqueIdentifier
} from '@dnd-kit/core';

import {
  closestCorners,
  DragOverlay,
  DndContext,
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
  arrayMove,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { Draggable, DraggableList, Dropzone } from '@zendeskgarden/react-drag-drop';

interface IColumnProps {
  id: UniqueIdentifier;
  items: ISortableItem[];
}

interface ISortableItem {
  label: string;
  caption: string;
  id: UniqueIdentifier;
}

interface ISortableItemProps {
  data: ISortableItem;
  activeItem?: ISortableItem | null;
  isOverlay?: boolean;
  isGrabbed?: boolean;
  tabIndex?: number;
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

export const getAnnouncements = (
  getPosition: (id: UniqueIdentifier | undefined) => number,
  count: number | undefined
): Announcements => ({
  onDragStart({ active }) {
    return `Picked up sortable item ${active.id}. Sortable item ${
      active.id
    } is in position ${getPosition(active.id as UniqueIdentifier)} of ${count}`;
  },
  onDragOver({ active, over }) {
    return `Sortable item ${active.id} was moved into position ${getPosition(
      over?.id
    )} of ${count}`;
  },
  onDragEnd({ active, over }) {
    return `Sortable item ${active.id} was dropped at position ${getPosition(
      over?.id
    )} of ${count}`;
  },
  onDragCancel({ active }) {
    return `Dragging was cancelled. Sortable item ${active.id} was dropped.`;
  }
});

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

export const SortableListsStory: Story<IArgs> = ({ columns: defaultColumns }: IArgs) => {
  const [columns, setColumns] = useState<IColumns>(defaultColumns);

  // state fallback for cancelled drag
  const [snapshot, setSnapshot] = useState<IColumns | null>(null);

  // active drag item pointer - item & column
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [activeColumnId, setActiveColumnId] = useState<UniqueIdentifier | null>(null);

  // Overlay ref to move focus when dragging
  const overlayRef = useRef<HTMLDivElement>(null);

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
            const length = overItems.length;

            newIndex = length > 0 ? length + 1 : length;
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

  const DraggableItem = forwardRef<HTMLDivElement, Omit<ISortableItemProps, 'activeItem'>>(
    (props, ref) => {
      const { isOverlay, data, tabIndex } = props;

      useEffect(() => {
        // This is a safe assumptions given a ref is always provided
        const draggableRef = ref as RefObject<HTMLDivElement>;

        // Maintain focus when the DraggableItem is part of a drag overlay
        if (isOverlay && draggableRef?.current?.focus) {
          draggableRef.current.focus();
        }
      });

      return (
        <Draggable {...props} tabIndex={isOverlay ? -1 : tabIndex} ref={ref}>
          <Draggable.Grip />
          <Draggable.Content>{data.label}</Draggable.Content>
        </Draggable>
      );
    }
  );

  DraggableItem.displayName = 'DraggableItem';

  const SortableItem = ({ data }: ISortableItemProps) => {
    const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition } =
      useSortable({
        id: data.id
      });
    const isActive = activeItem?.id === data.id;

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      opacity: isActive ? 0 : 1
    };

    return (
      <DraggableList.Item style={style} ref={setNodeRef}>
        <DraggableItem data={data} {...attributes} {...listeners} ref={setActivatorNodeRef} />
      </DraggableList.Item>
    );
  };

  const Column = ({ items, id }: IColumnProps) => {
    const { setNodeRef } = useDroppable({ id });
    const isActive = !!activeId;
    const isHighlighted = activeColumnId === id;

    return (
      <SortableContext id={id as string} items={items} strategy={verticalListSortingStrategy}>
        <Dropzone
          ref={items.length === 0 ? setNodeRef : undefined}
          isActive={isActive}
          isHighlighted={isHighlighted}
        >
          {items.length > 0 && (
            <DraggableList>
              {items.map(item => (
                <SortableItem data={item} activeItem={activeItem} key={item.id} />
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
        {activeItem ? (
          <DraggableItem data={activeItem} isOverlay isGrabbed ref={overlayRef} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};
