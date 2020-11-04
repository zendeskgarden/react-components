/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledButton } from '../../../styled';
import { useAccordionContext, useHeaderContext, useSectionContext } from '../../../utils';

/**
 * @extends HTMLButtonElement
 */
export const Label = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const sectionIndex = useSectionContext();
    const { isCompact, isCollapsible, expandedSections } = useAccordionContext();
    const isExpanded = expandedSections.includes(sectionIndex);
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

Label.displayName = 'Label';
