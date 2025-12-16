/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { ToastProvider } from '@zendeskgarden/react-notifications';
import { ToastProviderStory } from './stories/ToastProviderStory';
import { TOAST_PLACEMENT_OPTIONS } from './stories/data';

export default {
  title: 'Packages/Notifications/ToastProvider',
  component: ToastProvider
};

export const Example: StoryObj<typeof ToastProviderStory> = {
  render: args => <ToastProviderStory {...args} />,
  name: 'ToastProvider',
  args: {
    children: 'Notification',
    autoDismiss: true,
    milliseconds: 5000
  },
  argTypes: {
    placementProps: { control: 'object' },
    children: { table: { category: 'Toast' } },
    autoDismiss: { table: { category: 'Toast' } },
    milliseconds: { table: { category: 'Toast' } },
    placement: {
      control: 'radio',
      options: TOAST_PLACEMENT_OPTIONS,
      table: { category: 'Toast' }
    }
  }
};
