/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes, useContext } from 'react';

import { AccordionContext } from '../../context/accordion/AccordionContext';
import { SectionContext } from '../../context/accordion/SectionContext';
import { StyledSection } from '../../views/accordion/StyledSection';
import { StyledWellSection } from '../../views/accordion/StyledWellSection';
import { COMPONENT_IDS } from '../utils';

const SectionComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    /* Plain `useContext`: a `Section` outside an `Accordion` keeps working. */
    const accordionContext = useContext(AccordionContext);
    const sectionValue = useContext(SectionContext);

    if (accordionContext?.isWell && sectionValue !== undefined) {
      const isExpanded = accordionContext.expandedSections.includes(sectionValue);

      return (
        <StyledWellSection
          ref={ref}
          $isRecessed={isExpanded}
          $isAnimated={accordionContext.isAnimated}
          {...props}
          data-garden-id={COMPONENT_IDS['accordions.section']}
          data-garden-version={PACKAGE_VERSION}
        />
      );
    }

    return (
      <StyledSection
        ref={ref}
        {...props}
        data-garden-id={COMPONENT_IDS['accordions.section']}
        data-garden-version={PACKAGE_VERSION}
      />
    );
  }
);

SectionComponent.displayName = 'Accordion.Section';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Section = SectionComponent;
