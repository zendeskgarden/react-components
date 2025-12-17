/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { Timeline } from '@zendeskgarden/react-accordions';
import { TimelineStory } from './stories/TimelineStory';
import { TIMELINE_ITEMS as ITEMS } from './stories/data';

export default {
  title: 'Packages/Accordions/Timeline',
  component: Timeline,
  subcomponents: {
    'Timeline.Content': Timeline.Content,
    'Timeline.Item': Timeline.Item,
    'Timeline.OppositeContent': Timeline.OppositeContent
  }
};

export const Example: StoryObj<typeof TimelineStory> = {
  render: args => <TimelineStory {...args} />,
  name: 'Timeline',
  args: {
    hasIcon: false,
    hasOppositeContent: false,
    items: ITEMS
  },
  argTypes: {
    hasIcon: {
      name: 'icon',
      table: { category: 'Timeline.Item' }
    },
    surfaceColor: {
      name: 'surfaceColor',
      control: { type: 'color' },
      table: { category: 'Timeline.Item' }
    },
    hasOppositeContent: {
      name: 'Timeline.OppositeContent',
      table: { category: 'Story' }
    },
    items: {
      name: 'Timeline.Item[]',
      table: { category: 'Story' }
    }
  },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=9806%3A43467'
    }
  }
};
