/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';
import {
  Table,
  Head,
  HeaderCell,
  HeaderRow,
  SortableCell,
  Caption,
  Body,
  Cell,
  Row
} from '@zendeskgarden/react-tables';

interface IRow {
  id: string;
  subject: string;
  requester: string;
  type: 'Ticket' | 'Incident';
}

type SORT_DIRECTION = 'asc' | 'desc' | undefined;

const DATA: IRow[] = [];

for (let x = 0; x < 10; x++) {
  DATA.push({
    id: `row-${x}`,
    subject: `Custom ticket view ${x + 1}`,
    requester: x % 2 === 0 ? 'John Smith' : 'Jane Doe',
    type: x % 3 === 0 ? 'Ticket' : 'Incident'
  });
}

const StyledCaption = styled(Caption)`
  margin-bottom: ${props => props.theme.space.sm};
  line-height: ${props => props.theme.lineHeights.xl};
  font-size: ${props => props.theme.fontSizes.xl};
`;

/**
 * https://github.com/storybookjs/storybook/issues/13362
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Sortable: Story = ({ foo }) => {
  const [requesterSort, setRequesterSort] = useState<SORT_DIRECTION>('asc');
  const [typeSort, setTypeSort] = useState<SORT_DIRECTION>();

  const sortData = useMemo(() => {
    if (!requesterSort && !typeSort) {
      return DATA;
    }

    let field: string;
    let sortValue: SORT_DIRECTION;

    if (requesterSort) {
      field = 'requester';
      sortValue = requesterSort;
    } else {
      field = 'type';
      sortValue = typeSort;
    }

    return DATA.slice().sort((a: any, b: any) => {
      const aValue = a[field];
      const bValue = b[field];

      if (aValue > bValue) {
        return sortValue === 'asc' ? 1 : -1;
      } else if (aValue < bValue) {
        return sortValue === 'asc' ? -1 : 1;
      }

      return 0;
    });
  }, [requesterSort, typeSort]);

  return (
    <Table>
      <StyledCaption>Sortable Ticket View</StyledCaption>
      <Head>
        <HeaderRow>
          <HeaderCell>Subject</HeaderCell>
          <SortableCell
            onClick={() => {
              if (requesterSort === 'asc') {
                setRequesterSort('desc');
                setTypeSort(undefined);
              } else if (requesterSort === 'desc') {
                setRequesterSort(undefined);
                setTypeSort(undefined);
              } else {
                setRequesterSort('asc');
                setTypeSort(undefined);
              }
            }}
            sort={requesterSort}
          >
            Requester
          </SortableCell>
          <SortableCell
            onClick={() => {
              if (typeSort === 'asc') {
                setRequesterSort(undefined);
                setTypeSort('desc');
              } else if (typeSort === 'desc') {
                setRequesterSort(undefined);
                setTypeSort(undefined);
              } else {
                setRequesterSort(undefined);
                setTypeSort('asc');
              }
            }}
            sort={typeSort}
          >
            Type
          </SortableCell>
        </HeaderRow>
      </Head>
      <Body>
        {sortData.map(row => (
          <Row key={row.id}>
            <Cell>{row.subject}</Cell>
            <Cell>{row.requester}</Cell>
            <Cell>{row.type}</Cell>
          </Row>
        ))}
      </Body>
    </Table>
  );
};

Sortable.parameters = {
  docs: {
    description: {
      story: `
When creating a sortable table, use the \`SortableCell\` component
to ensure that the header is interactive and all accessibility attributes are applied.
      `
    }
  }
};
