/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledBody } from '../styled';

/**
 * Accepts all `<tbody>` attributes and events
 */
export const Body = React.forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>((props, ref) => <StyledBody ref={ref} {...props} />);
