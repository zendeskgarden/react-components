/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext } from 'react';

import type { ISheetContext } from '../../types/context';

export const SheetContext = createContext<ISheetContext>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsCloseButtonPresent() {}
});

export const SheetProvider = SheetContext.Provider;
