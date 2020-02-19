/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledSidebar } from '../../styled';

/**
 * Accepts all `<aside>` attributes and events
 */
export const Sidebar = React.forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => (
  <StyledSidebar ref={ref} {...props} />
));
