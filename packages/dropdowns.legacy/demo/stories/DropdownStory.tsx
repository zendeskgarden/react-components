/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ReactNode } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { Grid, IColProps } from '@zendeskgarden/react-grid';
import { Dropdown, IDropdownProps, IMenuProps } from '@zendeskgarden/react-dropdowns.legacy';
import { IMenuItemProps, MenuStory } from './MenuStory';
import { IMenuItem, ITEM } from './types';

interface IArgs extends IDropdownProps {
  colProps?: IColProps;
  children: ReactNode;
  menuProps?: IMenuProps;
  items: ITEM[];
  itemProps?: IMenuItemProps;
}

export const DropdownStory: StoryFn<IArgs> = ({
  colProps,
  children,
  menuProps,
  items,
  itemProps,
  ...args
}) => (
  <Grid>
    <Grid.Row justifyContent="center" style={{ height: 'calc(100vh - 80px)' }}>
      <Grid.Col alignSelf="center" {...colProps}>
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
      </Grid.Col>
    </Grid.Row>
  </Grid>
);
