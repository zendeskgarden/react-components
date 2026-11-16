/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';

import { Toggle } from '../../src/index';
import { commonArgs, commonArgTypes, fieldSubcomponents } from './stories/common';
import { ToggleStory } from './stories/ToggleStory';
type Story = StoryObj<typeof ToggleStory>;

export default {
  title: 'Components/Forms/Toggle',
  component: Toggle,
  subcomponents: {
    ...fieldSubcomponents
  },
  args: {
    ...commonArgs,
    hasHint: false
  },
  argTypes: {
    disabled: { control: 'boolean' },

    ...commonArgTypes
  }
};

export const Uncontrolled: Story = {
  render: args => <ToggleStory {...args} />
};

export const Controlled: Story = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = () => updateArgs({ checked: !args.checked });

    return <ToggleStory {...args} onChange={handleChange} />;
  },
  args: { checked: false }
};
