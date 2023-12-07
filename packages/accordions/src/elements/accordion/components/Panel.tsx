/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';

import { useAccordionContext, useSectionContext } from '../../../utils';
import { StyledPanel, StyledInnerPanel } from '../../../styled';

const PanelComponent = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ role, children, ...props }, ref) => {
    const { isAnimated, isBare, isCompact, expandedSections, getPanelProps } =
      useAccordionContext();
    const sectionValue = useSectionContext();
    const isExpanded = expandedSections.includes(sectionValue);

    return (
      <StyledPanel
        inert={isExpanded ? undefined : ''}
        isAnimated={isAnimated}
        isBare={isBare}
        isCompact={isCompact}
        isExpanded={isExpanded}
        {...(getPanelProps({
          role: role === undefined ? null : 'region',
          ref,
          value: sectionValue,
          ...props
        }) as HTMLAttributes<HTMLElement>)}
      >
        <StyledInnerPanel isAnimated={isAnimated}>{children}</StyledInnerPanel>
      </StyledPanel>
    );
  }
);

PanelComponent.displayName = 'Accordion.Panel';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Panel = PanelComponent;
