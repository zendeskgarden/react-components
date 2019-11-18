/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledSubNav } from '../../styled';

/**
 * Accepts all `<nav>` attributes and events
 */
export const SubNav = React.forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => (
  <StyledSubNav ref={ref} {...props} />
));
