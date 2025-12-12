/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { Menu } from '@zendeskgarden/react-dropdowns.legacy';
import { MenuStory } from './stories/MenuStory';

export default {
  title: 'Packages/Dropdowns.Legacy/[patterns]',
  component: Menu
};

export const Example: StoryObj<typeof MenuStory> = {
  render: args => <MenuStory {...args} />,
  name: 'Menu',

  args: {
    items: [
      {
        text: 'Item 1',
        value: 'item-1'
      },
      {
        text: 'Item 2',
        value: 'item-2'
      },
      {
        text: 'Item 3',
        value: 'item-3'
      },
      {
        text: 'Item 4',
        value: 'item-4'
      },
      {
        text: 'Item 5',
        value: 'item-5'
      },
      {
        text: 'Item 6',
        value: 'item-6'
      }
    ],

    appendToNode: 'undefined'
  },

  argTypes: {
    items: {
      name: 'Item[]',

      table: {
        category: 'Story'
      }
    },

    appendToNode: {
      control: {
        type: 'select',
        options: ['undefined', 'portal']
      },

      table: {
        category: 'Story'
      }
    }
  }
};
