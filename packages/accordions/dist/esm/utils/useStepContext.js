/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { createContext, useContext } from 'react';

const StepContext = createContext(undefined);
const useStepContext = () => {
  const context = useContext(StepContext);
  if (context === undefined) {
    throw new Error('This component must be rendered within a Stepper component');
  }
  return context;
};

export { StepContext, useStepContext };
