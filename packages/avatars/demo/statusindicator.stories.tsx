/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { StatusIndicator } from '@zendeskgarden/react-avatars';

import { StatusIndicatorStory } from './stories/StatusIndicatorStory';

export default {
  title: 'Packages/Avatars/StatusIndicator',
  component: StatusIndicator
};

export const Example: StoryObj<typeof StatusIndicatorStory> = {
  render: args => <StatusIndicatorStory {...args} />,
  name: 'StatusIndicator',
  argTypes: { children: { control: 'text' } },
  args: {
    'aria-label': 'Label',
    children: 'Status'
  },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=10927%3A45275'
    }
  }
};
