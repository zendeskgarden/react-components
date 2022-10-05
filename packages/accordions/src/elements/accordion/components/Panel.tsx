/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useRef, useContext, forwardRef, HTMLAttributes } from 'react';
import debounce from 'lodash.debounce';
import mergeRefs from 'react-merge-refs';
import { ThemeContext } from 'styled-components';
import { useDocument } from '@zendeskgarden/react-theming';

import { useAccordionContext, useSectionContext, IAccordionContext } from '../../../utils';
import { StyledPanel, StyledInnerPanel } from '../../../styled';

type PanelProps = IAccordionContext | { isExpanded?: boolean };

const PanelComponent = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => {
  const { isCompact, isBare, isAnimated, getPanelProps, expandedSections } = useAccordionContext();
  const panelRef = useRef<HTMLElement>();
  const index = useSectionContext();
  const isExpanded = expandedSections.includes(index);

  const theme = useContext(ThemeContext);
  const environment = useDocument(theme);

  useEffect(() => {
    if (!isAnimated) {
      return undefined;
    }

    if (environment) {
      const updateMaxHeight = debounce(() => {
        if (panelRef.current) {
          const child = panelRef.current.children[0] as any;

          child.style.maxHeight = `${child.scrollHeight}px`;
        }
      }, 100);

      const win = environment.defaultView! || window;

      win.addEventListener('resize', updateMaxHeight);
      updateMaxHeight();

      return () => {
        updateMaxHeight.cancel();
        win.removeEventListener('resize', updateMaxHeight);
      };
    }

    return undefined;
  }, [isAnimated, panelRef, environment, props.children]);

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

PanelComponent.displayName = 'Accordion.Panel';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Panel = PanelComponent;
