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
import { Head } from './Head';
import { Body } from './Body';
import { Caption } from './Caption';
import { Cell } from './Cell';
import { GroupRow } from './GroupRow';
import { HeaderCell } from './HeaderCell';
import { HeaderRow } from './HeaderRow';
import { OverflowButton } from './OverflowButton';
import { Row } from './Row';
import { SortableCell } from './SortableCell';

export const TableComponent = React.forwardRef<HTMLTableElement, ITableProps>((props, ref) => {
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

TableComponent.displayName = 'Table';

TableComponent.defaultProps = {
  size: 'medium'
};

TableComponent.propTypes = {
  size: PropTypes.oneOf(SIZE),
  isReadOnly: PropTypes.bool
};

/**
 * @extends TableHTMLAttributes<HTMLTableElement>
 */
export const Table = TableComponent as typeof TableComponent & {
  Head: typeof Head;
  Caption: typeof Caption;
  Cell: typeof Cell;
  GroupRow: typeof GroupRow;
  Body: typeof Body;
  HeaderCell: typeof HeaderCell;
  HeaderRow: typeof HeaderRow;
  OverflowButton: typeof OverflowButton;
  Row: typeof Row;
  SortableCell: typeof SortableCell;
};

Table.Head = Head;
Table.Caption = Caption;
Table.Cell = Cell;
Table.GroupRow = GroupRow;
Table.Body = Body;
Table.HeaderCell = HeaderCell;
Table.HeaderRow = HeaderRow;
Table.OverflowButton = OverflowButton;
Table.Row = Row;
Table.SortableCell = SortableCell;
