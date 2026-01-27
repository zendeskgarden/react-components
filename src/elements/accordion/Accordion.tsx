/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useAccordion } from '@zendeskgarden/container-accordion';
import { Children, isValidElement, useMemo, type ReactElement } from 'react';

import type { IAccordionProps } from '../../types/elements';

import { AccordionProvider } from '../../context/accordion/AccordionContext';
import { SectionProvider } from '../../context/accordion/SectionContext';
import { StyledAccordion } from '../../views/accordion/StyledAccordion';
import { COMPONENT_IDS } from '../utils';
import { Header } from './Header';
import { Label } from './Label';
import { Panel } from './Panel';
import { Section } from './Section';

const AccordionComponent = ({
  children,
  defaultExpandedSections,
  expandedSections: controlledExpandedSections,
  isAnimated = true,
  isBare,
  isCollapsible = true,
  isCompact,
  isExpandable,
  level,
  onChange,
  ...other
}: IAccordionProps) => {
  const { sections, sectionChildren } = useMemo(
    () =>
      Children.toArray(children)
        .filter(isValidElement)
        .map((child, index) => (
          <SectionProvider key={index} value={index}>
            {child}
          </SectionProvider>
        ))
        .reduce<{
          sectionChildren: ReactElement[];
          sections: number[];
        }>(
          (retVal, child, index) => {
            retVal.sectionChildren.push(child);
            retVal.sections.push(index);

            return retVal;
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

  return (
    <AccordionProvider
      expandedSections={expandedSections}
      getHeaderProps={getHeaderProps}
      getPanelProps={getPanelProps}
      getTriggerProps={getTriggerProps}
      isBare={isBare}
      isAnimated={isAnimated}
      isCollapsible={isCollapsible}
      isCompact={isCompact}
      level={level}
    >
      <StyledAccordion
        {...other}
        data-garden-id={COMPONENT_IDS['accordions.accordion']}
        data-garden-version={PACKAGE_VERSION}
      >
        {sectionChildren}
      </StyledAccordion>
    </AccordionProvider>
  );
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
