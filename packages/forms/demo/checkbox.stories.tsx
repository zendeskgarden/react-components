/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Checkbox } from '@zendeskgarden/react-forms';
import { CheckboxStory } from './stories/CheckboxStory';
import { commonArgs, commonArgTypes, fieldSubcomponents } from './stories/common';
type Story = StoryObj<typeof CheckboxStory>;

export default {
  title: 'Packages/Forms/Checkbox',
  component: Checkbox,

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
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A20261'
    }
  }
};

export const Uncontrolled: Story = {
  render: (args: any) => <CheckboxStory {...args} />,
  name: 'Uncontrolled'
};

export const Controlled: Story = {
  render: (args: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const updateArgs = useArgs()[1];

    const handleChange = () =>
      updateArgs({
        checked: !args.checked
      });

    return <CheckboxStory {...args} onChange={handleChange} />;
  },

  name: 'Controlled',

  args: {
    checked: false
  }
};
