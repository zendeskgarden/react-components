/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useRef,
  useEffect,
  forwardRef,
  RefAttributes,
  HTMLAttributes,
  PropsWithoutRef,
  ForwardRefExoticComponent
} from 'react';
import { useAccordion } from '@zendeskgarden/container-accordion';
import { StyledAccordion } from '../../styled';
import { AccordionContext } from '../../utils';
import { Section } from '../accordion/components/Section';
import { Header } from '../accordion/components/Header';
import { Label } from '../accordion/components/Label';
import { Panel } from '../accordion/components/Panel';

interface IStaticAccordionExport<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  Section: typeof Section;
  Header: typeof Header;
  Label: typeof Label;
  Panel: typeof Panel;
}

interface IAccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** The `aria-level` used to apply heading rank on accordion headers */
  level: number;
  /** A controlled prop that determines which sections are expanded */
  expandedSections?: number[];
  /** Hides the bottom border under each accordion panel */
  isBare?: boolean;
  /** Determines if panels can be collapsed in an uncontrolled accordion */
  isCollapsible?: boolean;
  /** Reduces padding on accordion headers and panels */
  isCompact?: boolean;
  /** Determines if multiple panels can be expanded at the same time in an uncontrolled accordion */
  isExpandable?: boolean;
  /** A callback that is invoked with an accordion section’s index when the expanded state changes */
  onChange?: (index: number) => void;
}

/**
 * Accepts all `<div>` attributes and events. Also accepts sub-components:

 *  - `Accordion.Section`
 *  - `Accordion.Header`
 *  - `Accordion.Panel`
 *
 * Note: The `Accordion.Label` is a sub-component of `Accordion.Header`.
 */
export const Accordion = forwardRef<HTMLDivElement, IAccordionProps>(
  (
    {
      level,
      isBare,
      onChange,
      isCompact,
      isExpandable,
      isCollapsible,
      expandedSections: controlledExpandedSections,
      ...props
    },
    ref
  ) => {
    const { expandedSections, getHeaderProps, getTriggerProps, getPanelProps } = useAccordion({
      collapsible: isCollapsible,
      expandable: isExpandable,
      onChange,
      expandedSections: controlledExpandedSections
    });
    const currentIndexRef = useRef(0);

    useEffect(() => {
      currentIndexRef.current = 0;
    });

    const value = {
      level,
      isBare,
      isCompact,
      getPanelProps,
      getHeaderProps,
      getTriggerProps,
      currentIndexRef,
      expandedSections
    };

    return (
      <AccordionContext.Provider value={value}>
        <StyledAccordion ref={ref} {...props} />
      </AccordionContext.Provider>
    );
  }
) as IStaticAccordionExport<HTMLDivElement, IAccordionProps>;

Accordion.Section = Section;
Accordion.Header = Header;
Accordion.Label = Label;
Accordion.Panel = Panel;

Accordion.displayName = 'Accordion';

Accordion.defaultProps = {
  isBare: false,
  isCompact: false,
  isCollapsible: false,
  isExpandable: false,
  expandedSections: undefined,
  onChange: () => undefined
};
