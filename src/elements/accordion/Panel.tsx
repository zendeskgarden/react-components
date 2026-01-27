/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { ComponentPropsWithRef } from 'react';

import { useAccordionContext } from '../../hooks/accordion/useAccordionContext';
import { useSectionContext } from '../../hooks/accordion/useSectionContext';
import { StyledInnerPanel } from '../../views/accordion/StyledInnerPanel';
import { StyledPanel } from '../../views/accordion/StyledPanel';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Panel = ({ children, ref, role, ...other }: ComponentPropsWithRef<'section'>) => {
  const { isAnimated, isBare, isCompact, expandedSections, getPanelProps } = useAccordionContext();
  const sectionValue = useSectionContext();
  const isExpanded = expandedSections.includes(sectionValue);
  const props = getPanelProps({
    ref,
    role: role === undefined ? null : 'region',
    value: sectionValue,
    ...other
  }) as any; // HACK to workaround https://github.com/styled-components/styled-components/issues/5652

  return (
    <StyledPanel
      {...props}
      inert={isExpanded ? undefined : true}
      $isAnimated={isAnimated}
      $isBare={isBare}
      $isCompact={isCompact}
      $isExpanded={isExpanded}
      data-garden-id={COMPONENT_IDS['accordions.panel']}
      data-garden-version={PACKAGE_VERSION}
    >
      <StyledInnerPanel
        $isAnimated={isAnimated}
        data-garden-id={COMPONENT_IDS['accordions.step_inner_panel']}
        data-garden-version={PACKAGE_VERSION}
      >
        {children}
      </StyledInnerPanel>
    </StyledPanel>
  );
};
