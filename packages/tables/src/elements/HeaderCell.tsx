/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import { IHeaderCellProps } from '../types';
import { StyledHeaderCell, StyledHiddenCell } from '../styled';
import { useTableContext } from '../utils/useTableContext';
import { HeaderRowContext, useHeaderRowContext } from '../utils/useHeaderRowContext';
import { Cell } from './Cell';

/**
 * @deprecated use `Table.HeaderCell` instead
 *
 * @extends ThHTMLAttributes<HTMLTableCellElement>
 */
export const HeaderCell = forwardRef<HTMLTableCellElement, IHeaderCellProps>(
  ({ hidden, isMinimum, isTruncated, hasOverflow, scope, ...props }, ref) => {
    const { size } = useTableContext();
    const isInHeaderRow = useHeaderRowContext();

    return (
      <StyledHeaderCell
        ref={ref}
        scope={scope ?? (isInHeaderRow ? 'col' : undefined)}
        $size={size}
        $isMinimum={isMinimum}
        $isTruncated={isTruncated}
        $hasOverflow={hasOverflow}
        {...props}
      >
        {/* content (for example, a nested table) is not in this header row */}
        <HeaderRowContext.Provider value={false}>
          {hidden && props.children ? (
            <StyledHiddenCell>{props.children}</StyledHiddenCell>
          ) : (
            props.children
          )}
        </HeaderRowContext.Provider>
      </StyledHeaderCell>
    );
  }
);

HeaderCell.displayName = 'Table.HeaderCell';

HeaderCell.propTypes = Cell.propTypes;
