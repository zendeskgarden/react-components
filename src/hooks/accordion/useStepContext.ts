/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext } from 'react';

import { StepContext } from '../../context/accordion/StepContext';

export const useStepContext = () => {
  const context = useContext(StepContext);

  if (context === undefined) {
    throw new Error('This component must be rendered within a Stepper component');
  }

  return context;
};
