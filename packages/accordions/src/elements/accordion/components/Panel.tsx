/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';

import { useAccordionContext, useSectionContext, IAccordionContext } from '../../../utils';
import { StyledPanel, StyledInnerPanel } from '../../../styled';

type PanelProps = IAccordionContext | { isExpanded?: boolean };

const PanelComponent = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => {
  const { isCompact, isBare, isAnimated, expandedSections, getPanelProps } = useAccordionContext();
  const index = useSectionContext();
  const isExpanded = expandedSections.includes(index);

  return (
    <StyledPanel
      {...getPanelProps<PanelProps>({
        role: null,
        ref,
        index,
        isBare,
        isCompact,
        isExpanded,
        isAnimated,
        ...props
      })}
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
