/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';
import { TYPE_NUMBER, TYPE_SPACE } from './types';

interface IGridContext {
  columns?: TYPE_NUMBER;
  gutters?: TYPE_SPACE;
  debug?: boolean;
}

export const GridContext = createContext<IGridContext>({ gutters: 'md' });

/**
 * Retrieve Grid component context
 */
const useGridContext = () => {
  return useContext(GridContext);
};

export default useGridContext;
