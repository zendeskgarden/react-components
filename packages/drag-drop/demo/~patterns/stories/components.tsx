/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { RefObject, forwardRef, useEffect } from 'react';
import { useDraggable, useDroppable } from '@dnd-kit/core';
import {
  SortableContext,
  horizontalListSortingStrategy,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { Draggable, DraggableList, Dropzone } from '@zendeskgarden/react-drag-drop';

import { animateLayoutChanges } from './utils';
import type { IDraggableItemProps, ISortableColumnProps } from './types';

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
    <Draggable
      {...restProps}
      isDisabled={data.isDisabled}
      tabIndex={isOverlay ? -1 : tabIndex}
      ref={ref}
    >
      <Draggable.Grip />
      <Draggable.Content>
        <div>{data.label}</div>
      </Draggable.Content>
    </Draggable>
  );
});

DraggableItem.displayName = 'DraggableItem';

const SortableItem = ({
  data,
  showDropMessage,
  hasDropIndicator,
  isCompact,
  isUsingKeyboard
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
    id: data.id,
    disabled: data.isDisabled
  });

  const isActiveItem = active?.id === data.id;
  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform)
  };

  if (!isUsingKeyboard && isSorting && hasDropIndicator && isActiveItem && !showDropMessage) {
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
  isCompact,
  isHorizontal,
  isUsingKeyboard
}: ISortableColumnProps) => {
  const strategy = isHorizontal ? horizontalListSortingStrategy : verticalListSortingStrategy;
  const { setNodeRef } = useDroppable({ id });
  const isActive = !!activeId;
  const isHighlighted = activeColumnId === id;
  const showDropMessage = items.length === 1 && isHighlighted;

  return (
    <Dropzone
      style={{ flex: 1, margin: isHorizontal ? '0 4px' : undefined }}
      ref={setNodeRef}
      isActive={isActive}
      isHighlighted={isHighlighted}
    >
      <SortableContext id={id as string} items={items} strategy={strategy}>
        <DraggableList isHorizontal={isHorizontal}>
          {items.map(item => (
            <SortableItem
              data={item}
              key={item.id}
              showDropMessage={showDropMessage}
              hasDropIndicator={hasDropIndicator}
              isCompact={isCompact}
              isUsingKeyboard={isUsingKeyboard}
            />
          ))}
        </DraggableList>
        {items.length === 0 && <Dropzone.Message>Drag to add</Dropzone.Message>}
        {showDropMessage && <Dropzone.Message>Drop item here</Dropzone.Message>}
      </SortableContext>
    </Dropzone>
  );
};

export const DraggableListItem = ({
  data,
  isCompact,
  isPlaceholder,
  isUsingKeyboard,
  isHorizontal
}: IDraggableItemProps) => {
  const { isDragging, attributes, listeners, setNodeRef, setActivatorNodeRef, transform } =
    useDraggable({
      id: data.id,
      disabled: data.isDisabled,
      data: { type: 'draggable' }
    });

  const listItemStyle: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    maxWidth: isHorizontal ? 150 : undefined
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
        isUsingKeyboard={isUsingKeyboard}
        ref={setActivatorNodeRef}
      />
    </DraggableList.Item>
  );
};

export const DraggablesColumn = ({
  items,
  hasPlaceholder,
  isCompact,
  isUsingKeyboard,
  isHorizontal
}: ISortableColumnProps) => {
  return (
    <div style={isHorizontal ? { minHeight: '100px' } : { width: '250px' }}>
      <p>
        <strong>Produce</strong>
      </p>
      {items.length > 0 && (
        <DraggableList isHorizontal={isHorizontal}>
          {items.map(item => (
            <DraggableListItem
              data={item}
              isCompact={isCompact}
              isHorizontal={isHorizontal}
              isPlaceholder={hasPlaceholder}
              isUsingKeyboard={isUsingKeyboard}
              key={item.id}
            />
          ))}
        </DraggableList>
      )}
      {items.length === 0 && <small>You picked every fruit!</small>}
    </div>
  );
};

export const DroppablesColumn = (props: ISortableColumnProps) => {
  const { isHorizontal } = props;

  return (
    <div style={isHorizontal ? { minHeight: '100px' } : { width: '284px' }}>
      <p>
        <strong>Favorites</strong>
      </p>
      <SortablesColumn {...props} />
    </div>
  );
};
