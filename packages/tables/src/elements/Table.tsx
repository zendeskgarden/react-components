/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledTable, IStyledTableProps } from '../styled';
import { TableContext } from '../utils/useTableContext';

/**
 * Accepts all `<table>` attributes and events
 */
export const Table = React.forwardRef<
  HTMLTableElement,
  IStyledTableProps & HTMLAttributes<HTMLTableElement>
>((props, ref) => {
  const tableContextValue = { size: props.size! };

  return (
    <TableContext.Provider value={tableContextValue}>
      <StyledTable ref={ref} {...props} />
    </TableContext.Provider>
  );
});

Table.defaultProps = {
  size: 'medium'
};

Table.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};
