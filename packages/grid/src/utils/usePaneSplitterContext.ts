/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';
import { Orientation } from '../types';

interface IPaneSplitterContext {
  orientation?: Orientation;
}

export const PaneSplitterContext = createContext<IPaneSplitterContext>({
  orientation: 'start'
});

/**
 * Retrieve Pane Splitter component context
 */
const usePaneSplitterContext = () => {
  return useContext(PaneSplitterContext);
};

export default usePaneSplitterContext;
