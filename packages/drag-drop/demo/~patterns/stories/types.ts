/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { UniqueIdentifier } from '@dnd-kit/core';

export interface ISortableItem {
  label: string;
  caption: string;
  id: UniqueIdentifier;
}

export interface ISortableItemProps {
  data: ISortableItem;
  isOverlay?: boolean;
  isGrabbed?: boolean;
  isPlaceholder?: boolean;
  tabIndex?: number;
}
