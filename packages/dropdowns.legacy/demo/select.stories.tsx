/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import Downshift from 'downshift';
import {
  Dropdown,
  Field,
  Hint,
  Label,
  Menu,
  Message,
  Select
} from '@zendeskgarden/react-dropdowns.legacy';
import { SelectStory } from './stories/SelectStory';
import { SELECT_ITEMS as ITEMS, DROPDOWN_PLACEMENT as PLACEMENT } from './stories/data';

export default {
  title: 'Packages/Dropdowns.Legacy/Select',
  component: Select,
  subcomponents: {
    Dropdown,
    Field,
    Hint,
    Label,
    Menu,
    Message
  },
  tags: ['!manifest']
};

export const Example: StoryObj<typeof SelectStory> = {
  /*account for Storybook control*/
  render: args => {
    const updateArgs = useArgs()[1];

    const handleSelect = (selectedItem: any) =>
      updateArgs({
        selectedItem
      });

    const handleStateChange = (changes: any) =>
      Object.prototype.hasOwnProperty.call(changes, 'isOpen') &&
      ![Downshift.stateChangeTypes.blurButton, Downshift.stateChangeTypes.blurInput].includes(
        changes.type
      ) &&
      updateArgs({ isOpen: changes.isOpen });

    return <SelectStory {...args} onSelect={handleSelect} onStateChange={handleStateChange} />;
  },
  name: 'Select',
  args: {
    label: 'Label',
    isLabelRegular: false,
    isLabelHidden: false,
    hasHint: true,
    hint: 'Hint',
    hasMessage: true,
    message: 'Message',
    hasIcon: false,
    items: ITEMS,
    selectedItem: ITEMS[1],
    isOpen: false
  },
  argTypes: {
    hasIcon: { name: 'start' },
    label: {
      name: 'children',
      table: { category: 'Label' }
    },
    isLabelRegular: {
      name: 'isRegular',
      table: { category: 'Label' }
    },
    isLabelHidden: {
      name: 'hidden',
      table: { category: 'Label' }
    },
    hint: {
      name: 'children',
      table: { category: 'Hint' }
    },
    message: {
      name: 'children',
      table: { category: 'Message' }
    },
    validationLabel: {
      control: { type: 'text' },
      table: { category: 'Message' }
    },
    hasHint: {
      name: 'Hint',
      table: { category: 'Story' }
    },
    hasMessage: {
      name: 'Message',
      table: { category: 'Story' }
    },
    items: {
      name: 'Item[]',
      table: { category: 'Story' }
    },
    downshiftProps: {
      control: 'object',
      table: { category: 'Dropdown' }
    },
    selectedItem: { table: { category: 'Dropdown' } },
    isOpen: { table: { category: 'Dropdown' } },
    placement: {
      control: {
        type: 'radio',
        options: PLACEMENT
      },
      table: { category: 'Menu' }
    }
  },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A24482'
    }
  }
};
