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
  ForwardRefExoticComponent,
  useMemo
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

export interface IAccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Sets `aria-level` heading rank in the document structure */
  level: number;
  /** Sets the expanded sections in a controlled accordion */
  expandedSections?: number[];
  /** Sets the default expanded sections in an uncontrolled accordion */
  defaultExpandedSections?: number[];
  /** Hides section borders */
  isBare?: boolean;
  /** Allows uncontrolled accordion sections to collapse */
  isCollapsible?: boolean;
  /** Applies compact styling */
  isCompact?: boolean;
  /** Animates section expansion and collapse */
  isAnimated?: boolean;
  /** Enables simultaneous expansion of uncontrolled accordion sections */
  isExpandable?: boolean;
  /**
   * Handles accordion expansion changes
   *
   * @param {number} index A section index
   */
  onChange?: (index: number) => void;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Accordion = forwardRef<HTMLDivElement, IAccordionProps>(
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
      expandable: isExpandable,
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
) as IStaticAccordionExport<HTMLDivElement, IAccordionProps>;

Accordion.Section = Section;
Accordion.Header = Header;
Accordion.Label = Label;
Accordion.Panel = Panel;

Accordion.displayName = 'Accordion';

Accordion.defaultProps = {
  isBare: false,
  isCompact: false,
  isAnimated: true,
  isCollapsible: true,
  isExpandable: false,
  expandedSections: undefined,
  onChange: () => undefined
};
