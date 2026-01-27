/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useMemo, type PropsWithChildren } from 'react';

import type { IAccordionContext } from '../../types/context';

export const AccordionContext = createContext<IAccordionContext<any> | undefined>(undefined);

export const AccordionProvider = ({
  children,
  expandedSections,
  getHeaderProps,
  getPanelProps,
  getTriggerProps,
  isBare,
  isAnimated,
  isCollapsible,
  isCompact,
  level
}: PropsWithChildren<IAccordionContext<any>>) => {
  const value = useMemo(
    () => ({
      expandedSections,
      getHeaderProps,
      getPanelProps,
      getTriggerProps,
      isBare,
      isAnimated,
      isCollapsible,
      isCompact,
      level
    }),
    [
      expandedSections,
      getHeaderProps,
      getPanelProps,
      getTriggerProps,
      isBare,
      isAnimated,
      isCollapsible,
      isCompact,
      level
    ]
  );

  return <AccordionContext.Provider value={value}>{children}</AccordionContext.Provider>;
};
