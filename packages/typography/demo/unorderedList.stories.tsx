import React from 'react';
import type { StoryObj } from '@storybook/react';
import { UnorderedList } from '@zendeskgarden/react-typography';
import { UnorderedListStory } from './stories/UnorderedListStory';
import { LIST_ITEMS as ITEMS } from './stories/data';

export default {
  title: 'Packages/Typography/Lists/UnorderedList',
  component: UnorderedList,

  subcomponents: {
    'UnorderedList.Item': UnorderedList.Item
  }
};

export const UnorderedList: StoryObj<typeof UnorderedListStory> = {
  render: args => <UnorderedListStory {...args} />,
  name: 'UnorderedList',

  args: {
    items: ITEMS
  },

  argTypes: {
    items: {
      name: 'UnorderedList.Item[]',

      table: {
        category: 'Story'
      }
    }
  }
};
