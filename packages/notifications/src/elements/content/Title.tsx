/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StyledTitle } from '../../styled';

/**
 * Used for Notification titles. Supports all `<div>` props
 */
export const Title = React.forwardRef<HTMLDivElement>((props, ref) => (
  <StyledTitle ref={ref} {...props} />
));
