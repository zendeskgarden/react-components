/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { createContext, useContext } from 'react';

const ItemGroupContext = createContext({});
const useItemGroupContext = () => {
  return useContext(ItemGroupContext);
};

export { ItemGroupContext, useItemGroupContext as default };
