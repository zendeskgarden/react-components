/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ReactNode } from 'react';
import { Story } from '@storybook/react';
import { Col, Grid, IColProps, Row } from '@zendeskgarden/react-grid';
import { Dropdown, IDropdownProps, IMenuProps } from '@zendeskgarden/react-dropdowns';
import { IMenuItemProps, MenuStory } from './MenuStory';
import { IMenuItem, ITEM } from './types';

interface IArgs extends IDropdownProps {
  colProps?: IColProps;
  children: ReactNode;
  menuProps?: IMenuProps;
  items: ITEM[];
  itemProps?: IMenuItemProps;
}

export const DropdownStory: Story<IArgs> = ({
  colProps,
  children,
  menuProps,
  items,
  itemProps,
  ...args
}) => (
  <Grid>
    <Row justifyContent="center" style={{ height: 'calc(100vh - 80px)' }}>
      <Col alignSelf="center" {...colProps}>
        <Dropdown
          {...args}
          downshiftProps={{
            itemToString: (item?: IMenuItem) => item && item.value,
            ...args.downshiftProps
          }}
        >
          {children}
          <MenuStory items={items} itemProps={itemProps} {...menuProps} />
        </Dropdown>
      </Col>
    </Row>
  </Grid>
);
