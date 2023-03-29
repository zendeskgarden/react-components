/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story } from '@storybook/react';
import {
  closestCorners,
  DndContext,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  useDroppable,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import {
  sortableKeyboardCoordinates,
  SortableContext,
  verticalListSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { Draggable, DraggableList, Dropzone } from '@zendeskgarden/react-drag-drop';
import { MD, SM } from '@zendeskgarden/react-typography';
import type { IDraggableProps } from '@zendeskgarden/react-drag-drop';

import styled from 'styled-components';
import { getAnnouncements } from './data';

interface ISortableItem extends IDraggableProps {
  label: string;
  caption: string;
  id: string;
}

interface IColumn {
  items: ISortableItem[];
  id: string;
}

type ISortableItemProps = {
  data: ISortableItem;
  isOverlay?: boolean;
};

type IColumnProps = {
  data: IColumn;
};

type IActiveDrag = {
  item: ISortableItem | null;
  column: IColumn | null;
};

interface IArgs {
  columns: IColumn[];
}

const StyledSortablesContainer = styled.div`
  display: flex;
  gap: 16px;
  max-width: 600px;
`;

/**
 * Given an id and column state, return the active column and item being dragged.
 */
const getDragData = (id: string | number, columns: IColumn[]): IActiveDrag => {
  let item = null;
  let column = null;

  for (const col of columns) {
    for (const it of col.items) {
      if (it.id === id) {
        item = it;
        column = col;
        break;
      }
    }
  }

  return { column, item };
};

export const SortableListStory: Story<IArgs> = ({ columns }: IArgs) => {
  const [sortableState, setSortableState] = useState<IColumn[]>(columns);

  // state fallback for cancelled drag
  const [snapshot, setSnapshot] = useState<IColumn[] | null>(null);

  // active drag item pointer - item & column
  const [activeDrag, setActiveDrag] = useState<IActiveDrag | null>(null);

  // DndKit interaction sensors
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  // DndKit event handlers
  const onDragStart = ({ active }: DragStartEvent) => {
    const data = getDragData(active.id, sortableState);

    setActiveDrag({ ...data });
    setSnapshot(sortableState);
  };

  const onDragOver = () => {
    // placeholder
  };

  const onDragEnd = () => {
    setSnapshot(null);
    setActiveDrag(null);
  };

  const onDragCancel = () => {
    setSortableState(snapshot!);
    setSnapshot(null);
    setActiveDrag(null);
  };

  const SortableItem = ({ data, isOverlay }: ISortableItemProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
      id: data.id
    });
    const style = { transform: CSS.Transform.toString(transform), transition };
    const isDragging = isOverlay && activeDrag?.item?.id === data.id;
    const isPlaceholder = !isOverlay && activeDrag?.item?.id === data.id;

    return (
      <DraggableList.Item style={style} ref={setNodeRef}>
        <Draggable
          {...attributes}
          {...listeners}
          isDragging={isDragging}
          isPlaceholder={isPlaceholder}
        >
          <Draggable.Grip />
          <Draggable.Content>
            <MD isBold>{data.label}</MD>
            <SM>{data.caption}</SM>
          </Draggable.Content>
        </Draggable>
      </DraggableList.Item>
    );
  };

  const Column = ({ data: { id, items: columnItems } }: IColumnProps) => {
    const { setNodeRef } = useDroppable({ id });
    const isOriginatingColumn = activeDrag?.column?.id === id;
    const isActive = !isOriginatingColumn && !!activeDrag?.item;
    const isHighlighted = !isOriginatingColumn && activeDrag?.column?.id === id;

    return (
      <SortableContext id={id} items={columnItems} strategy={verticalListSortingStrategy}>
        <Dropzone ref={setNodeRef} isActive={isActive} isHighlighted={isHighlighted}>
          {columnItems.length > 0 && (
            <DraggableList>
              {columnItems.map(item => (
                <SortableItem data={item} key={item.id} />
              ))}
            </DraggableList>
          )}

          {columnItems.length === 0 && !!activeDrag && (
            <Dropzone.Message>Drop item here</Dropzone.Message>
          )}
        </Dropzone>
      </SortableContext>
    );
  };

  // prefer position over index in announcements
  const getPosition = (id: string | number) => {
    const { column } = getDragData(id, sortableState);
    const itemIndex = column!.items.findIndex(item => item.id === id);

    return itemIndex + 1;
  };

  const activeItemsCount = activeDrag?.column?.items.length;

  return (
    <DndContext
      accessibility={{ announcements: getAnnouncements(getPosition, activeItemsCount) }}
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onDragCancel={onDragCancel}
    >
      <StyledSortablesContainer>
        {sortableState.map(column => (
          <Column data={column} key={column.id} />
        ))}
      </StyledSortablesContainer>
      <DragOverlay>
        {!!activeDrag?.item && <SortableItem data={activeDrag.item} isOverlay />}
      </DragOverlay>
    </DndContext>
  );
};
