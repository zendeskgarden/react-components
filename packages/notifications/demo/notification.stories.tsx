/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { Notification } from '@zendeskgarden/react-notifications';
import { NotificationStory } from './stories/NotificationStory';

export default {
  title: 'Packages/Notifications/Notification',
  component: Notification,
  subcomponents: {
    'Notification.Close': Notification.Close,
    'Notification.Paragraph': Notification.Paragraph,
    'Notification.Title': Notification.Title
  }
};

export const Example: StoryObj<typeof NotificationStory> = {
  render: args => <NotificationStory {...args} />,
  name: 'Notification',
  args: {
    children: 'Text',
    title: 'Title',
    hasClose: true,
    hasParagraph: false,
    'aria-label': 'Close'
  },
  argTypes: {
    title: {
      name: 'children',
      table: { category: 'Notification.Title' }
    },
    isRegular: {
      control: { type: 'boolean' },
      table: { category: 'Notification.Title' }
    },
    hasClose: {
      name: 'Notification.Close',
      table: { category: 'Story' }
    },
    hasParagraph: {
      name: 'Notification.Paragraph',
      table: { category: 'Story' }
    },

    'aria-label': {
      table: { category: 'Notification.Close' }
    }
  },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=1480%3A28056'
    }
  }
};
