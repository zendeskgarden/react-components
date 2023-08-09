/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';

import { useAccordionContext, useSectionContext } from '../../../utils';
import { StyledPanel, StyledInnerPanel } from '../../../styled';

const PanelComponent = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => {
  const { isCompact, isBare, isAnimated, expandedSections, getPanelProps } = useAccordionContext();
  const sectionValue = useSectionContext();
  const isExpanded = expandedSections.includes(sectionValue);

  return (
    <StyledPanel
      {...(getPanelProps({
        role: null,
        ref,
        value: sectionValue,
        isBare,
        isCompact,
        isExpanded,
        isAnimated,
        ...props
      } as Omit<HTMLAttributes<HTMLElement>, 'role'> & { value: number }) as any)}
    >
      <StyledInnerPanel>{props.children}</StyledInnerPanel>
    </StyledPanel>
  );
});

PanelComponent.displayName = 'Accordion.Panel';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Panel = PanelComponent;
