/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, forwardRef, useMemo } from 'react';
import { useAccordion } from '@zendeskgarden/container-accordion';
import { IAccordionProps } from '../../types';
import { StyledAccordion } from '../../styled';
import { AccordionContext, SectionContext } from '../../utils';
import { Section } from './components/Section';
import { Header } from './components/Header';
import { Label } from './components/Label';
import { Panel } from './components/Panel';

const AccordionComponent = forwardRef<HTMLDivElement, IAccordionProps>(
  (
    {
      children,
      isBare,
      isCompact,
      isAnimated,
      isExpandable,
      isCollapsible,
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
          .map((child, index) => (
            <SectionContext.Provider key={index} value={index}>
              {child}
            </SectionContext.Provider>
          ))
          .reduce(
            (acc, child, index) => {
              acc.sectionChildren.push(child as any);
              acc.sections.push(index as number);

              return acc;
            },
            { sectionChildren: [], sections: [] } as {
              sectionChildren: any[];
              sections: number[];
            }
          ),
      [children]
    );

    const { expandedSections, getHeaderProps, getTriggerProps, getPanelProps } = useAccordion({
      onChange,
      collapsible: isCollapsible,
      expandable: isExpandable || false,
      sections,
      defaultExpandedSections,
      expandedSections: controlledExpandedSections
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

AccordionComponent.defaultProps = {
  isAnimated: true,
  isCollapsible: true
};

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
