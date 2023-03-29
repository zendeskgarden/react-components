/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes } from 'react';

export interface IDraggableProps extends HTMLAttributes<HTMLDivElement> {
  focusInset?: boolean;
  /** Applies compact styling */
  isCompact?: boolean;
  /** Appliesbare styling */
  isBare?: boolean;
  /** Applies disabled styling */
  isDisabled?: boolean;
  /** Applies styling indicating Draggable is active via non-mouse interaction (e.g., keyboard) */
  isActive?: boolean;
  /** Hides content and applies placeholder background styling */
  isPlaceholder?: boolean;
  /** Applies drag styling */
  isDragging?: boolean;
  /** Applies alternative HTML tag to element */
  tag?: any;
}

export interface IDraggableListProps extends HTMLAttributes<HTMLUListElement> {
  /** Applies styling to flow list items in a row */
  isHorizontal?: boolean;
}

export interface IDropzoneProps extends HTMLAttributes<HTMLDivElement> {
  /** Applies danger styling */
  isDanger?: boolean;
  /** Applies highlighted styling to indicate draggable element is hovering */
  isActive?: boolean;
  /** Applies highlighted styling to indicate dropping is possible */
  isHighlighted?: boolean;
  /** APplies disabled styling */
  isDisabled?: boolean;
  /** Applies alternative HTML tag to element */
  tag?: any;
}
