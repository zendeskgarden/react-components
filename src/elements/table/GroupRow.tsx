/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, forwardRef } from 'react';

import { useTableContext } from '../../hooks/table/useTableContext';
import { StyledGroupRow } from '../../views/table/StyledGroupRow';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Table.GroupRow` instead
 *
 * @extends HTMLAttributes<HTMLTableRowElement>
 */
export const GroupRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(
  (props, ref) => {
    const { size } = useTableContext();

    return (
      <StyledGroupRow
        ref={ref}
        $size={size}
        {...props}
        data-garden-id={COMPONENT_IDS['tables.group_row']}
        data-garden-version={PACKAGE_VERSION}
      />
    );
  }
);

GroupRow.displayName = 'Table.GroupRow';
