/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-webpack5';
import { useArgs } from 'storybook/preview-api';
import { Select } from '@zendeskgarden/react-forms';
import { SelectStory } from './stories/SelectStory';
import { SELECT_OPTIONS as OPTIONS } from './stories/data';
import { commonArgs, commonArgTypes, fieldSubcomponents } from './stories/common';
type Story = StoryObj<typeof SelectStory>;

export default {
  title: 'Packages/Forms/Select',
  component: Select,

  subcomponents: {
    ...fieldSubcomponents
  },

  args: {
    options: OPTIONS,
    ...commonArgs
  },

  /* ensures the `validation` story arg for the `Select` component is not overriden */
  argTypes: {
    ...{
      ...commonArgTypes,
      validation: {}
    },

    options: {
      name: 'children'
    },

    disabled: {
      control: 'boolean'
    }
  }
};

export const Uncontrolled: Story = {
  render: args => <SelectStory {...args} />,
  name: 'Uncontrolled'
};

export const Controlled: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const updateArgs = useArgs()[1];

    const handleChange = (event: any) =>
      updateArgs({
        value: event.target.value
      });

    return <SelectStory {...args} onChange={handleChange} />;
  },

  name: 'Controlled',

  args: {
    value: OPTIONS.length - 1
  }
};
