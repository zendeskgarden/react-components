import React from 'react';
import type { StoryObj } from '@storybook/react';
import { OrderedList } from '@zendeskgarden/react-typography';
import { OrderedListStory } from './stories/OrderedListStory';
import { LIST_ITEMS as ITEMS } from './stories/data';

export default {
  title: 'Packages/Typography/Lists/OrderedList',
  component: OrderedList,

  subcomponents: {
    'OrderedList.Item': OrderedList.Item
  }
};

export const OrderedList: StoryObj<typeof OrderedListStory> = {
  render: args => <OrderedListStory {...args} />,
  name: 'OrderedList',

  args: {
    items: ITEMS
  },

  argTypes: {
    items: {
      name: 'OrderedList.Item[]',

      table: {
        category: 'Story'
      }
    }
  }
};
