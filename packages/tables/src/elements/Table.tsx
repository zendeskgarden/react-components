/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';

import { StyledTable, IStyledTableProps } from '../styled';

/**
 * Accepts all `<table>` attributes and events
 */
export const Table = React.forwardRef<
  HTMLTableElement,
  IStyledTableProps & HTMLAttributes<HTMLTableElement>
>((props, ref) => <StyledTable ref={ref} {...props} />);

Table.propTypes = {
  size: PropTypes.oneOf(['small', 'large'])
};
