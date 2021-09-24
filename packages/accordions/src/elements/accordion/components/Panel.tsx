/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useRef, forwardRef, HTMLAttributes } from 'react';
import debounce from 'lodash.debounce';
import mergeRefs from 'react-merge-refs';
import { useAccordionContext, useSectionContext, IAccordionContext } from '../../../utils';
import { StyledPanel, StyledInnerPanel } from '../../../styled';

type PanelProps = IAccordionContext | { isExpanded?: boolean };

export const Panel = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => {
  const { isCompact, isBare, isAnimated, getPanelProps, expandedSections } = useAccordionContext();
  const panelRef = useRef<HTMLElement>();
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
    if (!isAnimated) {
      return undefined;
    }

    addEventListener('resize', updateMaxHeight);
    updateMaxHeight();

    return () => {
      removeEventListener('resize', updateMaxHeight);
    };
  }, [isAnimated, isExpanded, updateMaxHeight, props.children]);

  return (
    <StyledPanel
      {...getPanelProps<PanelProps>({
        role: null,
        ref: mergeRefs([panelRef, ref]),
        index,
        isBare,
        isCompact,
        isExpanded,
        isAnimated,
        ...props
      })}
    >
      <StyledInnerPanel isExpanded={isExpanded} isAnimated={isAnimated}>
        {props.children}
      </StyledInnerPanel>
    </StyledPanel>
  );
});

Panel.displayName = 'Panel';
