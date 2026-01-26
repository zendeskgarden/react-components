/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { GlobalAlert } from '@zendeskgarden/react-notifications';
import React from 'react';

import { GlobalAlertStory } from './stories/GlobalAlertStory';

export default {
  title: 'Packages/Notifications/GlobalAlert',
  component: GlobalAlert,
  subcomponents: {
    'GlobalAlert.Button': GlobalAlert.Button,
    'GlobalAlert.Close': GlobalAlert.Close,
    'GlobalAlert.Content': GlobalAlert.Content,
    'GlobalAlert.Title': GlobalAlert.Title
  }
};

export const Example: StoryObj<typeof GlobalAlertStory> = {
  render: args => <GlobalAlertStory {...args} />,
  name: 'GlobalAlert',
  args: {
    type: 'info',
    anchor: 'Anchor',
    button: 'Button',
    ariaLabel: 'Label',
    content: 'Content',
    title: 'Title',
    hasClose: true
  },
  argTypes: {
    hasClose: {
      name: 'GlobalAlert.Close',
      type: 'boolean',
      table: { category: 'Story' }
    },
    button: {
      name: 'children',
      type: 'string',
      table: { category: 'GlobalAlert.Button' }
    },
    isBasic: {
      type: 'boolean',
      table: { category: 'GlobalAlert.Button' }
    },
    ariaLabel: {
      name: 'aria-label',
      type: 'string',
      table: { category: 'GlobalAlert.Close' }
    },
    content: {
      name: 'text',
      type: 'string',
      table: { category: 'GlobalAlert.Content' }
    },
    anchor: {
      name: 'Anchor',
      type: 'string',
      table: { category: 'GlobalAlert.Content' }
    },
    isExternal: {
      name: 'Anchor isExternal',
      type: 'boolean',
      table: { category: 'GlobalAlert.Content' }
    },
    title: {
      name: 'children',
      type: 'string',
      table: { category: 'GlobalAlert.Title' }
    },
    isRegular: {
      type: 'boolean',
      table: { category: 'GlobalAlert.Title' }
    }
  },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=12311%3A50200'
    }
  }
};
