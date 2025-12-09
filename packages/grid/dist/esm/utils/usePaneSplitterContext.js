/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { createContext, useContext } from 'react';

const PaneSplitterContext = createContext({
  orientation: 'start',
  min: 0,
  max: 0,
  layoutKey: '',
  valueNow: 0,
  size: 0,
  isRow: false
});
const usePaneSplitterContext = () => {
  return useContext(PaneSplitterContext);
};

export { PaneSplitterContext, usePaneSplitterContext as default };
