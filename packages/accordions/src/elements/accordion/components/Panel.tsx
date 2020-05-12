/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, forwardRef, HTMLAttributes } from 'react';
import debounce from 'lodash.debounce';
import { useCombinedRefs } from '@zendeskgarden/container-utilities';
import { useAccordionContext, useSectionContext } from '../../../utils';
import { StyledPanel, StyledInnerPanel } from '../../../styled';

export const Panel = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => {
  const { isCompact, isBare, getPanelProps, expandedSections } = useAccordionContext();
  const panelRef = useCombinedRefs<HTMLElement>(ref);
  const index = useSectionContext();
  const isExpanded = expandedSections.includes(index);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateMaxHeight = useCallback(
    debounce(() => {
      if (panelRef.current) {
        const child = panelRef.current.children[0] as any;

        child.style.maxHeight = `${child.scrollHeight}px`;
      }
    }, 100),
    [panelRef]
  );

  React.useEffect(() => {
    addEventListener('resize', updateMaxHeight);
    updateMaxHeight();

    return () => {
      removeEventListener('resize', updateMaxHeight);
    };
  }, [isExpanded, updateMaxHeight, props.children]);

  return (
    <StyledPanel
      {...getPanelProps({
        role: null,
        ref: panelRef,
        index,
        isBare,
        isCompact,
        isExpanded,
        ...props
      })}
    >
      <StyledInnerPanel isExpanded={isExpanded}>{props.children}</StyledInnerPanel>
    </StyledPanel>
  );
});

Panel.displayName = 'Panel';
