/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';

interface IPaneContext {
  id?: string;
  setId: (id: string) => void;
}

export const PaneContext = createContext<IPaneContext>({
  setId: () => undefined
});

/**
 * Retrieve Splitter component context
 */
const usePaneContext = () => {
  return useContext(PaneContext);
};

export default usePaneContext;
