/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { useTableContext } from '../../hooks/table/useTableContext';
import { ICellProps } from '../../types/elements';
import { StyledCell } from '../../views/table/StyledCell';
import { StyledHiddenCell } from '../../views/table/StyledHiddenCell';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Table.Cell` instead
 *
 * @extends TdHTMLAttributes<HTMLTableCellElement>
 */
export const Cell = forwardRef<HTMLTableCellElement, ICellProps>(
  ({ hidden, isMinimum, isTruncated, hasOverflow, ...props }, ref) => {
    const { size } = useTableContext();

    return (
      <StyledCell
        ref={ref}
        $size={size}
        $isMinimum={isMinimum}
        $isTruncated={isTruncated}
        $hasOverflow={hasOverflow}
        {...props}
        data-garden-id={COMPONENT_IDS['tables.cell']}
        data-garden-version={PACKAGE_VERSION}
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
      </StyledCell>
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
