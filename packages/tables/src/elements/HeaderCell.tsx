/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';

import { StyledHeaderCell, IStyledCellProps } from '../styled';
import { useTableContext } from '../utils/useTableContext';

/**
 * Accepts all `<th>` attributes and events
 */
export const HeaderCell = React.forwardRef<
  HTMLTableHeaderCellElement,
  Omit<IStyledCellProps, 'size'> & HTMLAttributes<HTMLTableHeaderCellElement>
>((props, ref) => {
  const { size } = useTableContext();

  return <StyledHeaderCell ref={ref} size={size} {...props} />;
});

HeaderCell.propTypes = {
  isMinimum: PropTypes.bool,
  isTruncated: PropTypes.bool,
  hasOverflow: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
