/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Radio } from '@zendeskgarden/react-forms';
import { RadioStory } from './stories/RadioStory';
import { commonArgs, commonArgTypes, fieldSubcomponents } from './stories/common';
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
    disabled: {
      control: 'boolean'
    },

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
  render: args => <RadioStory {...args} />,
  name: 'Uncontrolled'
};

export const Controlled: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const updateArgs = useArgs()[1];

    const handleChange = () =>
      updateArgs({
        checked: true
      });

    return <RadioStory {...args} onChange={handleChange} />;
  },

  name: 'Controlled',

  args: {
    checked: false
  }
};
