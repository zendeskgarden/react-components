import React from 'react';
import type { StoryObj } from '@storybook/react';
import { FileUpload } from '@zendeskgarden/react-forms';
import { FileUploadStory } from './stories/FileUploadStory';
import { commonArgs, commonArgTypes, fieldSubcomponents } from './stories/common';

export default {
  title: 'Packages/Forms/FileUpload',
  component: FileUpload,

  subcomponents: {
    ...fieldSubcomponents
  }
};

export const FileUpload: StoryObj<typeof FileUploadStory> = {
  render: args => <FileUploadStory {...args} />,
  name: 'FileUpload',

  args: {
    children: 'Drag files here or click to upload',
    ...commonArgs
  },

  argTypes: {
    tabIndex: {
      control: 'number'
    },

    ...commonArgTypes
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A20268'
    }
  }
};
