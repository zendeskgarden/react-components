/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import React from 'react';

import { CalendarStory } from './stories/CalendarStory';

export default {
  title: 'Packages/DatePickers/[patterns]'
};

export const Example: StoryObj<typeof CalendarStory> = {
  render: args => <CalendarStory {...args} />,
  name: 'Calendar',
  args: { appendToNode: false },
  argTypes: { appendToNode: { control: 'boolean' } }
};
