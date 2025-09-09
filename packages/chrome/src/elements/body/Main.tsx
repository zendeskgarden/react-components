/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledMain } from '../../styled';

/**
 * @deprecated no longer for general use
 *
 * @extends HTMLAttributes<HTMLElement>
 */
export const Main = React.forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => (
  <StyledMain ref={ref} {...props} />
));

Main.displayName = 'Main';
