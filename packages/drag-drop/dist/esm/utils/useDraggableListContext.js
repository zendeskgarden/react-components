/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { createContext, useContext } from 'react';

const DraggableListContext = createContext(undefined);
const useDraggableListContext = () => {
  const context = useContext(DraggableListContext);
  if (context === undefined) {
    throw new Error('This component must be rendered within a DraggableList component');
  }
  return context;
};

export { DraggableListContext, useDraggableListContext };
