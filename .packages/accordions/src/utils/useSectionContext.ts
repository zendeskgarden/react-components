/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';

export interface ISectionContext {
  sectionIndex: number;
}

export const SectionContext = createContext<number | undefined>(undefined);

export const useSectionContext = () => {
  const context = useContext(SectionContext);

  if (context === undefined) {
    throw new Error('This component must be rendered within an Accordion component');
  }

  return context;
};
