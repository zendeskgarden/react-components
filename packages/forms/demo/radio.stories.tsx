/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { Radio } from '@zendeskgarden/react-forms';
import React from 'react';
import { useArgs } from 'storybook/preview-api';

import { commonArgs, commonArgTypes, fieldSubcomponents } from './stories/common';
import { RadioStory } from './stories/RadioStory';
type Story = StoryObj<typeof RadioStory>;

export default {
  title: 'Packages/Forms/Radio',
  component: Radio,
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
  },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A20262'
    }
  }
};

export const Uncontrolled: Story = {
  render: args => <RadioStory {...args} />
};

export const Controlled: Story = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = () => updateArgs({ checked: true });

    return <RadioStory {...args} onChange={handleChange} />;
  },
  args: { checked: false }
};
