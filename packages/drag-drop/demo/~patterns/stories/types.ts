/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { UniqueIdentifier } from '@dnd-kit/core';
import { IDraggableProps } from '@zendeskgarden/react-drag-drop';

export interface IDraggableItem {
  label: string;
  isDisabled: boolean;
  isDropIndicator?: boolean;
  id: UniqueIdentifier;
}

export interface IColumnProps {
  id: UniqueIdentifier;
  items: IDraggableItem[];
}

export interface IDraggableItemProps extends IDraggableProps {
  data: IDraggableItem;
  dragOverId?: UniqueIdentifier | null;
  isOverlay?: boolean;
  isGrabbed?: boolean;
  isCompact?: boolean;
  items?: IDraggableItem[];
  hasDropIndicator?: boolean;
  showDropMessage?: boolean;
  tabIndex?: number;
}

export type IColumns = Record<UniqueIdentifier, IDraggableItem[]>;

export interface ISortablesColumnProps extends IColumnProps {
  activeId: UniqueIdentifier | null;
  activeColumnId: UniqueIdentifier | null;
  dragOverId?: UniqueIdentifier | null;
  isCompact?: boolean;
  hasPlaceholder?: boolean;
  hasDanger?: boolean;
  hasDropIndicator?: boolean;
}
