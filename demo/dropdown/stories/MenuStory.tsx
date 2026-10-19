/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import LeafIcon from 'svg-icons-legacy/src/16/leaf-stroke.svg';
import CartIcon from 'svg-icons-legacy/src/16/shopping-cart-stroke.svg';

import {
  Grid,
  IButtonProps,
  IMenuProps,
  IconButton,
  Item,
  ItemGroup,
  Menu,
  Separator
} from '../../../src/index';
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

export const MenuStory = ({ button, items, label, ...args }: IArgs) => {
  /* eslint-disable-next-line react/no-unstable-nested-components */
  const IconButtonTrigger = (props: IButtonProps) => (
    <IconButton {...props} aria-label={label}>
      <LeafIcon />
    </IconButton>
  );

  const menuButton: IMenuProps['button'] = button === 'string' ? label : IconButtonTrigger;

  return (
    <Grid>
      <Grid.Row justifyContent="center" style={{ height: 800 }}>
        <Grid.Col alignSelf="center" textAlign="center">
          <div style={{ display: 'inline-block', position: 'relative', width: 200 }}>
            <Menu {...args} button={menuButton}>
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
};
