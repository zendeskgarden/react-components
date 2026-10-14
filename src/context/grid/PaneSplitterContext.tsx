/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext } from 'react';

import type { IPaneSplitterContext } from '../../types/context';

export const PaneSplitterContext = createContext<IPaneSplitterContext>({
  orientation: 'start',
  min: 0,
  max: 0,
  layoutKey: '',
  valueNow: 0,
  size: 0,
  isRow: false
});

export const PaneSplitterProvider = PaneSplitterContext.Provider;
