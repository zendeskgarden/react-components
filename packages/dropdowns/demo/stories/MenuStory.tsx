/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react';
import LeafIcon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import CartIcon from '@zendeskgarden/svg-icons/src/16/shopping-cart-stroke.svg';
import { Grid } from '@zendeskgarden/react-grid';
import { IMenuProps, Item, ItemGroup, Separator, Menu } from '@zendeskgarden/react-dropdowns';
import { IconButton } from '@zendeskgarden/react-buttons';
import { ButtonType, IItem, Items } from './types';

const MenuItem = ({ icon, meta, ...item }: IItem) => {
  return (
    <Item {...item} icon={icon ? <LeafIcon /> : undefined}>
      {item.label}
      {!!meta && <Item.Meta>{meta}</Item.Meta>}
    </Item>
  );
};

interface IArgs extends IMenuProps {
  button: ButtonType;
  items: Items;
  label: string;
}

export const MenuStory: StoryFn<IArgs> = ({ button, items, label, ...args }) => (
  <Grid>
    <Grid.Row justifyContent="center" style={{ height: 800 }}>
      <Grid.Col alignSelf="center" textAlign="center">
        <div style={{ display: 'inline-block', position: 'relative', width: 200 }}>
          <Menu
            {...args}
            button={
              button === 'string'
                ? label
                : /* eslint-disable-next-line react/no-unstable-nested-components */
                  props => (
                    <IconButton {...props} aria-label={label}>
                      <LeafIcon />
                    </IconButton>
                  )
            }
          >
            {items.map(item => {
              if ('items' in item) {
                return (
                  <ItemGroup
                    legend={item.legend}
                    aria-label={item['aria-label']}
                    key={item.legend || item['aria-label']}
                    type={item.type}
                    icon={item.icon ? <CartIcon /> : undefined}
                  >
                    {item.items.map(groupItem => (
                      <MenuItem key={groupItem.value} {...groupItem} />
                    ))}
                  </ItemGroup>
                );
              }

              if ('isSeparator' in item) {
                return <Separator key={item.value} />;
              }

              return <MenuItem key={item.value} {...item} />;
            })}
          </Menu>
        </div>
      </Grid.Col>
    </Grid.Row>
  </Grid>
);
