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
import { ICellProps } from '../types';

/**
 * @extends TdHTMLAttributes<HTMLTableCellElement>
 */
export const Cell = React.forwardRef<HTMLTableCellElement, ICellProps>(
  ({ hidden, ...props }, ref) => {
    const { size } = useTableContext();

    return (
      <StyledCell ref={ref} size={size} {...props}>
        {hidden && props.children ? (
          <StyledHiddenCell>{props.children}</StyledHiddenCell>
        ) : (
          props.children
        )}
      </StyledCell>
    );
  }
);

Cell.displayName = 'Cell';

Cell.propTypes = {
  isMinimum: PropTypes.bool,
  isTruncated: PropTypes.bool,
  hasOverflow: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
