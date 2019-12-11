/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';

import { StyledCell, IStyledCellProps } from '../styled';

/**
 * Accepts all `<td>` attributes and events
 */
export const Cell = React.forwardRef<
  HTMLTableCellElement,
  IStyledCellProps & HTMLAttributes<HTMLTableCellElement>
>((props, ref) => <StyledCell ref={ref} {...props} />);

Cell.propTypes = {
  isMinimum: PropTypes.bool,
  isTruncated: PropTypes.bool,
  hasOverflow: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
