/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  Table,
  Head,
  HeaderCell,
  HeaderRow,
  Caption,
  Body,
  Cell,
  Row,
  OverflowButton
} from '@zendeskgarden/react-tables';
import { Dropdown, Trigger, Menu, Item } from '@zendeskgarden/react-dropdowns';

interface IRow {
  id: number;
  subject: string;
  requester: string;
  requested: string;
  type: string;
}

const rowData: IRow[] = [];

for (let x = 0; x < 100; x++) {
  rowData.push({
    id: x,
    subject: 'Example subject',
    requester: 'John Doe',
    requested: '15 minutes ago',
    type: 'Ticket'
  });
}

const StyledCaption = styled(Caption)`
  margin-bottom: ${props => props.theme.space.sm};
  line-height: ${props => props.theme.lineHeights.xl};
  font-size: ${props => props.theme.fontSizes.xl};
`;

const StyledScrollableContainer = styled.div`
  max-height: 500px;
  overflow-y: auto;
`;

const OverflowMenu = () => (
  <Dropdown onSelect={(selectedKey: any) => action(selectedKey)}>
    <Trigger>
      <OverflowButton aria-label="Row actions" />
    </Trigger>
    <Menu
      placement="bottom-end"
      style={{ marginTop: 0 }}
      popperModifiers={{
        flip: {
          enabled: false
        },
        offset: {
          fn: (data: any) => {
            /**
             * Ensure correct placement relative to trigger
             **/
            data.offsets.popper.top -= 2;

            return data;
          }
        }
      }}
    >
      <Item value="item-1">Option 1</Item>
      <Item value="item-2">Option 2</Item>
    </Menu>
  </Dropdown>
);

/**
 * https://github.com/storybookjs/storybook/issues/13362
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Scrollable: Story = ({ foo }) => (
  <div role="grid" aria-rowcount={rowData.length} aria-labelledby="caption">
    <Table role="presentation">
      <StyledCaption id="caption">Your Scrollable Tickets</StyledCaption>
      <Head>
        <HeaderRow role="row">
          <HeaderCell isTruncated role="columnheader">
            Subject
          </HeaderCell>
          <HeaderCell isTruncated role="columnheader">
            Requester
          </HeaderCell>
          <HeaderCell isTruncated role="columnheader">
            Requested
          </HeaderCell>
          <HeaderCell isTruncated role="columnheader">
            Type
          </HeaderCell>
          <HeaderCell hasOverflow>
            <OverflowMenu />
          </HeaderCell>
        </HeaderRow>
      </Head>
    </Table>
    <StyledScrollableContainer>
      <Table role="presentation">
        <Body>
          {rowData.map(data => (
            <Row key={data.id} role="row">
              <Cell isTruncated role="cell">
                {data.subject}
              </Cell>
              <Cell isTruncated role="cell">
                {data.requester}
              </Cell>
              <Cell isTruncated role="cell">
                {data.requested}
              </Cell>
              <Cell isTruncated role="cell">
                {data.type}
              </Cell>
              <Cell hasOverflow>
                <OverflowMenu />
              </Cell>
            </Row>
          ))}
        </Body>
      </Table>
    </StyledScrollableContainer>
  </div>
);

Scrollable.parameters = {
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
