/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext, HTMLAttributes } from 'react';

export interface IModalContext {
  isLarge?: boolean;
  getTitleProps: <T>(options?: T) => T & HTMLAttributes<HTMLDivElement>;
  getContentProps: <T>(options?: T) => T & HTMLAttributes<HTMLDivElement>;
  getCloseProps: <T>(options?: T) => T & HTMLAttributes<HTMLButtonElement>;
}

export const ModalsContext = createContext<IModalContext | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalsContext);

  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalsContext.Provider');
  }

  return context;
};
