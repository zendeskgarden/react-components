/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { Alert } from '@zendeskgarden/react-notifications';
import React from 'react';

import { AlertStory } from './stories/AlertStory';

export default {
  title: 'Packages/Notifications/Alert',
  component: Alert,
  subcomponents: {
    'Alert.Close': Alert.Close,
    'Alert.Paragraph': Alert.Paragraph,
    'Alert.Title': Alert.Title
  }
};

export const Example: StoryObj<typeof AlertStory> = {
  render: args => <AlertStory {...args} />,
  name: 'Alert',
  args: {
    children: 'Text',
    type: 'info',
    title: 'Title',
    hasClose: true,
    hasParagraph: false,
    'aria-label': 'Close'
  },
  argTypes: {
    title: {
      name: 'children',
      table: { category: 'Alert.Title' }
    },
    isRegular: {
      control: { type: 'boolean' },
      table: { category: 'Alert.Title' }
    },
    hasClose: {
      name: 'Alert.Close',
      table: { category: 'Story' }
    },
    hasParagraph: {
      name: 'Alert.Paragraph',
      table: { category: 'Story' }
    },

    'aria-label': {
      table: { category: 'Alert.Close' }
    }
  },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A25292'
    }
  }
};
