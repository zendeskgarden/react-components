/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { ITableProps, SIZE } from '../types';
import { StyledTable } from '../styled';
import { TableContext } from '../utils/useTableContext';

/**
 * @extends TableHTMLAttributes<HTMLTableElement>
 */
export const Table = React.forwardRef<HTMLTableElement, ITableProps>((props, ref) => {
  const tableContextValue = useMemo(
    () => ({ size: props.size!, isReadOnly: props.isReadOnly! }),
    [props.size, props.isReadOnly]
  );

  return (
    <TableContext.Provider value={tableContextValue}>
      <StyledTable ref={ref} {...props} />
    </TableContext.Provider>
  );
});

Table.displayName = 'Table';

Table.defaultProps = {
  size: 'medium'
};

Table.propTypes = {
  size: PropTypes.oneOf(SIZE),
  isReadOnly: PropTypes.bool
};
