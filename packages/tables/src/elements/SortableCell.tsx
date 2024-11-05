/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import SortStrokeIcon from '@zendeskgarden/svg-icons/src/12/sort-stroke.svg';
import SortFillIcon from '@zendeskgarden/svg-icons/src/12/sort-fill.svg';
import { ISortableCellProps, SORT } from '../types';
import {
  StyledHeaderCell,
  StyledSortableButton,
  StyledSortableStrokeIconWrapper,
  StyledSortableFillIconWrapper
} from '../styled';

/**
 * @deprecated use `Table.SortableCell` instead
 *
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const SortableCell = forwardRef<HTMLButtonElement, ISortableCellProps>(
  ({ sort, cellProps = {}, width, children, ...sortableButtonProps }, ref) => {
    const { isMinimum, isTruncated, hasOverflow, ...otherCellProps } = cellProps;
    let ariaSortValue = 'none';

    if (sort === 'asc') {
      ariaSortValue = 'ascending';
    } else if (sort === 'desc') {
      ariaSortValue = 'descending';
    }

    /* eslint-disable-next-line no-useless-assignment */
    const SortIcon = sort === undefined ? SortStrokeIcon : SortFillIcon;

    return (
      <StyledHeaderCell
        aria-sort={ariaSortValue}
        width={width}
        $isMinimum={isMinimum}
        $isTruncated={isTruncated}
        $hasOverflow={hasOverflow}
        {...otherCellProps}
      >
        <StyledSortableButton $sort={sort} ref={ref} {...sortableButtonProps}>
          {children}
          <StyledSortableStrokeIconWrapper>
            <SortIcon />
          </StyledSortableStrokeIconWrapper>
          <StyledSortableFillIconWrapper>
            <SortFillIcon />
          </StyledSortableFillIconWrapper>
        </StyledSortableButton>
      </StyledHeaderCell>
    );
  }
);

SortableCell.displayName = 'Table.SortableCell';

SortableCell.propTypes = {
  sort: PropTypes.oneOf(SORT),
  cellProps: PropTypes.any,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
