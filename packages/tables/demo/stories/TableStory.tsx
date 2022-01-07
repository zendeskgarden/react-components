/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { Checkbox, Field, Label } from '@zendeskgarden/react-forms';
import {
  Table,
  Body,
  Caption,
  Cell,
  GroupRow,
  Head,
  HeaderCell,
  HeaderRow,
  OverflowButton,
  Row,
  SortableCell,
  ITableProps,
  ISortableCellProps
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
  isStriped?: boolean;
  isTruncated?: boolean;
}

export const TableStory: Story<IArgs> = ({
  caption,
  data,
  widths = [],
  hasOverflow,
  hasSelection,
  isBold,
  isSortable,
  isStriped,
  isTruncated,
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
      <Caption>{caption}</Caption>
      <Head>
        <HeaderRow>
          {hasSelection && (
            <HeaderCell isMinimum>
              <Field>
                <Checkbox>
                  <Label hidden>Select all</Label>
                </Checkbox>
              </Field>
            </HeaderCell>
          )}
          {headerCells.map((headerCell, index) =>
            isSortable ? (
              <SortableCell
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
              </SortableCell>
            ) : (
              <HeaderCell
                key={index}
                isTruncated={isTruncated}
                width={widths ? widths[index] : undefined}
              >
                {headerCell}
              </HeaderCell>
            )
          )}
          {hasOverflow && (
            <HeaderCell hasOverflow>
              <OverflowButton aria-label="overflow" />
            </HeaderCell>
          )}
        </HeaderRow>
      </Head>
      <Body>
        {data
          .filter(value => (isStriped ? typeof value !== 'string' : true))
          .map((row, rowIndex) =>
            typeof row === 'string' ? (
              <GroupRow key={rowIndex}>
                <Cell colSpan={colSpan} isTruncated={isTruncated}>
                  {isBold ? <b>{row}</b> : row}
                </Cell>
              </GroupRow>
            ) : (
              <Row key={rowIndex} isStriped={isStriped && rowIndex % 2 === 0}>
                {hasSelection && (
                  <Cell isMinimum>
                    <Field>
                      <Checkbox>
                        <Label hidden>Select all</Label>
                      </Checkbox>
                    </Field>
                  </Cell>
                )}
                {Object.keys(row).map((column, columnIndex) => (
                  <Cell key={`${rowIndex}${columnIndex}`} isTruncated={isTruncated}>
                    {row[column]}
                  </Cell>
                ))}
                {hasOverflow && (
                  <Cell hasOverflow>
                    <OverflowButton aria-label="overflow" />
                  </Cell>
                )}
              </Row>
            )
          )}
      </Body>
    </Table>
  );
};
