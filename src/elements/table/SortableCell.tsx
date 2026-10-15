/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import SortFillIcon from 'svg-icons-legacy/src/12/sort-fill.svg';
import SortStrokeIcon from 'svg-icons-legacy/src/12/sort-stroke.svg';

import { ISortableCellProps, SORT } from '../../types/elements';
import { StyledHeaderCell } from '../../views/table/StyledHeaderCell';
import {
  StyledSortableButton,
  StyledSortableStrokeIconWrapper,
  StyledSortableFillIconWrapper
} from '../../views/table/StyledSortableButton';
import { COMPONENT_IDS } from '../utils';

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

    const SortIcon = sort === undefined ? SortStrokeIcon : SortFillIcon;

    return (
      <StyledHeaderCell
        aria-sort={ariaSortValue}
        width={width}
        $isMinimum={isMinimum}
        $isTruncated={isTruncated}
        $hasOverflow={hasOverflow}
        {...otherCellProps}
        as="th"
        data-garden-id={COMPONENT_IDS['tables.header_cell']}
        data-garden-version={PACKAGE_VERSION}
      >
        <StyledSortableButton
          $sort={sort}
          ref={ref}
          {...sortableButtonProps}
          type="button"
          data-garden-id={COMPONENT_IDS['tables.sortable']}
          data-garden-version={PACKAGE_VERSION}
        >
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
