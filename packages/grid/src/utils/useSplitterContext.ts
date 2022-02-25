/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';
import { ISplitterContext } from '../types';

export const SplitterContext = createContext<ISplitterContext>({
  setRowValue: () => undefined,
  setColumnValue: () => undefined,
  getLayoutValue: () => 0,
  rowState: {},
  columnState: {},
  totalPanesHeight: 1,
  totalPanesWidth: 1,
  pixelsPerFr: { rows: 0, columns: 0 }
});

/**
 * Retrieve Splitter component context
 */
const useSplitterContext = () => {
  return useContext(SplitterContext);
};

export default useSplitterContext;
