/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { UnorderedList } from '@zendeskgarden/react-typography';
import React from 'react';

import { LIST_ITEMS as ITEMS } from './stories/data';
import { UnorderedListStory } from './stories/UnorderedListStory';

export default {
  title: 'Packages/Typography/Lists/UnorderedList',
  component: UnorderedList,
  subcomponents: {
    'UnorderedList.Item': UnorderedList.Item
  }
};

export const Example: StoryObj<typeof UnorderedListStory> = {
  render: args => <UnorderedListStory {...args} />,
  name: 'UnorderedList',
  args: { items: ITEMS },
  argTypes: {
    items: {
      name: 'UnorderedList.Item[]',
      table: { category: 'Story' }
    }
  }
};
