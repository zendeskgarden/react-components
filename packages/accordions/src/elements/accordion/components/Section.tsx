/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { SectionContext } from '../../../utils';
import { StyledSection } from '../../../styled';

const SectionComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    return (
      // @ts-expect-error ignoring private prop that is assigned
      // from Accordion when iterating over its children.
      <SectionContext.Provider value={props._currentIndex}>
        <StyledSection ref={ref} {...props} />
      </SectionContext.Provider>
    );
  }
);

SectionComponent.displayName = 'Accordion.Section';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Section = SectionComponent;
