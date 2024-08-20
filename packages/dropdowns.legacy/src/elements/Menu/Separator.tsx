/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledSeparator } from '../../styled';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Separator = React.forwardRef<HTMLLIElement, HTMLAttributes<HTMLLIElement>>(
  (props, ref) => <StyledSeparator ref={ref} {...props} />
);

Separator.displayName = 'Separator';
