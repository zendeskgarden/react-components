/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';

import { Size } from '../types';

interface IUnorderedListContext {
  size: Size;
}

export const UnorderedListContext = createContext<IUnorderedListContext | undefined>(undefined);

/**
 * Retrieve UnorderedList component context
 */
const useUnorderedListContext = () => {
  const listContext = useContext(UnorderedListContext);

  if (!listContext) {
    throw new Error('This component must be rendered within an `UnorderedList` component.');
  }

  return listContext;
};

export default useUnorderedListContext;
