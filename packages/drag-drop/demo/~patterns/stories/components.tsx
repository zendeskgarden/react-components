/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { RefObject, forwardRef, useEffect } from 'react';
import { IDraggableItemProps, ISortablesColumnProps } from './types';
import { Draggable, DraggableList, Dropzone } from '@zendeskgarden/react-drag-drop';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { animateLayoutChanges } from './utils';
import { CSS } from '@dnd-kit/utilities';

export const DraggableItem = forwardRef<HTMLDivElement, IDraggableItemProps>((props, ref) => {
  const { isOverlay, data, tabIndex, ...restProps } = props;

  useEffect(() => {
    // This is a safe assumptions given a ref is always provided
    const draggableRef = ref as RefObject<HTMLDivElement>;

    // Maintain focus when the DraggableItem is part of a drag overlay
    if (isOverlay && draggableRef?.current?.focus) {
      draggableRef.current.focus();
    }
  });

  return (
    <Draggable {...restProps} tabIndex={isOverlay ? -1 : tabIndex} ref={ref}>
      <Draggable.Grip />
      <Draggable.Content>
        <div>{data.label}</div>
        <div>{data.id}</div>
      </Draggable.Content>
    </Draggable>
  );
});

DraggableItem.displayName = 'DraggableItem';

const SortableItem = ({
  data,
  showDropMessage,
  hasDropIndicator,
  isCompact
}: IDraggableItemProps) => {
  const {
    overIndex,
    active,
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isSorting
  } = useSortable({
    animateLayoutChanges,
    id: data.id
  });

  const isActiveItem = active?.id === data.id;
  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform)
  };

  if (isSorting && hasDropIndicator && isActiveItem && !showDropMessage) {
    return (
      <DraggableList.DropIndicator
        ref={setNodeRef}
        aria-label={`Drop indicator at position ${overIndex + 1}`}
        style={{ display: showDropMessage ? 'none' : 'flex', ...style }}
      />
    );
  }

  style.opacity = isActiveItem ? 0 : 1;
  style.transition = transition;

  return (
    <DraggableList.Item ref={setNodeRef} style={style}>
      <DraggableItem
        data={data}
        {...attributes}
        {...listeners}
        isCompact={isCompact}
        style={{ display: showDropMessage ? 'none' : 'flex' }}
        ref={setActivatorNodeRef}
      />
    </DraggableList.Item>
  );
};

export const SortablesColumn = ({
  items,
  id,
  activeId,
  activeColumnId,
  hasDropIndicator,
  hasDanger,
  isCompact
}: ISortablesColumnProps) => {
  const { setNodeRef } = useDroppable({ id });
  const isActive = !!activeId;
  const isHighlighted = activeColumnId === id;
  const showDropMessage = items.length === 1 && isHighlighted;

  return (
    <Dropzone
      ref={items.length === 0 ? setNodeRef : undefined}
      isActive={isActive}
      isHighlighted={isHighlighted}
      isDanger={hasDanger}
    >
      <SortableContext id={id as string} items={items} strategy={verticalListSortingStrategy}>
        <DraggableList>
          {items.map(item => (
            <SortableItem
              data={item}
              key={item.id}
              showDropMessage={showDropMessage}
              hasDropIndicator={hasDropIndicator}
              isCompact={isCompact}
            />
          ))}
        </DraggableList>
        {items.length === 0 && (
          <Dropzone.Message>Drag to {hasDanger ? 'remove' : 'add'}</Dropzone.Message>
        )}
        {showDropMessage && <Dropzone.Message>Drop item here</Dropzone.Message>}
      </SortableContext>
    </Dropzone>
  );
};
