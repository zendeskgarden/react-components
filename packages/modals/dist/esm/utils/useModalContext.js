/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { createContext, useContext } from 'react';

const ModalsContext = createContext(undefined);
const useModalContext = () => {
  const context = useContext(ModalsContext);
  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalsContext.Provider');
  }
  return context;
};

export { ModalsContext, useModalContext };
