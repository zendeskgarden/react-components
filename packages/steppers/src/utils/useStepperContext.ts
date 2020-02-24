/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';

export interface IStepperContext {
  isHorizontal: boolean;
  activeIndex: number;
  currentIndexRef: React.MutableRefObject<number>;
}

export const StepperContext = createContext<IStepperContext | undefined>(undefined);

export const useStepperContext = () => {
  const context = useContext(StepperContext);

  if (context === undefined) {
    throw new Error('useStepperContext must be used within a StepperContext.Provider');
  }

  return context;
};
