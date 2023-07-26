/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, cloneElement, forwardRef, useMemo, type ReactElement } from 'react';
import { useAccordion } from '@zendeskgarden/container-accordion';
import { IAccordionProps } from '../../types';
import { StyledAccordion } from '../../styled';
import { AccordionContext } from '../../utils';
import { Section } from './components/Section';
import { Header } from './components/Header';
import { Label } from './components/Label';
import { Panel } from './components/Panel';

const AccordionComponent = forwardRef<HTMLDivElement, IAccordionProps>(
  (
    {
      children,
      level,
      isBare,
      onChange,
      isCompact,
      isAnimated,
      isExpandable,
      isCollapsible,
      defaultExpandedSections,
      expandedSections: controlledExpandedSections,
      ...props
    },
    ref
  ) => {
    const { expandedSections, getHeaderProps, getTriggerProps, getPanelProps } = useAccordion({
      collapsible: isCollapsible,
      expandable: isExpandable || false,
      onChange,
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
          {useMemo(
            () =>
              Children.toArray(children).map((child, _currentIndex) =>
                cloneElement(child as ReactElement, { _currentIndex })
              ),
            [children]
          )}
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
