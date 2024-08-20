/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import { StyledHead } from '../styled';
import { IHeadProps } from '../types';

/**
 * @deprecated use `Table.Head` instead
 *
 * @extends HTMLAttributes<HTMLTableSectionElement>
 */
export const Head = forwardRef<HTMLTableSectionElement, IHeadProps>(
  ({ isSticky, ...props }, ref) => <StyledHead ref={ref} $isSticky={isSticky} {...props} />
);

Head.displayName = 'Table.Head';
