/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledFooter } from '../../styled';
import { FooterItem } from './FooterItem';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const FooterComponent = React.forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  (props, ref) => <StyledFooter ref={ref} {...props} />
);

FooterComponent.displayName = 'Footer';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Footer = FooterComponent as typeof FooterComponent & {
  Item: typeof FooterItem;
};

Footer.Item = FooterItem;
