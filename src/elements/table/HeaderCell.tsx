/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef } from 'react';

import { useTableContext } from '../../hooks/table/useTableContext';
import { IHeaderCellProps } from '../../types/elements';
import { StyledHeaderCell } from '../../views/table/StyledHeaderCell';
import { StyledHiddenCell } from '../../views/table/StyledHiddenCell';
import { COMPONENT_IDS } from '../utils';
import { Cell } from './Cell';

/**
 * @deprecated use `Table.HeaderCell` instead
 *
 * @extends ThHTMLAttributes<HTMLTableCellElement>
 */
export const HeaderCell = forwardRef<HTMLTableCellElement, IHeaderCellProps>(
  ({ hidden, isMinimum, isTruncated, hasOverflow, ...props }, ref) => {
    const { size } = useTableContext();

    return (
      <StyledHeaderCell
        ref={ref}
        $size={size}
        $isMinimum={isMinimum}
        $isTruncated={isTruncated}
        $hasOverflow={hasOverflow}
        {...props}
      >
        {hidden && props.children ? (
          <StyledHiddenCell
            data-garden-id={COMPONENT_IDS['tables.hidden_cell']}
            data-garden-version={PACKAGE_VERSION}
          >
            {props.children}
          </StyledHiddenCell>
        ) : (
          props.children
        )}
      </StyledHeaderCell>
    );
  }
);

HeaderCell.displayName = 'Table.HeaderCell';

HeaderCell.propTypes = Cell.propTypes;
