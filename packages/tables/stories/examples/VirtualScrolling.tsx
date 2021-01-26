/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';
import { Table, Head, HeaderCell, HeaderRow, Body, Cell, Row } from '@zendeskgarden/react-tables';
import { FixedSizeList } from 'react-window';

interface IRow {
  id: number;
  subject: string;
  requester: string;
  requested: string;
  type: string;
}

const rowData: IRow[] = [];

for (let x = 1; x <= 100000; x++) {
  rowData.push({
    id: x,
    subject: 'Example subject',
    requester: 'John Doe',
    requested: '15 minutes ago',
    type: 'Ticket'
  });
}

const ScrollableTable = styled(Table).attrs({ role: 'presentation' })`
  /* stylelint-disable-next-line declaration-no-important */
  display: block !important;
`;

const ScrollableHead = styled(Head)`
  display: block;
`;

const ScrollableHeaderRow = styled(HeaderRow).attrs({ role: 'row' })`
  /* stylelint-disable-next-line declaration-no-important */
  display: table !important;
  width: 100%;
  table-layout: fixed;
`;

const ScrollableHeaderCell = styled(HeaderCell).attrs({ role: 'columnheader' })``;

const ScrollableBody = styled(Body)`
  /* stylelint-disable-next-line declaration-no-important */
  display: block !important;
`;

const ScrollableRow = styled(Row).attrs({ role: 'row' })`
  /* stylelint-disable-next-line declaration-no-important */
  display: table !important;
  table-layout: fixed;
`;

const ScrollableCell = styled(Cell).attrs({ role: 'cell' })``;

/**
 * https://github.com/storybookjs/storybook/issues/13362
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const VirtualScrolling: Story = ({ foo }) => (
  <div role="grid" aria-rowcount={rowData.length} aria-colcount={4}>
    <ScrollableTable>
      <ScrollableHead>
        <ScrollableHeaderRow>
          <ScrollableHeaderCell>Subject</ScrollableHeaderCell>
          <ScrollableHeaderCell>Requester</ScrollableHeaderCell>
          <ScrollableHeaderCell>Requested</ScrollableHeaderCell>
          <ScrollableHeaderCell>Type</ScrollableHeaderCell>
        </ScrollableHeaderRow>
      </ScrollableHead>
    </ScrollableTable>
    <FixedSizeList
      height={500}
      itemCount={rowData.length}
      itemSize={40}
      width="100%"
      outerElementType={ScrollableTable}
      innerElementType={ScrollableBody}
    >
      {({ index, style }) => (
        <ScrollableRow key={rowData[index].id} style={style} aria-rowindex={index + 1}>
          <ScrollableCell isTruncated>
            [{rowData[index].id}] {rowData[index].subject}
          </ScrollableCell>
          <ScrollableCell isTruncated>{rowData[index].requester}</ScrollableCell>
          <ScrollableCell isTruncated>{rowData[index].requested}</ScrollableCell>
          <ScrollableCell isTruncated>{rowData[index].type}</ScrollableCell>
        </ScrollableRow>
      )}
    </FixedSizeList>
  </div>
);

VirtualScrolling.parameters = {
  docs: {
    description: {
      story: `
Virtualized tables can help efficiently render large amounts of data.

This implementation uses the [react-window](https://react-window.now.sh)
library to implement its virtualization.
      `
    }
  }
};
