/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';
import {
  Table,
  Head,
  HeaderCell,
  HeaderRow,
  Caption,
  Body,
  Cell,
  Row
} from '@zendeskgarden/react-tables';
import { Pagination } from '@zendeskgarden/react-pagination';
import { Avatar } from '@zendeskgarden/react-avatars';
import { XL, MD } from '@zendeskgarden/react-typography';
import { getColor } from '@zendeskgarden/react-theming';

interface IRow {
  id: string;
  name: string;
  avatar: string;
  description: string;
}

const data: IRow[] = [];

for (let x = 0; x < 70; x++) {
  data.push({
    id: `unique-id-${x}`,
    name: x % 2 === 0 ? 'John Doe' : 'Jane Doe',
    avatar: x % 2 === 0 ? 'images/jason.png' : 'images/amir.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  });
}

const StyledCaption = styled(Caption)`
  margin-bottom: ${p => p.theme.space.sm};
`;

const StyledMD = styled(MD)`
  color: ${p => getColor('neutralHue', 600, p.theme)};
`;

/**
 * https://github.com/storybookjs/storybook/issues/13362
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Paginated: Story = ({ foo }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 5;

  const pagedData = useMemo(() => {
    const output = [];

    for (
      let x = (currentPage - 1) * PAGE_SIZE;
      x < data.length && x < currentPage * PAGE_SIZE;
      x++
    ) {
      output.push(data[x]);
    }

    return output;
  }, [currentPage]);

  return (
    <div>
      <Table size="small">
        <StyledCaption>
          <XL>Paginated Tickets</XL>
          <StyledMD>
            {(currentPage - 1) * PAGE_SIZE + 1}-{currentPage * PAGE_SIZE} of {data.length}
          </StyledMD>
        </StyledCaption>
        <Head>
          <HeaderRow>
            <HeaderCell width="56px" />
            <HeaderCell width="100px">Name</HeaderCell>
            <HeaderCell>Description</HeaderCell>
          </HeaderRow>
        </Head>
        <Body>
          {pagedData.map(row => (
            <Row key={row.id}>
              <Cell>
                <Avatar size="small">
                  <img src={row.avatar} alt="Example Avatar" />
                </Avatar>
              </Cell>
              <Cell isTruncated>{row.name}</Cell>
              <Cell isTruncated>
                <span>{row.description}</span>
              </Cell>
            </Row>
          ))}
        </Body>
      </Table>
      <div style={{ height: 16 }} />
      <Pagination
        totalPages={Math.floor(data.length / PAGE_SIZE)}
        currentPage={currentPage}
        onChange={page => setCurrentPage(page)}
      />
    </div>
  );
};

Paginated.parameters = {
  docs: {
    description: {
      story: `
Native HTML \`<table>\` elements are unable to display \`overflow\` styling.
This requires custom styling and layouts to create scrollable body elements.

To ensure that your table is read correctly by assistive technologies
follow the [W3C Grid accessibility pattern](https://www.w3.org/TR/wai-aria-practices/#grid).
      `
    }
  }
};
