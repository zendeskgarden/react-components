/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { DateTimePicker } from '@zendeskgarden/react-datepickers';
import { DateTimePickerStory } from './stories/DateTimePickerStory';

export default {
  title: 'Packages/Datepickers/DateTimePicker',
  component: DateTimePicker
};

export const Example: StoryObj<typeof DateTimePickerStory> = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = (value: any) =>
      updateArgs({
        value
      });

    return <DateTimePickerStory {...args} onChange={handleChange} />;
  },
  name: 'DateTimePicker',
  args: {
    isAnimated: true,
    timeStep: 1,
    isAmPm: 'auto' as any,
    message: 'Message'
  },
  argTypes: {
    appendToNode: { control: false },
    value: { control: 'date' },
    minValue: { control: 'date' },
    maxValue: { control: 'date' },
    timeStep: {
      control: { type: 'select' },
      options: [1, 5, 10, 15, 30]
    },
    isAmPm: {
      control: { type: 'radio' },
      options: ['auto', 'true', 'false'],
      mapping: { auto: undefined, true: true, false: false }
    },
    hasMessage: {
      name: 'Message',
      control: { type: 'boolean' },
      table: { category: 'Story' }
    },
    message: {
      name: 'children',
      control: { type: 'text' },
      table: { category: 'Message' }
    },
    validation: {
      options: ['success', 'warning', 'error'],
      control: { type: 'radio' },
      table: { category: 'Input' }
    },
    validationLabel: {
      control: { type: 'text' },
      table: { category: 'Message' }
    }
  }
};
