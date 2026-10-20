/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useState, useMemo, useRef, HTMLAttributes, RefObject, forwardRef } from 'react';
import useResizeObserver from 'use-resize-observer';

import { PaneProvider } from '../../context/grid/PaneContext';
import { mergeRefs } from '../../utils/shared/mergeRefs';
import { StyledPane } from '../../views/grid/StyledPane';
import { COMPONENT_IDS } from '../utils';
import { Content } from './Content';
import { Splitter } from './Splitter';
import { SplitterButton } from './SplitterButton';

const PaneComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    const [paneId, setPaneId] = useState<string>();

    const observerRef = useRef<HTMLDivElement>(null);
    const { width = 0, height = 0 } = useResizeObserver<HTMLDivElement>({
      ref: observerRef as RefObject<HTMLDivElement>
    });

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
        <StyledPane
          id={paneId}
          {...props}
          data-garden-id={COMPONENT_IDS.pane}
          data-garden-version={PACKAGE_VERSION}
          ref={mergeRefs([ref, observerRef])}
        >
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
