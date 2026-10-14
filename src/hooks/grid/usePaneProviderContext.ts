/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext } from 'react';

import { PaneProviderContext } from '../../context/grid/PaneProviderContext';
import type { IPaneProviderContext, IPaneProviderContextData } from '../../types/context';

export const usePaneProviderContextData = (
  providerId?: string
): IPaneProviderContextData | undefined => {
  const context = useContext(PaneProviderContext);
  const id = providerId || context.providerId;

  return id && context.contextData ? context.contextData[id] : undefined;
};

export const usePaneProviderContext = (): IPaneProviderContext => useContext(PaneProviderContext);
