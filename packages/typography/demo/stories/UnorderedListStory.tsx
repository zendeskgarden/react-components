/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { IUnorderedListProps, UnorderedList } from '@zendeskgarden/react-typography';
import { IListItem } from './types';

interface IArgs extends IUnorderedListProps {
  items: IListItem[];
  level: number;
}

const getType = (level: number) => {
  const types = ['disc', 'circle', 'square'] as const;
  const index = level % types.length;

  return types[index];
};

export const UnorderedListStory: Story<IArgs> = ({ items, level = 0, ...args }) => (
  <UnorderedList {...args} type={level === 0 ? args.type : getType(level)}>
    {items.map((item, index) => (
      <UnorderedList.Item key={index}>
        <>
          {item.text}
          {item.items ? <UnorderedListStory items={item.items} level={level + 1} {...args} /> : null}
        </>
      </UnorderedList.Item>
    ))}
  </UnorderedList>
);
