/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';

export interface IDraggableListContext {
  isHorizontal?: boolean;
}

export const DraggableListContext = createContext<IDraggableListContext | undefined>(undefined);

export const useDraggableListContext = () => {
  const context = useContext(DraggableListContext);

  if (context === undefined) {
    throw new Error('This component must be rendered within a DraggableList component');
  }

  return context;
};
