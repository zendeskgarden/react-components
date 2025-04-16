/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledFooterItem } from '../../styled';

/**
 * @deprecated use `Footer.Item` instead
 *
 * @extends HTMLAttributes<HTMLElement>
 */
export const FooterItem = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => <StyledFooterItem ref={ref} {...props} />
);

FooterItem.displayName = 'Footer.Item';
