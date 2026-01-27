/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';

import { ISplitterProps, Orientation } from '../types';

interface IPaneSplitterContext {
  orientation?: Orientation;
  min: ISplitterProps['min'];
  max: ISplitterProps['max'];
  layoutKey: ISplitterProps['layoutKey'];
  valueNow?: number;
  size?: number;
  isRow: boolean;
  providerId?: ISplitterProps['providerId'];
}

export const PaneSplitterContext = createContext<IPaneSplitterContext>({
  orientation: 'start',
  min: 0,
  max: 0,
  layoutKey: '',
  valueNow: 0,
  size: 0,
  isRow: false
});

/**
 * Retrieve Pane Splitter component context
 */
const usePaneSplitterContext = () => {
  return useContext(PaneSplitterContext);
};

export default usePaneSplitterContext;
