/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import { StyledButton } from '../../../styled';
import { useAccordionContext, useHeaderContext, useSectionContext } from '../../../utils';

const LabelComponent = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const sectionValue = useSectionContext();
    const { isCompact, isCollapsible, expandedSections } = useAccordionContext();
    const isExpanded = expandedSections.includes(sectionValue);
    const { isHovered, otherTriggerProps } = useHeaderContext();

    return (
      <StyledButton
        ref={ref}
        isCompact={isCompact}
        isHovered={isHovered}
        isExpanded={isExpanded}
        isCollapsible={isCollapsible}
        {...otherTriggerProps}
        {...props}
      />
    );
  }
);

LabelComponent.displayName = 'Accordion.Label';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Label = LabelComponent;
