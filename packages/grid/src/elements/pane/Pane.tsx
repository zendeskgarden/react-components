/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useMemo, useRef, HTMLAttributes, forwardRef } from 'react';
import useResizeObserver from 'use-resize-observer';
import { mergeRefs } from 'react-merge-refs';
import { Splitter } from './components/Splitter';
import { Content } from './components/Content';
import { SplitterButton } from './components/SplitterButton';
import { StyledPane } from '../../styled';
import { PaneContext } from '../../utils/usePaneContext';

const PaneComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    const [paneId, setPaneId] = useState<string>();

    const observerRef = useRef<HTMLDivElement>(null);
    const { width = 0, height = 0 } = useResizeObserver<HTMLDivElement>({ ref: observerRef });

    const isVisible = useMemo(
      () => (observerRef.current ? width > 0 && height > 0 : true),
      [width, height]
    );

    const paneContext = useMemo(
      () => ({
        isVisible,
        id: paneId,
        setId: (id: string) => setPaneId(id)
      }),
      [paneId, isVisible]
    );

    return (
      <PaneContext.Provider value={paneContext}>
        <StyledPane id={paneId} ref={mergeRefs([ref, observerRef])} {...props}>
          {children}
        </StyledPane>
      </PaneContext.Provider>
    );
  }
);

PaneComponent.displayName = 'Pane';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Pane = PaneComponent as typeof PaneComponent & {
  Content: typeof Content;
  Splitter: typeof Splitter;
  SplitterButton: typeof SplitterButton;
};

Pane.Content = Content;
Pane.Splitter = Splitter;
Pane.SplitterButton = SplitterButton;
