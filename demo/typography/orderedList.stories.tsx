/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { OrderedList } from '../../src/index';
import { LIST_ITEMS as ITEMS } from './stories/data';
import { OrderedListStory } from './stories/OrderedListStory';

export default {
  title: 'Components/Typography/Lists/OrderedList',
  component: OrderedList,
  subcomponents: {
    'OrderedList.Item': OrderedList.Item
  }
};

export const Example: StoryObj<typeof OrderedListStory> = {
  render: args => <OrderedListStory {...args} />,
  name: 'OrderedList',
  args: { items: ITEMS },
  argTypes: {
    items: {
      name: 'OrderedList.Item[]',
      table: { category: 'Story' }
    }
  }
};
