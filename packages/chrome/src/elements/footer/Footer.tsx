/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledFooter } from '../../styled';

/**
 * Accepts all `<footer>` props. _Remember to set the_ `hasFooter` _prop on the parent_ `<Body>`.
 */
export const Footer = React.forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => (
  <StyledFooter ref={ref} {...props} />
));
