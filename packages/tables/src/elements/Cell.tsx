/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';

import { StyledCell, IStyledCellProps } from '../styled';
import { useTableContext } from '../utils/useTableContext';

/**
 * Accepts all `<td>` attributes and events
 */
export const Cell = React.forwardRef<
  HTMLTableCellElement,
  Omit<IStyledCellProps, 'size'> & HTMLAttributes<HTMLTableCellElement>
>((props, ref) => {
  const { size } = useTableContext();

  return <StyledCell ref={ref} size={size} {...props} />;
});

Cell.propTypes = {
  isMinimum: PropTypes.bool,
  isTruncated: PropTypes.bool,
  hasOverflow: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
