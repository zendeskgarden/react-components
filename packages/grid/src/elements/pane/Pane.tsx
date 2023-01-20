/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useMemo, HTMLAttributes, forwardRef } from 'react';
import { Splitter } from './components/Splitter';
import { Content } from './components/Content';
import { SplitterButton } from './components/SplitterButton';
import { StyledPane } from '../../styled';
import { PaneContext } from '../../utils/usePaneContext';
import { usePaneProviderContextData } from '../../utils/usePaneProviderContext';

const PaneComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    const { panesRef, panesInfo } = usePaneProviderContextData() || {};
    const [paneId, setPaneId] = useState<string>();

    let paneIndex = 0;
    let paneInfo = { visible: true };

    if (panesRef) {
      paneIndex = panesRef.current++;
      paneInfo = panesInfo![paneIndex] || paneInfo;
    }

    const paneContext = useMemo(
      () => ({
        isVisible: paneInfo.visible,
        id: paneId,
        setId: (id: string) => setPaneId(id)
      }),
      [paneId, paneInfo.visible]
    );

    return (
      <PaneContext.Provider value={paneContext}>
        <StyledPane id={paneId} ref={ref} {...props}>
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
