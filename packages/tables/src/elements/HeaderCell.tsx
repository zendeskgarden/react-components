/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';

import { StyledHeaderCell, IStyledCellProps } from '../styled';

/**
 * Accepts all `<th>` attributes and events
 */
export const HeaderCell = React.forwardRef<
  HTMLTableHeaderCellElement,
  IStyledCellProps & HTMLAttributes<HTMLTableHeaderCellElement>
>((props, ref) => <StyledHeaderCell ref={ref} {...props} />);

HeaderCell.propTypes = {
  isMinimum: PropTypes.bool,
  isTruncated: PropTypes.bool,
  hasOverflow: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
