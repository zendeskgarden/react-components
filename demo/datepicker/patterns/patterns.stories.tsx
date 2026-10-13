/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { CalendarStory } from './stories/CalendarStory';
import { CustomDateFormatStory } from './stories/CustomDateFormatStory';

export default {
  title: 'Components/Datepickers/Patterns'
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
