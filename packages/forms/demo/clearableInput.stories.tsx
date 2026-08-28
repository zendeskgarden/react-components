/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { ClearableInput } from '@zendeskgarden/react-forms';
import { ClearableInputStory } from './stories/ClearableInputStory';
import { commonArgs, commonArgTypes, fieldSubcomponents } from './stories/common';

type Story = StoryObj<typeof ClearableInputStory>;

export default {
  title: 'Packages/Forms/ClearableInput',
  component: ClearableInput,
  subcomponents: {
    ...fieldSubcomponents
  },
  args: {
    ...commonArgs,
    value: 'Value'
  },
  argTypes: {
    ...commonArgTypes,
    disabled: { control: 'boolean' },
    isCompact: { control: 'boolean' },
    clearButtonLabel: { control: 'text' }
  },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A20265'
    }
  }
};

export const Controlled: Story = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      updateArgs({ value: event.target.value });

    return <ClearableInputStory {...args} onChange={handleChange} />;
  }
};
