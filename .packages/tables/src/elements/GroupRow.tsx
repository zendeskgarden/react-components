/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';

import { StyledGroupRow } from '../styled';
import { useTableContext } from '../utils/useTableContext';

/**
 * @deprecated use `Table.GroupRow` instead
 *
 * @extends HTMLAttributes<HTMLTableRowElement>
 */
export const GroupRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(
  (props, ref) => {
    const { size } = useTableContext();

    return <StyledGroupRow ref={ref} $size={size} {...props} />;
  }
);

GroupRow.displayName = 'Table.GroupRow';
