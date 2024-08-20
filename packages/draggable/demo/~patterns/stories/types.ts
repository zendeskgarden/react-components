/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { UniqueIdentifier } from '@dnd-kit/core';
import { IDraggableProps } from '@zendeskgarden/react-draggable';
import { LiHTMLAttributes } from 'react';

export interface IPresentationalDraggableItem {
  label: string;
  id: UniqueIdentifier;
  isDisabled: boolean;
}

export interface IDraggableItemProps extends IDraggableProps {
  data: IPresentationalDraggableItem;
  dragOverId?: UniqueIdentifier | null;
  isOverlay?: boolean;
  isGrabbed?: boolean;
  isCompact?: boolean;
  isHorizontal?: boolean;
  isBare?: boolean;
  items?: IPresentationalDraggableItem[];
  hasDropIndicator?: boolean;
  showDropMessage?: boolean;
  tabIndex?: number;
  isUsingKeyboard?: boolean;
}

export interface IDropIndicatorProps extends LiHTMLAttributes<HTMLLIElement> {
  overIndex: number;
  transition?: string;
  transform?: string;
  showDropMessage?: boolean;
}

export type IColumns = Record<UniqueIdentifier, IPresentationalDraggableItem[]>;

export interface IColumnProps {
  id: UniqueIdentifier;
  items: IPresentationalDraggableItem[];
}

export interface ISortableColumnProps extends IColumnProps {
  activeId: UniqueIdentifier | null;
  activeColumnId: UniqueIdentifier | null;
  dragOverId?: UniqueIdentifier | null;
  isCompact?: boolean;
  isHorizontal?: boolean;
  isBare?: boolean;
  hasPlaceholder?: boolean;
  hasDanger?: boolean;
  hasDropIndicator?: boolean;
  isUsingKeyboard?: boolean;
}
