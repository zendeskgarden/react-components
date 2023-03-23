/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, PropsWithChildren, useMemo } from 'react';
import { DraggableListDropIndicator } from './components/DraggableListDropIndicator';
import { DraggableListItem } from './components/DraggableListItem';
import { StyledDraggableList } from '../../styled';
import { IDraggableListProps } from '../../types';
import { DraggableListContext } from '../../utils/useDraggableListContext';

const DraggableListComponent = forwardRef<HTMLUListElement, PropsWithChildren<IDraggableListProps>>(
  (props, ref) => {
    const value = useMemo(() => ({ isHorizontal: props.isHorizontal }), [props.isHorizontal]);

    return (
      <DraggableListContext.Provider value={value}>
        <StyledDraggableList {...props} ref={ref} />
      </DraggableListContext.Provider>
    );
  }
);

DraggableListComponent.displayName = 'DraggableList';

/**
 * @extends HTMLAttributes<HTMLUListElement>
 */
export const DraggableList = DraggableListComponent as typeof DraggableListComponent & {
  Item: typeof DraggableListItem;
  DropIndicator: typeof DraggableListDropIndicator;
};

DraggableList.Item = DraggableListItem;
DraggableList.DropIndicator = DraggableListDropIndicator;
