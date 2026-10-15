/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { useMemo, forwardRef } from 'react';

import { TableProvider } from '../../context/table/TableContext';
import { ITableProps, TABLE_SIZE } from '../../types/elements';
import { StyledTable } from '../../views/table/StyledTable';
import { COMPONENT_IDS } from '../utils';
import { Body } from './Body';
import { Caption } from './Caption';
import { Cell } from './Cell';
import { GroupRow } from './GroupRow';
import { Head } from './Head';
import { HeaderCell } from './HeaderCell';
import { HeaderRow } from './HeaderRow';
import { OverflowButton } from './OverflowButton';
import { Row } from './Row';
import { SortableCell } from './SortableCell';

/**
 * @extends TableHTMLAttributes<HTMLTableElement>
 */
export const TableComponent = forwardRef<HTMLTableElement, ITableProps>(
  ({ isReadOnly, size = 'medium', ...props }, ref) => {
    const tableContextValue = useMemo(
      () => ({ size: size!, isReadOnly: isReadOnly! }),
      [size, isReadOnly]
    );

    return (
      <TableProvider value={tableContextValue}>
        <StyledTable
          ref={ref}
          {...props}
          data-garden-id={COMPONENT_IDS['tables.table']}
          data-garden-version={PACKAGE_VERSION}
        />
      </TableProvider>
    );
  }
);

TableComponent.displayName = 'Table';

TableComponent.propTypes = {
  size: PropTypes.oneOf(TABLE_SIZE),
  isReadOnly: PropTypes.bool
};

export const Table = TableComponent as typeof TableComponent & {
  Body: typeof Body;
  Caption: typeof Caption;
  Cell: typeof Cell;
  GroupRow: typeof GroupRow;
  Head: typeof Head;
  HeaderCell: typeof HeaderCell;
  HeaderRow: typeof HeaderRow;
  OverflowButton: typeof OverflowButton;
  Row: typeof Row;
  SortableCell: typeof SortableCell;
};

Table.Body = Body;
Table.Caption = Caption;
Table.Cell = Cell;
Table.GroupRow = GroupRow;
Table.Head = Head;
Table.HeaderCell = HeaderCell;
Table.HeaderRow = HeaderRow;
Table.OverflowButton = OverflowButton;
Table.Row = Row;
Table.SortableCell = SortableCell;
