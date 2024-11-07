/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledHeaderIcon } from '../../../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const HeaderIcon = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    return <StyledHeaderIcon ref={ref} {...props} />;
  }
);

HeaderIcon.displayName = 'HeaderIcon';
