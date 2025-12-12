import React from 'react';
import type { StoryObj } from '@storybook/react';
import { File } from '@zendeskgarden/react-forms';
import { Progress } from '@zendeskgarden/react-loaders';
import { FileStory } from './stories/FileStory';

export default {
  title: 'Packages/Forms/File',
  component: File,

  subcomponents: {
    'File.Close': File.Close,
    'File.Delete': File.Delete,
    Progress
  }
};

export const File: StoryObj<typeof FileStory> = {
  render: args => <FileStory {...args} />,
  name: 'File',

  args: {
    children: 'file.txt',
    closeAriaLabel: 'Close',
    deleteAriaLabel: 'Delete'
  },

  argTypes: {
    tabIndex: {
      control: 'number'
    },

    hasClose: {
      name: 'File.Close',
      control: 'boolean',

      table: {
        category: 'Story'
      }
    },

    hasDelete: {
      name: 'File.Delete',
      control: 'boolean',

      table: {
        category: 'Story'
      }
    },

    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100
      },

      table: {
        category: 'Progress'
      }
    },

    closeAriaLabel: {
      name: 'aria-label',

      table: {
        category: 'File.Close'
      }
    },

    deleteAriaLabel: {
      name: 'aria-label',

      table: {
        category: 'File.Delete'
      }
    }
  }
};
