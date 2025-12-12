/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { FileList, File } from '@zendeskgarden/react-forms';
import { FileListStory } from './stories/FileListStory';
import { FILELIST_ITEMS as ITEMS } from './stories/data';

export default {
  title: 'Packages/Forms/FileList',
  component: FileList,

  subcomponents: {
    'FileList.Item': FileList.Item,
    File
  }
};

export const Default: StoryObj<typeof FileListStory> = {
  render: args => <FileListStory {...args} />,
  name: 'FileList',
  args: {
    items: ITEMS
  },

  argTypes: {
    items: {
      name: 'children'
    },

    isCompact: {
      control: 'boolean',

      table: {
        category: 'File'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=5867%3A35626'
    }
  }
};
