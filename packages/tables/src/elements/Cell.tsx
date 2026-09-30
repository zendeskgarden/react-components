/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StyledCell, StyledHiddenCell } from '../styled';
import { useTableContext } from '../utils/useTableContext';
import { HeaderRowContext } from '../utils/useHeaderRowContext';
import { ICellProps } from '../types';

/**
 * @deprecated use `Table.Cell` instead
 *
 * @extends TdHTMLAttributes<HTMLTableCellElement>
 */
export const Cell = React.forwardRef<HTMLTableCellElement, ICellProps>(
  ({ hidden, isMinimum, isTruncated, hasOverflow, ...props }, ref) => {
    const { size } = useTableContext();

    return (
      // the cell's content (for example, a nested table) is not in a header row
      <HeaderRowContext.Provider value={false}>
        <StyledCell
          ref={ref}
          $size={size}
          $isMinimum={isMinimum}
          $isTruncated={isTruncated}
          $hasOverflow={hasOverflow}
          {...props}
        >
          {hidden && props.children ? (
            <StyledHiddenCell>{props.children}</StyledHiddenCell>
          ) : (
            props.children
          )}
        </StyledCell>
      </HeaderRowContext.Provider>
    );
  }
);

Cell.displayName = 'Table.Cell';

Cell.propTypes = {
  isMinimum: PropTypes.bool,
  isTruncated: PropTypes.bool,
  hasOverflow: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
