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
import type { IDraggableItemProps, IDropIndicatorProps, ISortableColumnProps } from './types';
import styled from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';

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

const DropIndicator = forwardRef<HTMLLIElement, IDropIndicatorProps>(
  ({ transition, transform, showDropMessage, overIndex }, ref) => (
    <DraggableList.DropIndicator
      ref={ref}
      aria-label={`Drop indicator at position ${overIndex + 1}`}
      style={{ display: showDropMessage ? 'none' : 'flex', transform, transition }}
    />
  )
);

DropIndicator.displayName = 'DropIndicator';

const SortableItem = ({
  data,
  showDropMessage,
  hasDropIndicator,
  isCompact,
  isHorizontal,
  isBare,
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
  const transformValue = CSS.Transform.toString(transform);
  const showIndicator = isSorting && hasDropIndicator && isActiveItem && !showDropMessage;

  if (!isUsingKeyboard && showIndicator) {
    return (
      <DropIndicator
        ref={setNodeRef}
        transform={transformValue}
        showDropMessage={showDropMessage}
        overIndex={overIndex}
      />
    );
  }

  const style: React.CSSProperties = {
    transition,
    transform: transformValue,
    opacity: isActiveItem ? 0 : 1,
    maxWidth: isHorizontal ? '150px' : undefined
  };

  return (
    <>
      {isUsingKeyboard && showIndicator && (
        <DropIndicator
          transition={transition}
          transform={transformValue}
          showDropMessage={showDropMessage}
          overIndex={overIndex}
        />
      )}
      <DraggableList.Item ref={setNodeRef} style={style}>
        <DraggableItem
          data={data}
          {...attributes}
          {...listeners}
          isBare={isBare}
          isCompact={isCompact}
          style={{ display: showDropMessage ? 'none' : 'flex' }}
          ref={setActivatorNodeRef}
        />
      </DraggableList.Item>
    </>
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
  isBare,
  isUsingKeyboard
}: ISortableColumnProps) => {
  const strategy = isHorizontal ? horizontalListSortingStrategy : verticalListSortingStrategy;
  const { setNodeRef } = useDroppable({ id });
  const isActive = !!activeId;
  const isHighlighted = activeColumnId === id;
  const showDropMessage = items.length === 1 && isHighlighted;

  return (
    <Dropzone
      style={{ flex: '1 1 auto' }}
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
              isBare={isBare}
              showDropMessage={showDropMessage}
              hasDropIndicator={hasDropIndicator}
              isHorizontal={isHorizontal}
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
  isHorizontal,
  isBare
}: IDraggableItemProps) => {
  const { isDragging, attributes, listeners, setNodeRef, setActivatorNodeRef } = useDraggable({
    id: data.id,
    disabled: data.isDisabled,
    data: { type: 'draggable' }
  });

  const listItemStyle: React.CSSProperties = {
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
        isBare={isBare}
        isPlaceholder={isDragging && isPlaceholder}
        ref={setActivatorNodeRef}
      />
    </DraggableList.Item>
  );
};

const StyledTitle = styled.h2`
  margin: 0 0 ${p => p.theme.space.sm} 0;
  color: ${p => getColor({ variable: 'foreground.default', theme: p.theme })};
  font-size: ${p => p.theme.fontSizes.lg};
`;

const StyledEmptyMessage = styled.p`
  color: ${p => getColor({ variable: 'foreground.subtle', theme: p.theme })};
  font-size: ${p => p.theme.fontSizes.sm};
`;

export const DraggablesColumn = ({
  items,
  hasPlaceholder,
  isCompact,
  isHorizontal,
  isBare
}: ISortableColumnProps) => {
  return (
    <div style={isHorizontal ? { minHeight: '100px' } : { width: '250px' }}>
      <StyledTitle>Produce</StyledTitle>
      {items.length > 0 && (
        <DraggableList isHorizontal={isHorizontal}>
          {items.map(item => (
            <DraggableListItem
              data={item}
              isCompact={isCompact}
              isBare={isBare}
              isHorizontal={isHorizontal}
              isPlaceholder={hasPlaceholder}
              key={item.id}
            />
          ))}
        </DraggableList>
      )}
      {items.length === 0 && <StyledEmptyMessage>No more produce!</StyledEmptyMessage>}
    </div>
  );
};

export const DroppablesColumn = (props: ISortableColumnProps) => {
  const { isHorizontal } = props;

  return (
    <div style={isHorizontal ? { minHeight: '100px' } : { width: '284px' }}>
      <StyledTitle>Favorites</StyledTitle>
      <SortablesColumn {...props} />
    </div>
  );
};
