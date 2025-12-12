/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { LG } from '@zendeskgarden/react-typography';
import { TypescaleStory } from './stories/TypescaleStory';

export default {
  title: 'Packages/Typography/Typescale/LG',
  component: LG
};

export const Lg: StoryObj<typeof TypescaleStory> = {
  render: args => <TypescaleStory {...args} size="large" />,
  name: 'LG',

  args: {
    children: 'Text'
  },

  argTypes: {
    tag: {
      control: 'text'
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A107'
    }
  }
};
