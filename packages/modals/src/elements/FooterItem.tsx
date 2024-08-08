/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StyledFooterItem } from '../styled';

/**
 * @deprecated use `Modal.FooterItem` instead
 *
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const FooterItem = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  (props, ref) => <StyledFooterItem ref={ref} {...props} />
);

FooterItem.displayName = 'Modal.FooterItem';
