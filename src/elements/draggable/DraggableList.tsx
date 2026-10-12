/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, useMemo } from 'react';

import { DraggableListProvider } from '../../context/draggable/DraggableListContext';
import { IDraggableListProps } from '../../types/elements';
import { StyledDraggableList } from '../../views/draggable/StyledDraggableList';
import { DropIndicator } from './DropIndicator';
import { Item } from './Item';

const DraggableListComponent = forwardRef<HTMLUListElement, IDraggableListProps>(
  ({ isHorizontal, ...other }, ref) => {
    const value = useMemo(() => ({ isHorizontal }), [isHorizontal]);

    return (
      <DraggableListProvider value={value}>
        <StyledDraggableList $isHorizontal={isHorizontal} ref={ref} {...other} />
      </DraggableListProvider>
    );
  }
);

DraggableListComponent.displayName = 'DraggableList';

/**
 * @extends HTMLAttributes<HTMLUListElement>
 */
export const DraggableList = DraggableListComponent as typeof DraggableListComponent & {
  Item: typeof Item;
  DropIndicator: typeof DropIndicator;
};

DraggableList.Item = Item;
DraggableList.DropIndicator = DropIndicator;
