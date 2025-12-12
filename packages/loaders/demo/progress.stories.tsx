/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';

import { Progress } from '@zendeskgarden/react-loaders';

export default {
  title: 'Packages/Loaders/Progress',
  component: Progress
};

export const Default: StoryObj<typeof Progress> = {
  render: args => <Progress {...args} />,
  name: 'Progress',

  argTypes: {
    color: {
      control: 'color'
    },

    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100
      }
    }
  },

  args: {
    'aria-label': 'Label',
    value: 0
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=175%3A144'
    }
  }
};
