/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useAccordion } from '@zendeskgarden/container-accordion';
import React, { type ReactElement, Children, forwardRef, isValidElement, useMemo } from 'react';

import { StyledAccordion } from '../../styled';
import { IAccordionProps } from '../../types';
import { AccordionContext, SectionContext } from '../../utils';
import { Header } from './components/Header';
import { Label } from './components/Label';
import { Panel } from './components/Panel';
import { Section } from './components/Section';

const AccordionComponent = forwardRef<HTMLDivElement, IAccordionProps>(
  (
    {
      children,
      isBare,
      isCompact,
      isAnimated = true,
      isExpandable,
      isCollapsible = true,
      level,
      onChange,
      defaultExpandedSections,
      expandedSections: controlledExpandedSections,
      ...props
    },
    ref
  ) => {
    const { sections, sectionChildren } = useMemo(
      () =>
        Children.toArray(children)
          .filter(isValidElement)
          .map((child, index) => (
            /* eslint-disable-next-line react/no-array-index-key */
            <SectionContext.Provider key={index} value={index}>
              {child}
            </SectionContext.Provider>
          ))
          .reduce<{
            sectionChildren: ReactElement[];
            sections: number[];
          }>(
            (acc, child, index) => {
              acc.sectionChildren.push(child);
              acc.sections.push(index);

              return acc;
            },
            { sectionChildren: [], sections: [] }
          ),
      [children]
    );

    const { expandedSections, getHeaderProps, getTriggerProps, getPanelProps } = useAccordion({
      sections,
      defaultExpandedSections,
      expandedSections: controlledExpandedSections,
      collapsible: isCollapsible,
      expandable: isExpandable || false,
      onChange
    });

    const accordionContextValue = useMemo(
      () => ({
        level,
        isBare,
        isCompact,
        isAnimated,
        isCollapsible,
        getPanelProps,
        getHeaderProps,
        getTriggerProps,
        expandedSections
      }),
      [
        level,
        isBare,
        isCompact,
        isAnimated,
        isCollapsible,
        getPanelProps,
        getHeaderProps,
        getTriggerProps,
        expandedSections
      ]
    );

    return (
      <AccordionContext.Provider value={accordionContextValue}>
        <StyledAccordion ref={ref} {...props}>
          {sectionChildren}
        </StyledAccordion>
      </AccordionContext.Provider>
    );
  }
);

AccordionComponent.displayName = 'Accordion';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Accordion = AccordionComponent as typeof AccordionComponent & {
  Header: typeof Header;
  Label: typeof Label;
  Panel: typeof Panel;
  Section: typeof Section;
};

Accordion.Header = Header;
Accordion.Label = Label;
Accordion.Panel = Panel;
Accordion.Section = Section;
