/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext, HTMLAttributes, MutableRefObject } from 'react';

export interface IAccordionContext {
  expandedSections: number[];
  getHeaderProps: <T>(options?: T) => T & HTMLAttributes<HTMLDivElement>;
  getTriggerProps: <T>(options?: T) => T & HTMLAttributes<HTMLDivElement>;
  getPanelProps: <T>(options?: T) => T & HTMLAttributes<HTMLDivElement>;
  currentIndexRef: MutableRefObject<number>;
  level: number;
  isCompact?: boolean;
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
