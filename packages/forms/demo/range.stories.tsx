import React from 'react';
import type { StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Range } from '@zendeskgarden/react-forms';
import { RangeStory } from './stories/RangeStory';
import { commonArgs, commonArgTypes, fieldSubcomponents } from './stories/common';
type Story = StoryObj<typeof RangeStory>;

export default {
  title: 'Packages/Forms/Range',
  component: Range,

  subcomponents: {
    ...fieldSubcomponents
  },

  args: {
    ...commonArgs
  },

  argTypes: {
    disabled: {
      control: 'boolean'
    },

    min: {
      control: 'number'
    },

    max: {
      control: 'number'
    },

    step: {
      control: 'number'
    },

    ...commonArgTypes
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A20263'
    }
  }
};

export const Uncontrolled: Story = {
  render: args => <RangeStory {...args} />,
  name: 'Uncontrolled'
};

export const Controlled: Story = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = event =>
      updateArgs({
        value: event.target.value
      });

    return <RangeStory {...args} onChange={handleChange} />;
  },

  name: 'Controlled',

  args: {
    value: '0'
  }
};
