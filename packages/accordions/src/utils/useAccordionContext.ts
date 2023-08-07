/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';
import { IUseAccordionReturnValue } from '@zendeskgarden/container-accordion';
import { IAccordionProps } from '../types';

export interface IAccordionContext<Value>
  extends Omit<IUseAccordionReturnValue<Value>, 'disabledSections'>,
    Pick<
      IAccordionProps<Value>,
      'level' | 'isCompact' | 'isAnimated' | 'isBare' | 'isCollapsible'
    > {}

export const AccordionContext = createContext<IAccordionContext<any> | undefined>(undefined);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);

  if (context === undefined) {
    throw new Error('This component must be rendered within a Accordion component');
  }

  return context;
};
