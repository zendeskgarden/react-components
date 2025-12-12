import { useCallback } from 'react';
import { useArgs } from '@storybook/client-api';
import { NestedStory } from './stories/NestedStory';
import { PortalStory } from './stories/PortalStory';

export default {
  title: 'Packages/Dropdowns/[patterns]'
};

export const Nested = {
  render: args => <NestedStory {...args} />,
  name: 'Nested'
};

export const Portal = {
  render: args => <PortalStory {...args} />,
  name: 'Portal',

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
