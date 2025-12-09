/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { HTMLAttributes } from 'react';
export interface IDraggableProps extends HTMLAttributes<HTMLDivElement> {
    /** Applies inset `box-shadow` styling on focus */
    focusInset?: boolean;
    /** Removes borders */
    isBare?: boolean;
    /** Applies compact spacing */
    isCompact?: boolean;
    /** Disables the draggable */
    isDisabled?: boolean;
    /** Applies grab styling */
    isGrabbed?: boolean;
    /** Hides content and applies placeholder background styling */
    isPlaceholder?: boolean;
    /** Updates the element's HTML tag */
    tag?: any;
}
export interface IDraggableListProps extends HTMLAttributes<HTMLUListElement> {
    /** Flows list items inline */
    isHorizontal?: boolean;
}
export interface IDropzoneProps extends HTMLAttributes<HTMLDivElement> {
    /** Indicates a drop is possible during a drag */
    isActive?: boolean;
    /** Aligns dropzone message content vertically */
    isVertical?: boolean;
    /** Applies danger styling */
    isDanger?: boolean;
    /** Disables the dropzone */
    isDisabled?: boolean;
    /** Indicates a draggable is on a droppable area */
    isHighlighted?: boolean;
    /** Updates the element's HTML tag */
    tag?: any;
}
