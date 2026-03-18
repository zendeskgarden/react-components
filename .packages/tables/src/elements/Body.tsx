/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';

import { StyledBody } from '../styled';

/**
 * @deprecated use `Table.Body` instead
 *
 * @extends HTMLAttributes<HTMLTableSectionElement>
 */
export const Body = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  (props, ref) => <StyledBody ref={ref} {...props} />
);

Body.displayName = 'Table.Body';
