/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledHeaderRow } from '../styled';
import { useTableContext } from '../utils/useTableContext';

/**
 * @extends HTMLAttributes<HTMLTableRowElement>
 */
export const HeaderRow = React.forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(
  (props, ref) => {
    const { size } = useTableContext();

    return <StyledHeaderRow ref={ref} size={size} {...props} />;
  }
);

HeaderRow.displayName = 'HeaderRow';
