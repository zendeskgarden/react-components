/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledNavList } from '../../styled';

/**
 * @extends HTMLAttributes<HTMLUListElement>
 */
export const NavList = React.forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(
  (props, ref) => <StyledNavList ref={ref} {...props} />
);

NavList.displayName = 'Nav';
