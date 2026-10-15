/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext } from 'react';

import { SectionContext } from '../../context/accordion/SectionContext';

export interface ISectionContext {
  sectionIndex: number;
}

export const useSectionContext = () => {
  const context = useContext(SectionContext);

  if (context === undefined) {
    throw new Error('This component must be rendered within an Accordion component');
  }

  return context;
};
