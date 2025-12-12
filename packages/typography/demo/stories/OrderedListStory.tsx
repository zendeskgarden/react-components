/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react';
import { IOrderedListProps, OrderedList } from '@zendeskgarden/react-typography';
import { IListItem } from './types';

interface IArgs extends IOrderedListProps {
  items: IListItem[];
  level: number;
}

const getType = (level: number) => {
  const types = ['decimal', 'lower-alpha', 'lower-roman'] as const;
  const index = level % types.length;

  return types[index];
};

export const OrderedListStory: StoryFn<IArgs> = ({ items, level = 0, ...args }) => (
  <OrderedList {...args} type={level === 0 ? args.type : getType(level)}>
    {items.map((item, index) => (
      <OrderedList.Item key={index}>
        <>
          {item.text}
          {!!item.items && <OrderedListStory items={item.items} level={level + 1} {...args} />}
        </>
      </OrderedList.Item>
    ))}
  </OrderedList>
);
