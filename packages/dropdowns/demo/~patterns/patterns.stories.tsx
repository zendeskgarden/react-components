/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { NestedStory } from './stories/NestedStory';
import { PortalStory } from './stories/PortalStory';

export default {
  title: 'Packages/Dropdowns/[patterns]'
};

export const Nested: StoryObj<typeof NestedStory> = {
  render: args => <NestedStory {...args} />
};

export const Portal: StoryObj<typeof PortalStory> = {
  render: args => <PortalStory {...args} />,
  args: {
    listboxAppendToNode: false,
    menuAppendToNode: false
  },
  argTypes: {
    listboxAppendToNode: {
      control: 'boolean',
      name: 'Combobox listboxAppendToNode'
    },
    menuAppendToNode: {
      control: 'boolean',
      name: 'Menu appendToNode'
    }
  }
};
