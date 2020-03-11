/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';

export interface IStepperContext {
  activeIndex: number;
  isHorizontal: boolean;
  currentIndexRef: React.MutableRefObject<number>;
}

export const StepperContext = createContext<IStepperContext | undefined>(undefined);

export const useStepperContext = () => {
  const context = useContext(StepperContext);

  if (context === undefined) {
    throw new Error('This component must be rendered within a Stepper component');
  }

  return context;
};
