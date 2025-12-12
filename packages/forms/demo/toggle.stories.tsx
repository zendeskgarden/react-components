import React from 'react';
import type { StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Toggle } from '@zendeskgarden/react-forms';
import { ToggleStory } from './stories/ToggleStory';
import { commonArgs, commonArgTypes, fieldSubcomponents } from './stories/common';
type Story = StoryObj<typeof ToggleStory>;

export default {
  title: 'Packages/Forms/Toggle',
  component: Toggle,

  subcomponents: {
    ...fieldSubcomponents
  },

  args: {
    ...commonArgs,
    hasHint: false
  },

  argTypes: {
    disabled: {
      control: 'boolean'
    },

    ...commonArgTypes
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A20264'
    }
  }
};

export const Uncontrolled: Story = {
  render: args => <ToggleStory {...args} />,
  name: 'Uncontrolled'
};

export const Controlled: Story = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = event =>
      updateArgs({
        checked: !args.checked
      });

    return <ToggleStory {...args} onChange={handleChange} />;
  },

  name: 'Controlled',

  args: {
    checked: false
  }
};
