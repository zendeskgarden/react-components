/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { ComponentPropsWithRef } from 'react';

import { useAccordionContext } from '../../hooks/accordion/useAccordionContext';
import { useHeaderContext } from '../../hooks/accordion/useHeaderContext';
import { useSectionContext } from '../../hooks/accordion/useSectionContext';
import { StyledButton } from '../../views/accordion/StyledButton';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Label = (props: ComponentPropsWithRef<'button'>) => {
  const { isCompact, isCollapsible, expandedSections } = useAccordionContext();
  const sectionValue = useSectionContext();
  const { isHovered, ...buttonProps } = useHeaderContext();
  const isExpanded = expandedSections.includes(sectionValue);

  return (
    <StyledButton
      $isCompact={isCompact}
      $isHovered={isHovered}
      $isExpanded={isExpanded}
      $isCollapsible={isCollapsible}
      {
        ...(buttonProps as any) /* HACK to workaround https://github.com/styled-components/styled-components/issues/5652 */
      }
      {...props}
    />
  );
};
