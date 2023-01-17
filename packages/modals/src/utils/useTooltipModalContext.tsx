/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IUseModalReturnValue } from '@zendeskgarden/container-modal';
import { createContext, useContext } from 'react';

export interface IModalContext {
  hasTitle: boolean;
  setHasTitle: (isPresent: boolean) => void;
  getTitleProps: IUseModalReturnValue['getTitleProps'];
  getContentProps: IUseModalReturnValue['getContentProps'];
  getCloseProps: IUseModalReturnValue['getCloseProps'];
}

export const TooltipModalContext = createContext<IModalContext | undefined>(undefined);

export const useTooltipModalContext = () => {
  const context = useContext(TooltipModalContext);

  if (context === undefined) {
    throw new Error('Element must be used within a TooltipModal component.');
  }

  return context;
};
