/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, forwardRef } from 'react';

import { useTableContext } from '../../hooks/table/useTableContext';
import { StyledHeaderRow } from '../../views/table/StyledHeaderRow';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Table.HeaderRow` instead
 *
 * @extends HTMLAttributes<HTMLTableRowElement>
 */
export const HeaderRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(
  (props, ref) => {
    const { size } = useTableContext();

    return (
      <StyledHeaderRow
        ref={ref}
        $size={size}
        {...props}
        data-garden-id={COMPONENT_IDS['tables.header_row']}
        data-garden-version={PACKAGE_VERSION}
      />
    );
  }
);

HeaderRow.displayName = 'Table.HeaderRow';
