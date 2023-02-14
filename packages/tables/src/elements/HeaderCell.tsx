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
import { Cell } from './Cell';

/**
 * @extends ThHTMLAttributes<HTMLTableCellElement>
 */
export const HeaderCell = forwardRef<HTMLTableCellElement, IHeaderCellProps>(
  ({ hidden, ...props }, ref) => {
    const { size } = useTableContext();

    return (
      <StyledHeaderCell ref={ref} size={size} {...props}>
        {hidden && props.children ? (
          <StyledHiddenCell>{props.children}</StyledHiddenCell>
        ) : (
          props.children
        )}
      </StyledHeaderCell>
    );
  }
);

HeaderCell.displayName = 'HeaderCell';

HeaderCell.propTypes = Cell.propTypes;
