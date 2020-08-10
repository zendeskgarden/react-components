/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext, HTMLAttributes } from 'react';

export interface IModalContext {
  getTitleProps: <T>(options?: T) => T & HTMLAttributes<HTMLDivElement>;
  getContentProps: <T>(options?: T) => T & HTMLAttributes<HTMLDivElement>;
  getCloseProps: <T>(options?: T) => T & HTMLAttributes<HTMLButtonElement>;
}

export const TooltipModalContext = createContext<IModalContext | undefined>(undefined);

export const useTooltipModalContext = () => {
  const context = useContext(TooltipModalContext);

  if (context === undefined) {
    throw new Error('Element must be used within a TooltipModal component.');
  }

  return context;
};
