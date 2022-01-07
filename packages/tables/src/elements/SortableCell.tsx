/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import SortStrokeIcon from '@zendeskgarden/svg-icons/src/12/sort-stroke.svg';
import SortFillIcon from '@zendeskgarden/svg-icons/src/12/sort-fill.svg';
import {
  StyledHeaderCell,
  StyledSortableButton,
  StyledSortableStrokeIconWrapper,
  StyledSortableFillIconWrapper,
  IStyledSortableButtonProps
} from '../styled';

export interface ISortableCellProps extends IStyledSortableButtonProps {
  /** Passes props to the cell */
  cellProps?: any;
}

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const SortableCell = React.forwardRef<
  HTMLButtonElement,
  ISortableCellProps & ButtonHTMLAttributes<HTMLButtonElement>
>(({ sort, cellProps, width, children, ...otherProps }, ref) => {
  let ariaSortValue = 'none';

  if (sort === 'asc') {
    ariaSortValue = 'ascending';
  } else if (sort === 'desc') {
    ariaSortValue = 'descending';
  }

  const SortIcon = sort === undefined ? SortStrokeIcon : SortFillIcon;

  return (
    <StyledHeaderCell aria-sort={ariaSortValue} width={width} {...cellProps}>
      <StyledSortableButton sort={sort} ref={ref} {...otherProps}>
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
});

SortableCell.displayName = 'SortableCell';

SortableCell.propTypes = {
  sort: PropTypes.oneOf(['asc', 'desc']),
  cellProps: PropTypes.any,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
