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
import { useText } from '@zendeskgarden/react-theming';
import { ISortableCellProps, SORT } from '../types';
import {
  StyledHeaderCell,
  StyledSortableButton,
  StyledSortableLabel,
  StyledSortableStrokeIconWrapper,
  StyledSortableFillIconWrapper
} from '../styled';

/**
 * @deprecated use `Table.SortableCell` instead
 *
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const SortableCell = forwardRef<HTMLButtonElement, ISortableCellProps>(
  ({ sort, cellProps = {}, width, sortLabels = {}, children, ...sortableButtonProps }, ref) => {
    const { isMinimum, isTruncated, hasOverflow, ...otherCellProps } = cellProps;
    let ariaSortValue = 'none';

    if (sort === 'asc') {
      ariaSortValue = 'ascending';
    } else if (sort === 'desc') {
      ariaSortValue = 'descending';
    }

    const SortIcon = sort === undefined ? SortStrokeIcon : SortFillIcon;

    /* Only the label for the current sort state is evaluated (and validated) */
    const unsortedLabel = useText(
      SortableCell,
      sortLabels,
      'unsorted',
      'sortable',
      sort === undefined
    );
    const ascendingLabel = useText(
      SortableCell,
      sortLabels,
      'ascending',
      'sorted ascending',
      sort === 'asc'
    );
    const descendingLabel = useText(
      SortableCell,
      sortLabels,
      'descending',
      'sorted descending',
      sort === 'desc'
    );
    let sortLabel = unsortedLabel;

    if (sort === 'asc') {
      sortLabel = ascendingLabel;
    } else if (sort === 'desc') {
      sortLabel = descendingLabel;
    }

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
          <StyledSortableLabel>{` ${sortLabel}`}</StyledSortableLabel>
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
  sortLabels: PropTypes.any,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
