/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext } from 'react';

export interface IItemContext {
  isDisabled?: boolean;
}

export const ItemContext = React.createContext<IItemContext | undefined>(undefined);

/**
 * Retrieve Menu Item component context
 */
const useItemContext = () => {
  const context = useContext(ItemContext);

  if (!context) {
    throw new Error('This component must be rendered within an `Item` component.');
  }

  return context;
};

export default useItemContext;
