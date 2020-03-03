/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext, createContext, ChangeEventHandler } from 'react';

interface ITilesContext {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name: string;
  isCentered?: boolean;
}

export const TilesContext = createContext<ITilesContext | undefined>(undefined);

export const useTilesContext = () => {
  return useContext(TilesContext);
};
