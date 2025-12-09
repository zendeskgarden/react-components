/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { createContext, useContext } from 'react';

const PaneProviderContext = createContext({});
const usePaneProviderContextData = providerId => {
  const context = useContext(PaneProviderContext);
  const id = providerId || context.providerId;
  return id && context.contextData ? context.contextData[id] : undefined;
};
const usePaneProviderContext = () => useContext(PaneProviderContext);

export { PaneProviderContext, usePaneProviderContext as default, usePaneProviderContextData };
