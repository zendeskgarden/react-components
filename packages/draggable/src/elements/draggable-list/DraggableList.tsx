/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useMemo } from 'react';
import { DropIndicator } from './components/DropIndicator';
import { Item } from './components/Item';
import { StyledDraggableList } from '../../styled';
import { IDraggableListProps } from '../../types';
import { DraggableListContext } from '../../utils/useDraggableListContext';

const DraggableListComponent = forwardRef<HTMLUListElement, IDraggableListProps>(
  ({ isHorizontal, ...other }, ref) => {
    const value = useMemo(() => ({ isHorizontal }), [isHorizontal]);

    return (
      <DraggableListContext.Provider value={value}>
        <StyledDraggableList $isHorizontal={isHorizontal} ref={ref} {...other} />
      </DraggableListContext.Provider>
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
