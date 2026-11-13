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
  StyledSortableStrokeIconWrapper,
  StyledSortableFillIconWrapper
} from '../styled';

/**
 * @deprecated use `Table.SortableCell` instead
 *
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const SortableCell = forwardRef<HTMLButtonElement, ISortableCellProps>(
  (
    {
      sort,
      cellProps = {},
      width,
      sortLabels = {},
      roleDescription: roleDescriptionProp,
      children,
      ...sortableButtonProps
    },
    ref
  ) => {
    const { isMinimum, isTruncated, hasOverflow, ...otherCellProps } = cellProps;
    let ariaSortValue = 'none';

    if (sort === 'asc') {
      ariaSortValue = 'ascending';
    } else if (sort === 'desc') {
      ariaSortValue = 'descending';
    }

    const SortIcon = sort === undefined ? SortStrokeIcon : SortFillIcon;

    /* Always announces that the button sorts, whatever the sort state */
    const roleDescription = useText(
      SortableCell,
      { roleDescription: roleDescriptionProp },
      'roleDescription',
      'sort button'
    );

    /* Only the label for the current sort state is evaluated (and validated) */
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
    let sortLabel;

    if (sort === 'asc') {
      sortLabel = ascendingLabel;
    } else if (sort === 'desc') {
      sortLabel = descendingLabel;
    }

    /* The label is on the icon, so it is part of the button name without an extra element */
    const iconProps = sortLabel
      ? { role: 'img', 'aria-label': sortLabel, 'aria-hidden': undefined, focusable: 'false' }
      : {};

    return (
      <StyledHeaderCell
        aria-sort={ariaSortValue}
        width={width}
        $isMinimum={isMinimum}
        $isTruncated={isTruncated}
        $hasOverflow={hasOverflow}
        {...otherCellProps}
      >
        <StyledSortableButton
          $sort={sort}
          ref={ref}
          aria-roledescription={roleDescription}
          {...sortableButtonProps}
        >
          {children}
          <StyledSortableStrokeIconWrapper>
            <SortIcon />
          </StyledSortableStrokeIconWrapper>
          <StyledSortableFillIconWrapper>
            <SortFillIcon {...iconProps} />
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
  roleDescription: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
