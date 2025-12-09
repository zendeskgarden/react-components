/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { createContext, useContext } from 'react';

const ItemContext = createContext(undefined);
const useItemContext = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error('Error: this component must be rendered within an <Item>.');
  }
  return context;
};

export { ItemContext, useItemContext as default };
