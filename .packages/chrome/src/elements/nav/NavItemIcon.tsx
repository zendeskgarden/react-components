/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { SVGAttributes, PropsWithChildren } from 'react';

import { StyledNavItemIcon } from '../../styled';

/**
 * @deprecated use `Nav.ItemIcon` instead
 *
 * @extends SVGAttributes<SVGElement>
 */
export const NavItemIcon = ({
  children,
  ...props
}: PropsWithChildren<SVGAttributes<SVGElement>>) => (
  <StyledNavItemIcon {...props}>{children}</StyledNavItemIcon>
);

NavItemIcon.displayName = 'Nav.ItemIcon';
