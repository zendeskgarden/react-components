/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { TdHTMLAttributes } from 'react';
import PropTypes from 'prop-types';

import { StyledCell, IStyledCellProps } from '../styled';
import { useTableContext } from '../utils/useTableContext';

/**
 * @extends TdHTMLAttributes<HTMLTableCellElement>
 */
export const Cell = React.forwardRef<
  HTMLTableCellElement,
  Omit<IStyledCellProps, 'size'> & TdHTMLAttributes<HTMLTableCellElement>
>((props, ref) => {
  const { size } = useTableContext();

  return <StyledCell ref={ref} size={size} {...props} />;
});

Cell.displayName = 'Cell';

Cell.propTypes = {
  isMinimum: PropTypes.bool,
  isTruncated: PropTypes.bool,
  hasOverflow: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
