/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext, MutableRefObject } from 'react';
import { IUseAccordionPropGetters } from 'packages/chrome/node_modules/@zendeskgarden/container-accordion/dist/typings';
export interface IAccordionContext extends IUseAccordionPropGetters {
  expandedSections: number[];
  currentIndexRef: MutableRefObject<number>;
  level: number;
  isCompact?: boolean;
  isAnimated?: boolean;
  isBare?: boolean;
  isCollapsible?: boolean;
}

export const AccordionContext = createContext<IAccordionContext | undefined>(undefined);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);

  if (context === undefined) {
    throw new Error('This component must be rendered within a Accordion component');
  }

  return context;
};
