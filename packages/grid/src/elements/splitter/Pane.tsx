/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useMemo, HTMLAttributes, forwardRef } from 'react';
import { Splitter } from './components/Splitter';
import { Content } from './components/Content';
import { StyledPane } from '../../styled';
import { PaneContext } from '../../utils/usePaneContext';

const PaneComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children }, ref) => {
    const [paneId, setPaneId] = useState<string>();

    const paneContext = useMemo(
      () => ({
        id: paneId,
        setId: (id: string) => setPaneId(id)
      }),
      [paneId, setPaneId]
    );

    return (
      <PaneContext.Provider value={paneContext}>
        <StyledPane id={paneId} ref={ref}>
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
};

Pane.Content = Content;
Pane.Splitter = Splitter;
