/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledPaneContent } from '../../../styled';

const ContentComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    return <StyledPaneContent ref={ref} {...props} />;
  }
);

ContentComponent.displayName = 'Pane.Content';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Content = ContentComponent;
