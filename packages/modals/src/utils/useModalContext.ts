/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IUseModalReturnValue } from '@zendeskgarden/container-modal';
import { createContext, useContext } from 'react';

export interface IModalContext {
  isLarge?: boolean;
  isCloseButtonPresent?: boolean;
  hasHeader: boolean;
  setHasHeader: (hasHeader: boolean) => void;
  getTitleProps: IUseModalReturnValue['getTitleProps'];
  getContentProps: IUseModalReturnValue['getContentProps'];
  getCloseProps: IUseModalReturnValue['getCloseProps'];
  setIsCloseButtonPresent: (isPresent: boolean) => void;
}

export const ModalsContext = createContext<IModalContext | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalsContext);

  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalsContext.Provider');
  }

  return context;
};
