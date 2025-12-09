/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { SIZE } from '../types/index.js';
import '../styled/StyledBody.js';
import '../styled/StyledCaption.js';
import '../styled/StyledHeaderRow.js';
import '../styled/StyledHead.js';
import '../styled/StyledCell.js';
import '../styled/StyledGroupRow.js';
import { StyledTable } from '../styled/StyledTable.js';
import '../styled/StyledHeaderCell.js';
import '../styled/StyledHiddenCell.js';
import '../styled/StyledSortableButton.js';
import '../styled/StyledOverflowButton.js';
import '../styled/StyledRow.js';
import { TableContext } from '../utils/useTableContext.js';
import { Head } from './Head.js';
import { Body } from './Body.js';
import { Caption } from './Caption.js';
import { Cell } from './Cell.js';
import { GroupRow } from './GroupRow.js';
import { HeaderCell } from './HeaderCell.js';
import { HeaderRow } from './HeaderRow.js';
import { OverflowButton } from './OverflowButton.js';
import { Row } from './Row.js';
import { SortableCell } from './SortableCell.js';

const TableComponent = React__default.forwardRef((_ref, ref) => {
  let {
    isReadOnly,
    size = 'medium',
    ...props
  } = _ref;
  const tableContextValue = useMemo(() => ({
    size: size,
    isReadOnly: isReadOnly
  }), [size, isReadOnly]);
  return React__default.createElement(TableContext.Provider, {
    value: tableContextValue
  }, React__default.createElement(StyledTable, Object.assign({
    ref: ref
  }, props)));
});
TableComponent.displayName = 'Table';
TableComponent.propTypes = {
  size: PropTypes.oneOf(SIZE),
  isReadOnly: PropTypes.bool
};
const Table = TableComponent;
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

export { Table, TableComponent };
