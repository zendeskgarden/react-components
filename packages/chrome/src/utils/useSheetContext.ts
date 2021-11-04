/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';

export interface ISheetContext {
  idPrefix: string;
}

export const SheetContext = createContext<ISheetContext>({
  idPrefix: 'sheet'
});

export const useSheetContext = () => {
  return useContext(SheetContext);
};
