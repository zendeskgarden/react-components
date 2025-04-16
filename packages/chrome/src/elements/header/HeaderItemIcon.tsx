/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, SVGAttributes } from 'react';
import { StyledHeaderItemIcon } from '../../styled';

/**
 * @deprecated use `Header.ItemIcon` instead
 *
 * @extends SVGAttributes<SVGElement>
 */
export const HeaderItemIcon = ({
  children,
  ...props
}: PropsWithChildren<SVGAttributes<SVGElement>>) => (
  <StyledHeaderItemIcon {...props}>{children}</StyledHeaderItemIcon>
);

HeaderItemIcon.displayName = 'Header.ItemIcon';
