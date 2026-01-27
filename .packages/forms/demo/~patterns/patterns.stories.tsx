/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { FileUpload } from '@zendeskgarden/react-forms';
import React from 'react';

import { FILE_TYPES } from '../stories/data';
import { FileUploadStory } from './stories/FileUploadStory';

export default {
  title: 'Packages/Forms/[patterns]',
  component: FileUpload
};

export const Example: StoryObj<typeof FileUploadStory> = {
  render: args => <FileUploadStory {...args} />,
  name: 'File upload',
  args: {
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/gif': []
    },
    multiple: true,
    type: 'image'
  },
  argTypes: {
    isDragging: {
      table: { disable: true }
    },
    accept: { table: { category: 'Dropzone' } },
    maxFiles: {
      control: 'number',
      table: { category: 'Dropzone' }
    },
    maxSize: {
      control: 'number',
      table: { category: 'Dropzone' }
    },
    minSize: {
      control: 'number',
      table: { category: 'Dropzone' }
    },
    multiple: { table: { category: 'Dropzone' } },
    type: {
      control: {
        type: 'select',
        options: FILE_TYPES
      },
      table: { category: 'File' }
    }
  }
};
