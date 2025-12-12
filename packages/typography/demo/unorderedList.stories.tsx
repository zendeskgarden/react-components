/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

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

export const Default: StoryObj<typeof UnorderedListStory> = {
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
