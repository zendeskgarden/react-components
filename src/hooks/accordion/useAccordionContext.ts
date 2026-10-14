/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext } from 'react';

import { AccordionContext } from '../../context/accordion/AccordionContext';

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);

  if (context === undefined) {
    throw new Error('This component must be rendered within a Accordion component');
  }

  return context;
};
