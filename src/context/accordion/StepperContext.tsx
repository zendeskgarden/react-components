/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext } from 'react';

import type { IStepperContext } from '../../types/context';

export const StepperContext = createContext<IStepperContext | undefined>(undefined);

export const StepperProvider = StepperContext.Provider;
