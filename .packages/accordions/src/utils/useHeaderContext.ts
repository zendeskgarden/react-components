/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';

export interface IHeaderContext {
  isHovered: boolean;
  otherTriggerProps: any;
}

export const HeaderContext = createContext<IHeaderContext | undefined>(undefined);

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);

  if (context === undefined) {
    throw new Error('This component must be rendered within a Accordion.Header component');
  }

  return context;
};
