/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { Dropzone } from '@zendeskgarden/react-draggable';
import React from 'react';

import { DropzoneStory } from './stories/DropzoneStory';

export default {
  title: 'Packages/Draggable/Dropzone',
  component: Dropzone,
  subcomponents: {
    'Dropzone.Icon': Dropzone.Icon,
    'Dropzone.Message': Dropzone.Message
  }
};

export const Example: StoryObj<typeof DropzoneStory> = {
  render: args => <DropzoneStory {...args} />,
  name: 'Dropzone',
  args: {
    hasIcon: true,
    children: 'Message'
  },
  argTypes: {
    tag: { control: { type: 'text' } },
    hasIcon: {
      name: 'Dropzone.Icon',
      table: { category: 'Story' }
    },
    children: {
      name: 'Dropzone.Message',
      table: { category: 'Story' }
    }
  },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=14015-52473'
    }
  }
};
