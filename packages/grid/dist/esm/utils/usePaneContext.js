/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { createContext, useContext } from 'react';

const PaneContext = createContext({
  setId: () => undefined
});
const usePaneContext = () => {
  return useContext(PaneContext);
};

export { PaneContext, usePaneContext as default };
