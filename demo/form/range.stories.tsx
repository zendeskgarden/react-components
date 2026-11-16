/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';

import { Range } from '../../src/index';
import { commonArgs, commonArgTypes, fieldSubcomponents } from './stories/common';
import { RangeStory } from './stories/RangeStory';
type Story = StoryObj<typeof RangeStory>;

export default {
  title: 'Components/Forms/Range',
  component: Range,
  subcomponents: {
    ...fieldSubcomponents
  },
  args: {
    ...commonArgs
  },
  argTypes: {
    disabled: { control: 'boolean' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },

    ...commonArgTypes
  }
};

export const Uncontrolled: Story = {
  render: args => <RangeStory {...args} />
};

export const Controlled: Story = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = (event: any) => updateArgs({ value: event.target.value });

    return <RangeStory {...args} onChange={handleChange} />;
  },
  args: { value: '0' }
};
