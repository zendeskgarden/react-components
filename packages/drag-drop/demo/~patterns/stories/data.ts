/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { Announcements, UniqueIdentifier } from '@dnd-kit/core';

export const COLUMNS = {
  'column-1': [
    { label: 'Turnip', caption: 'Green yarrow', id: 'item-1' },
    { label: 'Corn', caption: 'Amaranth salsify', id: 'item-2' },
    { label: 'Celery', caption: 'Quandong swiss', id: 'item-3' },
    { label: 'Grape', caption: 'Silver beet', id: 'item-4' }
  ],
  'column-2': []
};

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
