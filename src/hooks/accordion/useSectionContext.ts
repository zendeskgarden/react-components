/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext } from 'react';

import { SectionContext } from '../../context/accordion/SectionContext';

export const useSectionContext = () => {
  const retVal = useContext(SectionContext);

  if (retVal === undefined) {
    throw new Error('this component must be rendered within an <Accordion.Section>.');
  }

  return retVal;
};
