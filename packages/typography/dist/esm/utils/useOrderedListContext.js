/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { createContext, useContext } from 'react';

const OrderedListContext = createContext(undefined);
const useOrderedListContext = () => {
  const listContext = useContext(OrderedListContext);
  if (!listContext) {
    throw new Error('This component must be rendered within an `OrderedList` component.');
  }
  return listContext;
};

export { OrderedListContext, useOrderedListContext as default };
