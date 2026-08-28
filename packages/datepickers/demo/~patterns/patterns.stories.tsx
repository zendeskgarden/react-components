/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { CalendarStory } from './stories/CalendarStory';
import { CustomDateFormatStory } from './stories/CustomDateFormatStory';
import { InvalidDateStory } from './stories/InvalidDateStory';
import { InvalidRangeStory } from './stories/InvalidRangeStory';
import { InvalidRequiredStory } from './stories/InvalidRequiredStory';

export default {
  title: 'Packages/DatePickers/[patterns]'
};

export const Example: StoryObj<typeof CalendarStory> = {
  render: args => <CalendarStory {...args} />,
  name: 'Calendar',
  args: { appendToNode: false },
  argTypes: { appendToNode: { control: 'boolean' } }
};

export const CustomDateFormat: StoryObj<typeof CustomDateFormatStory> = {
  render: () => <CustomDateFormatStory />,
  name: 'Custom date format'
};

export const InvalidDate: StoryObj<typeof InvalidDateStory> = {
  render: () => <InvalidDateStory />,
  name: 'Invalid date'
};

export const InvalidRange: StoryObj<typeof InvalidRangeStory> = {
  render: () => <InvalidRangeStory />,
  name: 'Invalid range'
};

export const InvalidRequired: StoryObj<typeof InvalidRequiredStory> = {
  render: () => <InvalidRequiredStory />,
  name: 'Invalid required'
};
