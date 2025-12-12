/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-webpack5';

import { Ellipsis } from '@zendeskgarden/react-typography';

export default {
  title: 'Packages/Typography/Ellipsis',
  component: Ellipsis
};

export const Example: StoryObj<typeof Ellipsis> = {
  render: args => <Ellipsis {...args} />,
  name: 'Ellipsis',

  args: {
    children: 'Veggies es bonus vobis, proinde vos postulo essum magis.',

    style: {
      width: 150
    }
  },

  argTypes: {
    tag: {
      control: 'text'
    }
  }
};
