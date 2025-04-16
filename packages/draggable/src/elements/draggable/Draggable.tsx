/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import { Content } from './components/Content';
import { Grip } from './components/Grip';
import { StyledDraggable } from '../../styled';
import { IDraggableProps } from '../../types';

const DraggableComponent = forwardRef<HTMLDivElement, IDraggableProps>(
  (
    {
      focusInset,
      isBare,
      isCompact,
      isDisabled,
      isGrabbed,
      isPlaceholder,

      tag,
      ...other
    },
    ref
  ) => {
    return (
      <StyledDraggable
        $focusInset={focusInset}
        $isBare={isBare}
        $isCompact={isCompact}
        $isDisabled={isDisabled}
        $isGrabbed={isGrabbed}
        $isPlaceholder={isPlaceholder}
        aria-disabled={isDisabled}
        as={tag}
        ref={ref}
        tabIndex={isDisabled ? undefined : 0}
        {...other}
      />
    );
  }
);

DraggableComponent.displayName = 'Draggable';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Draggable = DraggableComponent as typeof DraggableComponent & {
  Grip: typeof Grip;
  Content: typeof Content;
};

Draggable.Grip = Grip;
Draggable.Content = Content;
