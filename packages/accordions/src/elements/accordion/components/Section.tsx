/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useRef, HTMLAttributes } from 'react';
import { useAccordionContext, SectionContext } from '../../../utils';
import { StyledSection } from '../../../styled';

export const Section = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { currentIndexRef } = useAccordionContext();
  const sectionIndexRef = useRef(currentIndexRef.current++);
  const sectionIndex = sectionIndexRef.current;

  return (
    <SectionContext.Provider value={sectionIndex}>
      <StyledSection ref={ref} {...props} />
    </SectionContext.Provider>
  );
});

Section.displayName = 'Section';
