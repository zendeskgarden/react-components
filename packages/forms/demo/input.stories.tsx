/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { useArgs } from 'storybook/preview-api';
import { Input } from '@zendeskgarden/react-forms';
import { InputStory } from './stories/InputStory';
import { commonArgs, commonArgTypes, fieldSubcomponents } from './stories/common';
type Story = StoryObj<typeof InputStory>;

export default {
  title: 'Packages/Forms/Input',
  component: Input,
  subcomponents: {
    ...fieldSubcomponents
  },
  args: {
    ...commonArgs
  },

  /* ensures the `validation` story arg for the `Input` component is not overriden */
  argTypes: {
    ...{
      ...commonArgTypes,
      validation: {}
    },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    placeholder: { control: 'text' },
    type: {
      control: { type: 'select' },
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
  render: args => <InputStory {...args} />,
  name: 'Uncontrolled',
  args: { placeholder: 'Placeholder' }
};

export const Controlled: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const updateArgs = useArgs()[1];

    const handleChange = (event: any) => updateArgs({ value: event.target.value });

    return <InputStory {...args} onChange={handleChange} />;
  },
  name: 'Controlled',
  args: { value: 'Value' }
};
