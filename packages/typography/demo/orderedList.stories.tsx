/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

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

export const Example: StoryObj<typeof OrderedListStory> = {
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
