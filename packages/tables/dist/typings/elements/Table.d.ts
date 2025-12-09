/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { ITableProps } from '../types';
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
/**
 * @extends TableHTMLAttributes<HTMLTableElement>
 */
export declare const TableComponent: React.ForwardRefExoticComponent<ITableProps & React.RefAttributes<HTMLTableElement>>;
export declare const Table: typeof TableComponent & {
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
