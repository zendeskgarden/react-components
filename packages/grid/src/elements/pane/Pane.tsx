/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useMemo, HTMLAttributes, forwardRef, useEffect } from 'react';
import { useId } from '@zendeskgarden/container-utilities';
import { Splitter } from './components/Splitter';
import { Content } from './components/Content';
import { SplitterButton } from './components/SplitterButton';
import { StyledPane } from '../../styled';
import { PaneContext } from '../../utils/usePaneContext';
import usePaneProviderContext from '../../utils/usePaneProviderContext';

const PaneComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    const paneInternalId = useId();
    const providerContext = usePaneProviderContext();
    const { registerPane, getPaneVisibility } =
      (providerContext.contextData || {})![providerContext.providerId!] || {};
    const [paneId, setPaneId] = useState<string>();

    useEffect(() => {
      if (registerPane) registerPane(paneInternalId!);
    }, [registerPane, paneInternalId]);

    const isVisible = getPaneVisibility ? getPaneVisibility(paneInternalId!) : true;

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
