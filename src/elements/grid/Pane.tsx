/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useState, useMemo, useRef, HTMLAttributes, forwardRef } from 'react';
import { mergeRefs } from 'react-merge-refs';
import useResizeObserver from 'use-resize-observer';

import { PaneProvider } from '../../context/grid/PaneContext';
import { StyledPane } from '../../views/grid/StyledPane';
import { Content } from './Content';
import { Splitter } from './Splitter';
import { SplitterButton } from './SplitterButton';

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
      <PaneProvider value={paneContext}>
        <StyledPane id={paneId} ref={mergeRefs([ref, observerRef])} {...props}>
          {children}
        </StyledPane>
      </PaneProvider>
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
