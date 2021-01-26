/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';
import {
  Table,
  Head,
  HeaderCell,
  HeaderRow,
  GroupRow,
  Caption,
  Body,
  Cell,
  Row
} from '@zendeskgarden/react-tables';

interface IDefaultStoryProps {
  size: 'small' | 'medium' | 'large';
  isStriped: boolean;
  isGrouped: boolean;
  showCaption: boolean;
  isReadOnly: boolean;
}

const data = [
  {
    content: (
      <>
        Status <strong style={{ marginLeft: 4 }}>Open</strong>
      </>
    ),
    isGroupedRow: true
  },
  {
    subject: 'Where are my shoes?',
    requester: 'John Smith',
    requested: '15 minutes ago',
    type: 'Ticket'
  },
  {
    subject: 'Was charged twice',
    requester: 'Jane Doe',
    requested: '25 minutes ago',
    type: 'Call'
  },
  {
    content: (
      <>
        Status <strong style={{ marginLeft: 4 }}>Closed</strong>
      </>
    ),
    isGroupedRow: true
  },
  {
    subject: 'Ticket 1',
    requester: 'Unknown',
    requested: '2 months ago',
    type: 'Ticket'
  },
  {
    subject: 'Ticket 2',
    requester: 'Unknown',
    requested: '2 months ago',
    type: 'Ticket'
  },
  {
    subject: 'Ticket 3',
    requester: 'Unknown',
    requested: '2 months ago',
    type: 'Ticket'
  }
];

const StyledCaption = styled(Caption)`
  margin-bottom: ${props => props.theme.space.sm};
  line-height: ${props => props.theme.lineHeights.xl};
  font-size: ${props => props.theme.fontSizes.xl};
`;

export const Default: Story<IDefaultStoryProps> = ({
  size,
  isStriped,
  isGrouped,
  showCaption,
  isReadOnly
}) => {
  return (
    <Table size={size} isReadOnly={isReadOnly}>
      {showCaption && <StyledCaption>Your Unsolved Tickets</StyledCaption>}
      <Head>
        <HeaderRow>
          <HeaderCell>Subject</HeaderCell>
          <HeaderCell>Requester</HeaderCell>
          <HeaderCell>Requested</HeaderCell>
          <HeaderCell>Type</HeaderCell>
        </HeaderRow>
      </Head>
      <Body>
        {data
          .filter(row => isGrouped || !row.isGroupedRow)
          .map((row, index) => {
            if (row.isGroupedRow) {
              if (!isGrouped) {
                return null;
              }

              return (
                <GroupRow key={index}>
                  <Cell colSpan={4}>{row.content}</Cell>
                </GroupRow>
              );
            }

            return (
              <Row key={index} isStriped={isStriped && !isGrouped && index % 2 === 0}>
                <Cell>{row.subject}</Cell>
                <Cell>{row.requester}</Cell>
                <Cell>{row.requested}</Cell>
                <Cell>{row.type}</Cell>
              </Row>
            );
          })}
      </Body>
    </Table>
  );
};

Default.args = {
  size: 'medium',
  isStriped: false,
  isGrouped: false,
  showCaption: true,
  isReadOnly: false
};

Default.argTypes = {
  size: {
    name: 'Size',
    control: {
      type: 'select',
      options: ['small', 'medium', 'large']
    }
  },
  isStriped: {
    name: 'Striped rows'
  },
  isGrouped: {
    name: 'Grouped rows'
  },
  showCaption: {
    name: 'Show caption'
  },
  isReadOnly: {
    name: 'Read only'
  }
};

Default.parameters = {
  docs: {
    description: {
      component: `
When building a table with the \`react-tables\` package follow the
[MDN Table Accessibility Practices](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced#Tables_for_visually_impaired_users)
guidelines to ensure your implementation is accessible to screen-readers.
      `
    }
  }
};
