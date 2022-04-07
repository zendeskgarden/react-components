/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useEffect, forwardRef, useMemo } from 'react';
import { useAccordion } from '@zendeskgarden/container-accordion';
import { IAccordionProps } from '../../types';
import { StyledAccordion } from '../../styled';
import { AccordionContext } from '../../utils';
import { Section } from '../accordion/components/Section';
import { Header } from '../accordion/components/Header';
import { Label } from '../accordion/components/Label';
import { Panel } from '../accordion/components/Panel';

const AccordionComponent = forwardRef<HTMLDivElement, IAccordionProps>(
  (
    {
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
    const currentIndexRef = useRef(0);

    useEffect(() => {
      currentIndexRef.current = 0;
    });

    const value = useMemo(
      () => ({
        level,
        isBare,
        isCompact,
        isAnimated,
        isCollapsible,
        getPanelProps,
        getHeaderProps,
        getTriggerProps,
        currentIndexRef,
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
        currentIndexRef,
        expandedSections
      ]
    );

    return (
      <AccordionContext.Provider value={value}>
        <StyledAccordion ref={ref} {...props} />
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
