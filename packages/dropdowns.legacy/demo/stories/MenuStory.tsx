/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import Icon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import {
  AddItem,
  HeaderIcon,
  HeaderItem,
  IItemProps,
  IMenuProps,
  Item,
  ItemMeta,
  MediaBody,
  MediaFigure,
  MediaItem,
  Menu,
  NextItem,
  PreviousItem,
  Separator
} from '@zendeskgarden/react-dropdowns.legacy';
import { IMenuItem, ITEM } from './types';

export interface IMenuItemProps extends IItemProps, Omit<IMenuItem, 'text' | 'value'> {}

interface IProps extends IMenuItemProps {
  text: IMenuItem['text'];
}

const MenuItem = ({ text: children, type, hasIcon, meta, ...props }: IProps) => {
  switch (type) {
    case 'add':
      return (
        <AddItem {...props}>
          {children}
          {meta ? <ItemMeta>{meta}</ItemMeta> : null}
        </AddItem>
      );

    case 'header':
      return (
        <HeaderItem hasIcon={hasIcon}>
          {hasIcon ? (
            <HeaderIcon>
              <Icon />
            </HeaderIcon>
          ) : null}
          {children}
        </HeaderItem>
      );

    case 'next':
      return (
        <NextItem {...props}>
          {children}
          {meta ? <ItemMeta>{meta}</ItemMeta> : null}
        </NextItem>
      );

    case 'previous':
      return (
        <PreviousItem {...props}>
          {children}
          {meta ? <ItemMeta>{meta}</ItemMeta> : null}
        </PreviousItem>
      );

    default:
      return hasIcon ? (
        <MediaItem {...props}>
          <MediaFigure>
            <Icon />
          </MediaFigure>
          <MediaBody>
            {children}
            {meta ? <ItemMeta>{meta}</ItemMeta> : null}
          </MediaBody>
        </MediaItem>
      ) : (
        <Item {...props}>
          {children}
          {meta ? <ItemMeta>{meta}</ItemMeta> : null}
        </Item>
      );
  }
};

interface IArgs extends IMenuProps {
  items: ITEM[];
  itemProps?: IMenuItemProps;
}

export const MenuStory: Story<IArgs> = ({ items, itemProps, ...args }) => (
  <Menu {...args}>
    {items.map((item, index) =>
      item === '---' ? (
        <Separator key={index} />
      ) : (
        <MenuItem key={index} {...itemProps} {...item} value={item} />
      )
    )}
  </Menu>
);
