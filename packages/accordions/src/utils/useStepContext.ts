/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';

export interface IStepContext {
  currentStepIndex: number;
}

export const StepContext = createContext<IStepContext | undefined>(undefined);

export const useStepContext = () => {
  const context = useContext(StepContext);

  if (context === undefined) {
    throw new Error('useStepContext must be used within a StepContext.Provider');
  }

  return context;
};
