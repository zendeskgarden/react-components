/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import Icon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { IMenuProps, Item, Menu } from '@zendeskgarden/react-dropdowns.next';

export const MenuStory: Story<IMenuProps> = args => (
  <Grid>
    <Row justifyContent="center">
      <Col alignSelf="center" textAlign="center">
        <div style={{ display: 'inline-block', position: 'relative', width: 300 }}>
          <Menu {...args}>
            <Item>Item</Item>
            <Item isDisabled>Disabled item</Item>
            <Item icon={<Icon />}>Item with icon</Item>
            <Item type="add">Add item</Item>
            <Item type="danger">Danger item</Item>
            <Item type="next">Next item</Item>
            <Item type="previous">Previous item</Item>
            <Item>
              Item
              <Item.Meta>with meta</Item.Meta>
            </Item>
          </Menu>
        </div>
      </Col>
    </Row>
  </Grid>
);
