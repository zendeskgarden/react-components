/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';

import { usePaneContext } from '../../hooks/grid/usePaneContext';
import { StyledPaneContent } from '../../views/grid/StyledPaneContent';
import { COMPONENT_IDS } from '../utils';

const ContentComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { isVisible } = usePaneContext();

    return (
      <StyledPaneContent
        hidden={!isVisible}
        ref={ref}
        {...props}
        data-garden-id={COMPONENT_IDS['pane.content']}
        data-garden-version={PACKAGE_VERSION}
      />
    );
  }
);

ContentComponent.displayName = 'Pane.Content';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Content = ContentComponent;
