/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { Checkbox, Field } from '@zendeskgarden/react-forms';
import {
  Table,
  ITableProps,
  IHeadProps,
  ISortableCellProps,
  IRowProps
} from '@zendeskgarden/react-tables';
import { CELL_WIDTH, TABLE_ROW } from './types';

interface IArgs extends ITableProps {
  caption: string;
  data: TABLE_ROW[];
  widths: CELL_WIDTH[];
  hasOverflow: boolean;
  hasSelection: boolean;
  isBold: boolean;
  isSortable: boolean;
  isSelected?: IRowProps['isSelected'];
  isStriped?: IRowProps['isStriped'];
  isSticky?: IHeadProps['isSticky'];
  isTruncated?: boolean;
  isHidden?: boolean;
}

export const TableStory: Story<IArgs> = ({
  caption,
  data,
  widths = [],
  hasOverflow,
  hasSelection,
  isBold,
  isSortable,
  isSelected,
  isStriped,
  isSticky,
  isTruncated,
  isHidden,
  ...args
}) => {
  const headerCells = data.reduce((previous, current) => {
    let retVal = previous;

    if (typeof current !== 'string') {
      const keys = Object.keys(current);

      if (keys.length > previous.length) {
        retVal = keys.map(value => `${value[0].toUpperCase()}${value.slice(1)}`);
      }
    }

    return retVal;
  }, [] as string[]);
  const [sort, setSort] = useState<Record<string, ISortableCellProps['sort']>>({});
  const colSpan = headerCells.length + (hasSelection ? 1 : 0) + (hasOverflow ? 1 : 0);

  return (
    <Table {...args}>
      <Table.Caption>{caption}</Table.Caption>
      <Table.Head isSticky={isSticky}>
        <Table.HeaderRow>
          {hasSelection ? <Table.HeaderCell isMinimum hidden={isHidden}>
              <Field>
                <Checkbox>
                  <Field.Label hidden>Select all</Field.Label>
                </Checkbox>
              </Field>
            </Table.HeaderCell> : null}
          {headerCells.map((headerCell, index) =>
            isSortable ? (
              <Table.SortableCell
                key={index}
                cellProps={{ isTruncated }}
                onClick={() => {
                  if (sort[headerCell] === 'asc') {
                    setSort({ [headerCell]: 'desc' });
                  } else if (sort[headerCell] === 'desc') {
                    setSort({ [headerCell]: undefined });
                  } else {
                    setSort({ [headerCell]: 'asc' });
                  }
                }}
                sort={sort[headerCell]}
                width={widths ? widths[index] : undefined}
              >
                {headerCell}
              </Table.SortableCell>
            ) : (
              <Table.HeaderCell
                key={index}
                isTruncated={isTruncated}
                width={widths ? widths[index] : undefined}
              >
                {headerCell}
              </Table.HeaderCell>
            )
          )}
          {hasOverflow ? <Table.HeaderCell hasOverflow>
              <Table.OverflowButton aria-label="overflow" />
            </Table.HeaderCell> : null}
        </Table.HeaderRow>
      </Table.Head>
      <Table.Body>
        {data
          .filter(value => (isStriped ? typeof value !== 'string' : true))
          .map((row, rowIndex) =>
            typeof row === 'string' ? (
              <Table.GroupRow key={rowIndex}>
                <Table.Cell colSpan={colSpan} isTruncated={isTruncated}>
                  {isBold ? <b>{row}</b> : row}
                </Table.Cell>
              </Table.GroupRow>
            ) : (
              <Table.Row
                key={rowIndex}
                isSelected={isSelected}
                isStriped={isStriped ? rowIndex % 2 === 0 : null}
              >
                {hasSelection ? <Table.Cell isMinimum>
                    <Field>
                      <Checkbox>
                        <Field.Label hidden>Select all</Field.Label>
                      </Checkbox>
                    </Field>
                  </Table.Cell> : null}
                {Object.keys(row).map((column, columnIndex) => (
                  <Table.Cell
                    key={`${rowIndex}${columnIndex}`}
                    isTruncated={isTruncated}
                    hidden={isHidden}
                  >
                    {row[column]}
                  </Table.Cell>
                ))}
                {hasOverflow ? <Table.Cell hasOverflow>
                    <Table.OverflowButton aria-label="overflow" />
                  </Table.Cell> : null}
              </Table.Row>
            )
          )}
      </Table.Body>
    </Table>
  );
};
