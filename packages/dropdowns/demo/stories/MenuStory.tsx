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
import { IItem, Items } from './types';
import { Modal } from '@zendeskgarden/react-modals';

const MenuItem = ({ icon, meta, ...item }: IItem) => {
  return (
    <Item {...item} icon={icon ? <LeafIcon /> : undefined}>
      {item.label}
      {meta && <Item.Meta>{meta}</Item.Meta>}
    </Item>
  );
};

interface IArgs extends IMenuProps {
  items: Items;
}

export const MenuStory: StoryFn<IArgs> = ({ items, ...args }) => {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <Grid>
      <Grid.Row justifyContent="center" style={{ height: 800 }}>
        <Grid.Col alignSelf="center" textAlign="center">
          <div style={{ display: 'inline-block', position: 'relative', width: 200 }}>
            <Menu
              {...args}
              onChange={changes => {
                changes.value && setOpenModal(true);
              }}
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
        {openModal && (
          <Modal onClose={() => setOpenModal(false)}>
            <Modal.Body>
              <p>Modal content</p>
            </Modal.Body>
          </Modal>
        )}
      </Grid.Row>
    </Grid>
  );
};
