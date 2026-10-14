/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, ButtonHTMLAttributes } from 'react';

import {
  useAccordionContext,
  useHeaderContext,
  useSectionContext
} from '../../utils/accordion/index';
import { StyledButton } from '../../views/accordion/StyledButton';
import { COMPONENT_IDS } from '../utils';

const LabelComponent = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const sectionValue = useSectionContext();
    const { isCompact, isCollapsible, expandedSections } = useAccordionContext();
    const isExpanded = expandedSections.includes(sectionValue);
    const { isHovered, otherTriggerProps } = useHeaderContext();

    return (
      <StyledButton
        ref={ref}
        $isCompact={isCompact}
        $isHovered={isHovered}
        $isExpanded={isExpanded}
        $isCollapsible={isCollapsible}
        {...otherTriggerProps}
        {...props}
        data-garden-id={COMPONENT_IDS['accordions.button']}
        data-garden-version={PACKAGE_VERSION}
      />
    );
  }
);

LabelComponent.displayName = 'Accordion.Label';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Label = LabelComponent;
