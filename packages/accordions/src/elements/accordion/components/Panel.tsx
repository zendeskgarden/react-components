/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, forwardRef, HTMLAttributes } from 'react';
import debounce from 'lodash.debounce';
import { useCombinedRefs } from '@zendeskgarden/container-utilities';
import { useAccordionContext, useSectionContext, enableScroll } from '../../../utils';
import { StyledPanel, StyledInnerPanel } from '../../../styled';

export const Panel = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => {
  const innerPanelRef = React.useRef<HTMLDivElement>(null);
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

  React.useEffect(() => {
    /**
     * Scrolling was disabled to prevent Chromium from auto scrolling when height
     * of a closing panel decreases during animation. That code can be found in
     * `elements/accordion/Header.tsx`. Scrolling is enabled after the inner panel
     * height transition ends.
     */
    const currentInnerPanelRef = innerPanelRef.current;

    currentInnerPanelRef && currentInnerPanelRef.addEventListener('transitionend', enableScroll);

    return () => {
      currentInnerPanelRef &&
        currentInnerPanelRef.removeEventListener('transitionend', enableScroll);
    };
  }, []);

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
      <StyledInnerPanel ref={innerPanelRef} isExpanded={isExpanded}>
        {props.children}
      </StyledInnerPanel>
    </StyledPanel>
  );
});

Panel.displayName = 'Panel';
