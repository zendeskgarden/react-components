/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { MediaInput } from '@zendeskgarden/react-forms';
import React from 'react';
import { useArgs } from 'storybook/preview-api';

import { commonArgs, commonArgTypes, fieldSubcomponents } from './stories/common';
import { MediaInputStory } from './stories/MediaInputStory';
type Story = StoryObj<typeof MediaInputStory>;

export default {
  title: 'Packages/Forms/MediaInput',
  component: MediaInput,
  subcomponents: {
    ...fieldSubcomponents
  },
  args: {
    start: true,
    end: true,
    ...commonArgs
  },

  /* ensures the `validation` story arg for the `MediaInput` component is not overriden */
  argTypes: {
    ...{
      ...commonArgTypes,
      validation: {}
    },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    start: { control: 'boolean' },
    end: { control: 'boolean' },
    placeholder: { control: 'text' },
    type: {
      control: {
        type: 'select',
        options: [
          'date',
          'datetime-local',
          'email',
          'month',
          'number',
          'password',
          'search',
          'tel',
          'text',
          'time',
          'url',
          'week'
        ]
      }
    }
  },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A20266'
    }
  }
};

export const Uncontrolled: Story = {
  render: args => <MediaInputStory {...args} />,
  args: { placeholder: 'Placeholder' }
};

export const Controlled: Story = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = (event: any) => updateArgs({ value: event.target.value });

    return <MediaInputStory {...args} onChange={handleChange} />;
  },
  args: { value: 'Value' }
};
