/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext } from 'react';

import type { INPUT_CONTEXT_VALUE } from '../../types/context';

export const InputContext = createContext<INPUT_CONTEXT_VALUE>(undefined);

export const InputProvider = InputContext.Provider;
