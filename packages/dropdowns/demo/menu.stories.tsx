/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { useArgs } from 'storybook/preview-api';
import { Menu, Item, ItemGroup, Separator } from '@zendeskgarden/react-dropdowns';
import { MenuStory } from './stories/MenuStory';
import { BUTTON_TYPE, ITEMS } from './stories/data';

type Story = StoryObj<typeof MenuStory>;

export default {
  title: 'Packages/Dropdowns/Menu',
  component: Menu,

  subcomponents: {
    Item,
    'Item.Meta': Item.Meta,
    Separator,
    ItemGroup
  },

  argTypes: {
    appendToNode: {
      control: false
    },

    button: {
      control: 'radio',
      options: BUTTON_TYPE
    },

    label: {
      name: 'Button label',

      table: {
        category: 'Story'
      }
    }
  },

  args: {
    button: BUTTON_TYPE[0],
    items: ITEMS,
    label: 'Menu',
    maxHeight: '400px',
    placement: 'bottom-start',
    zIndex: 1000
  }
};

export const Uncontrolled: Story = {
  render: args => <MenuStory {...args} />,
  name: 'Uncontrolled',

  argTypes: {
    isExpanded: {
      control: false
    },

    focusedValue: {
      control: false
    },

    selectedItems: {
      control: false
    }
  }
};

export const Controlled: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const updateArgs = useArgs()[1];

    const handleChange = (changes: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { type, ...rest } = changes;

      updateArgs(rest);
    };

    return <MenuStory {...args} onChange={handleChange} />;
  },

  name: 'Controlled',

  argTypes: {
    defaultExpanded: {
      control: false
    },

    defaultFocusedValue: {
      control: false
    },

    focusedValue: {
      control: {
        type: 'text'
      }
    }
  },

  args: {
    isExpanded: false,
    focusedValue: null,

    selectedItems: [
      {
        value: 'aster',
        type: 'checkbox'
      }
    ]
  }
};
