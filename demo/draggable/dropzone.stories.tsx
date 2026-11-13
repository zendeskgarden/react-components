/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { Dropzone } from '../../src/index';
import { DropzoneStory } from './stories/DropzoneStory';

export default {
  title: 'Components/Draggable/Dropzone',
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
  }
};
