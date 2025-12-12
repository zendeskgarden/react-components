/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';

import { Dots } from '@zendeskgarden/react-loaders';

export default {
  title: 'Packages/Loaders/Dots',
  component: Dots
};

export const Default: StoryObj<typeof Dots> = {
  render: args => <Dots {...args} />,
  name: 'Dots',

  argTypes: {
    color: {
      control: 'color'
    },

    size: {
      control: 'text'
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=175%3A188'
    }
  }
};
