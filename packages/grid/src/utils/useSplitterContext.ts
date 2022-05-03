/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';
interface ISplitterContext {
  rowState: Record<string, number>;
  columnState: Record<string, number>;
  setRowValue: (isTop: boolean, id: string, value: number) => void;
  setColumnValue: (isStart: boolean, id: string, value: number) => void;
  getColumnValue: (splitterKey: string, isPixels?: boolean) => number;
  getRowValue: (splitterKey: string, isPixels?: boolean) => number;
  totalPanesHeight: number;
  totalPanesWidth: number;
  pixelsPerFr: { rows: number; columns: number };
}

export const SplitterContext = createContext<ISplitterContext>({
  setRowValue: () => undefined,
  setColumnValue: () => undefined,
  getColumnValue: () => 0,
  getRowValue: () => 0,
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
