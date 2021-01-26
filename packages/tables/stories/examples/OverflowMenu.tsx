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

const StyledCaption = styled(Caption)`
  margin-bottom: ${props => props.theme.space.sm};
  line-height: ${props => props.theme.lineHeights.xl};
  font-size: ${props => props.theme.fontSizes.xl};
`;

const Overflow = () => (
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

interface IOverflowMenuProps {
  size: 'small' | 'medium' | 'large';
}

export const OverflowMenu: Story<IOverflowMenuProps> = ({ size }) => (
  <Table size={size}>
    <StyledCaption>Overflow Menus</StyledCaption>
    <Head>
      <HeaderRow>
        <HeaderCell>Subject</HeaderCell>
        <HeaderCell>Requester</HeaderCell>
        <HeaderCell>Requested</HeaderCell>
        <HeaderCell>Type</HeaderCell>
        <HeaderCell hasOverflow>
          <Overflow />
        </HeaderCell>
      </HeaderRow>
    </Head>
    <Body>
      <Row>
        <Cell>Where are my shoes?</Cell>
        <Cell>John Smith</Cell>
        <Cell>15 minutes ago</Cell>
        <Cell>Ticket</Cell>
        <Cell hasOverflow>
          <Overflow />
        </Cell>
      </Row>
      <Row>
        <Cell>Was charged twice</Cell>
        <Cell>Jane Doe</Cell>
        <Cell>25 minutes ago</Cell>
        <Cell>Call</Cell>
        <Cell hasOverflow>
          <Overflow />
        </Cell>
      </Row>
      <Row>
        <Cell>Ticket 1</Cell>
        <Cell>Unknown</Cell>
        <Cell>2 months ago</Cell>
        <Cell>Ticket</Cell>
        <Cell hasOverflow>
          <Overflow />
        </Cell>
      </Row>
      <Row>
        <Cell>Ticket 2</Cell>
        <Cell>Unknown</Cell>
        <Cell>2 months ago</Cell>
        <Cell>Ticket</Cell>
        <Cell hasOverflow>
          <Overflow />
        </Cell>
      </Row>
      <Row>
        <Cell>Ticket 3</Cell>
        <Cell>Unknown</Cell>
        <Cell>2 months ago</Cell>
        <Cell>Ticket</Cell>
        <Cell hasOverflow>
          <Overflow />
        </Cell>
      </Row>
    </Body>
  </Table>
);

OverflowMenu.args = {
  size: 'medium'
};

OverflowMenu.argTypes = {
  size: {
    name: 'Size',
    control: {
      type: 'select',
      options: ['small', 'medium', 'large']
    }
  }
};

OverflowMenu.parameters = {
  docs: {
    description: {
      story: `
Overflow menus are achieved by using the \`Dropdown\` component available in
the [@zendeskgarden/react-dropdowns](https://zendeskgarden.github.io/react-components/dropdowns/)
package.

Based on \`Table\` positioning and other implementation specific details you may need
to apply manual positioning against the \`Dropdown\` to ensure a standard look and feel.

**Accessibility Warning:** All usages of \`<OverflowButton />\` must contain an \`aria-label\`
or other assistive technique to have discernible text.
      `
    }
  }
};
