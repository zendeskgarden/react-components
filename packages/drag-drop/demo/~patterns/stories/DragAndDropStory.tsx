/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Story } from '@storybook/react';
import styled from 'styled-components';
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardCoordinateGetter,
  KeyboardSensor,
  MeasuringStrategy,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

import { DraggableItem, DraggablesColumn, DroppablesColumn } from './components';
import { IColumns } from './types';
import { collisionDetection, findColumn, getAnnouncements } from './utils';
import { useDocument } from '@zendeskgarden/react-theming';

interface IArgs {
  columns: IColumns;
  hasDropIndicator: boolean;
  hasPlaceholder: boolean;
  isCompact: boolean;
  isHorizontal: boolean;
}

const StyledContainer = styled.div<{ isHorizontal: boolean }>`
  display: flex;
  flex-direction: ${p => (p.isHorizontal ? 'column' : 'row')};
  gap: 48px;
  max-width: 700px;
  min-height: ${p => !p.isHorizontal && '250px'};

  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const DragAndDropStory: Story<IArgs> = ({
  columns: defaultColumns,
  hasDropIndicator,
  hasPlaceholder,
  isCompact,
  isHorizontal
}: IArgs) => {
  const [columns, setColumns] = useState<IColumns>(defaultColumns);
  const [isUsingKeyboard, setIsUsingKeyboard] = useState(false);
  const environment = useDocument();

  // state fallback for cancelled drag
  const [snapshot, setSnapshot] = useState<IColumns | null>(null);

  // active drag item pointer - item & column
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [activeColumnId, setActiveColumnId] = useState<UniqueIdentifier | null>(null);

  // Overlay ref to move focus when dragging
  const overlayRef = useRef<HTMLDivElement>(null);

  const activeItem = columns[activeColumnId as UniqueIdentifier]?.find(
    item => item.id === activeId
  );

  const draggablesColId = Object.keys(columns)[0];

  const unsetKeyboard = useCallback(() => {
    setIsUsingKeyboard(false);
  }, []);

  useEffect(() => {
    if (environment) {
      environment.addEventListener('mousedown', unsetKeyboard, true);
    }

    return () => {
      if (environment) {
        environment.removeEventListener('mousedown', unsetKeyboard, true);
      }
    };
  });

  /**
   * If the coordinate getter is used in the draggable list, restrict to left/right/down
   * arrow keys. Otherwise return the sortable list getter.
   *
   * 1. Prevent moving the draggable in the opposite direction of the sortable list target.
   */
  const coordinateGetter: KeyboardCoordinateGetter = useCallback(
    (event, args) => {
      const {
        context: { active, droppableRects },
        currentCoordinates
      } = args;

      const isDraggableList = active?.data?.current?.type === 'draggable';

      if (isDraggableList && ['ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
        const rects = [...droppableRects.values()];
        const target = rects[rects.length - 1];
        const deltaX = target.left;
        const deltaY = target.top;

        switch (event.key) {
          case 'ArrowRight':
            if (isHorizontal || currentCoordinates.x > deltaX) return undefined; /* [1] */

            return { y: deltaY, x: deltaX };
          case 'ArrowLeft':
            if (isHorizontal || currentCoordinates.x < deltaX) return undefined; /* [1] */

            return { y: deltaY, x: deltaX };
          case 'ArrowDown': {
            if (!isHorizontal) return undefined; /* [1] */

            return { y: deltaY, x: deltaX };
          }
        }
      }

      return sortableKeyboardCoordinates(event, args);
    },
    [isHorizontal]
  );

  // DndKit interaction sensors
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter })
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
      <StyledContainer
        isHorizontal={isHorizontal}
        onKeyUp={() => !isUsingKeyboard && setIsUsingKeyboard(true)}
        onKeyDown={() => !isUsingKeyboard && setIsUsingKeyboard(true)}
      >
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
              isCompact={isCompact}
              isHorizontal={isHorizontal}
              isUsingKeyboard={isUsingKeyboard}
            />
          );
        })}
      </StyledContainer>
      <DragOverlay>
        {activeItem ? (
          <DraggableItem
            ref={overlayRef}
            style={isHorizontal ? { width: '150px' } : undefined}
            data={activeItem}
            isOverlay
            isGrabbed
            isCompact={isCompact}
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};
