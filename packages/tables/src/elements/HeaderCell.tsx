/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ThHTMLAttributes, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledHeaderCell } from '../styled';
import { useTableContext } from '../utils/useTableContext';

export interface IHeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
  /**
   * Applies minimum fixed width styling (e.g. for cells that contain
   * checkboxes or icons)
   */
  isMinimum?: boolean;
  /** Truncates long text with an ellipsis */
  isTruncated?: boolean;
  /** Applies styling for a cell that contains an overflow menu */
  hasOverflow?: boolean;
  /** Adjusts the [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) of the cell */
  width?: string | number;
}

/**
 * @extends ThHTMLAttributes<HTMLTableCellElement>
 */
export const HeaderCell = forwardRef<HTMLTableCellElement, IHeaderCellProps>((props, ref) => {
  const { size } = useTableContext();

  return <StyledHeaderCell ref={ref} size={size} {...props} />;
});

HeaderCell.displayName = 'HeaderCell';

HeaderCell.propTypes = {
  isMinimum: PropTypes.bool,
  isTruncated: PropTypes.bool,
  hasOverflow: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
