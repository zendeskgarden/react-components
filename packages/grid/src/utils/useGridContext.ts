/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';
import { GRID_NUMBER, SPACE } from './types';

interface IGridContext {
  columns?: GRID_NUMBER;
  gutters?: SPACE;
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
