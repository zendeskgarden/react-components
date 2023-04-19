/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Story } from '@storybook/react';
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  MeasuringStrategy,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  useDraggable,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import { IDraggableItem, IDraggableItemProps, ISortablesColumnProps } from './types';
import { collisionDetection, findColumn, getAnnouncements } from './utils';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import styled from 'styled-components';
import { DraggableItem, SortablesColumn } from './components';
import { DraggableList } from '@zendeskgarden/react-drag-drop';
import { CSS } from '@dnd-kit/utilities';

type IColumns = Record<UniqueIdentifier, IDraggableItem[]>;

interface IArgs {
  columns: IColumns;
  hasDropIndicator?: boolean;
  hasPlaceholder?: boolean;
  hasDanger?: boolean;
  isCompact?: boolean;
}

const StyledContainer = styled.div`
  display: flex;
  gap: 16px;
  max-width: 600px;
  min-height: 250px;
`;

const DraggableListItem = ({ data, isCompact, isPlaceholder }: IDraggableItemProps) => {
  const { isDragging, attributes, listeners, setNodeRef, setActivatorNodeRef, transform } =
    useDraggable({
      id: data.id
    });

  const listItemStyle: React.CSSProperties = isDragging
    ? {}
    : {
        transform: CSS.Transform.toString(transform)
      };
  const draggableItemStyle = {
    opacity: isDragging && !isPlaceholder ? 0 : 1
  };

  return (
    <DraggableList.Item ref={setNodeRef} style={listItemStyle}>
      <DraggableItem
        data={data}
        {...attributes}
        {...listeners}
        style={draggableItemStyle}
        isCompact={isCompact}
        isPlaceholder={isDragging && isPlaceholder}
        ref={setActivatorNodeRef}
      />
    </DraggableList.Item>
  );
};

const DraggablesColumn = ({ items, hasPlaceholder, isCompact }: ISortablesColumnProps) => {
  return (
    <div style={{ width: '250px' }}>
      <p>
        <strong>Produce</strong>
      </p>
      <DraggableList>
        {items.map(item => (
          <DraggableListItem
            data={item}
            isCompact={isCompact}
            isPlaceholder={hasPlaceholder}
            key={item.id}
          />
        ))}
      </DraggableList>
    </div>
  );
};

const DroppablesColumn = (props: ISortablesColumnProps) => {
  return (
    <div style={{ width: '284px' }}>
      <p>
        <strong>Favorites</strong>
      </p>
      <SortablesColumn {...props} />
    </div>
  );
};

export const SingleDirectionDnDStory: Story<IArgs> = ({
  columns: defaultColumns,
  hasDropIndicator,
  hasPlaceholder,
  hasDanger,
  isCompact
}: IArgs) => {
  const [columns, setColumns] = useState<IColumns>(defaultColumns);

  // state fallback for cancelled drag
  const [snapshot, setSnapshot] = useState<IColumns | null>(null);

  // active drag item pointer - item & column
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [activeColumnId, setActiveColumnId] = useState<UniqueIdentifier | null>(null);

  // Overlay ref to move focus when dragging
  const overlayRef = useRef<HTMLDivElement>(null);

  const activeItem = useMemo(
    () => columns[activeColumnId as UniqueIdentifier]?.find(item => item.id === activeId),
    [activeColumnId, activeId, columns]
  );

  const draggablesColId = Object.keys(columns)[0];

  // DndKit interaction sensors
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const onDragStart = ({ active }: DragStartEvent) => {
    const columnId = findColumn(active.id, columns) as UniqueIdentifier;

    setActiveId(active.id);
    setActiveColumnId(columnId);
    setSnapshot(columns);
  };

  const onDragOver = useCallback(
    ({ active, over }: DragOverEvent) => {
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

        // Removed moved item
        nextColumns[activeColId] = nextColumns[activeColId].filter(item => item.id !== active.id);

        // Add moved item
        nextColumns[overColId] = [
          ...nextColumns[overColId].slice(0, newIndex),
          prevColumns[activeColId][activeIndex],
          ...nextColumns[overColId].slice(newIndex, nextColumns[overColId].length)
        ];

        return nextColumns;
      });
    },
    [columns, activeColumnId]
  );

  const onDragEnd = useCallback(
    ({ active, over }: DragEndEvent) => {
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

      // If a droppable area isn't active, we can't drop/set the items
      // revert to snapshot
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
    },
    [columns]
  );

  const onDragCancel = () => {
    setColumns(snapshot!);
    setSnapshot(null);
    setActiveId(null);
    setActiveColumnId(null);
  };

  // prefer ordinal (position) over index in announcements
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
      collisionDetection={collisionDetection}
      sensors={sensors}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onDragCancel={onDragCancel}
      measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
    >
      <StyledContainer>
        {Object.keys(columns).map(columnId => {
          const isDraggablesColumn = columnId === draggablesColId;
          const ColumnComponent = isDraggablesColumn ? DraggablesColumn : DroppablesColumn;

          return (
            <ColumnComponent
              items={columns[columnId]}
              id={columnId}
              key={columnId}
              activeId={activeId}
              activeColumnId={activeColumnId}
              hasDropIndicator={hasDropIndicator && !isDraggablesColumn}
              hasPlaceholder={hasPlaceholder && isDraggablesColumn}
              hasDanger={!isDraggablesColumn && hasDanger}
              isCompact={isCompact}
            />
          );
        })}
      </StyledContainer>
      <DragOverlay>
        {activeItem ? (
          <DraggableItem data={activeItem} isOverlay isGrabbed ref={overlayRef} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};
