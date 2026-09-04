/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
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
  name: 'Invalid date',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    await userEvent.type(input, 'not a date');
    // Settling requires leaving the widget entirely: tab past the clear button, then the calendar button.
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();

    await expect(canvas.getByText(/Date must be in/u)).toBeVisible();
    await expect(input).toHaveAttribute('aria-invalid', 'true');
  }
};

export const InvalidRange: StoryObj<typeof InvalidRangeStory> = {
  render: () => <InvalidRangeStory />,
  name: 'Invalid range',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    await userEvent.clear(input);
    await userEvent.type(input, '1/1/2000');
    // Settling requires leaving the widget entirely: tab past the clear button, then the calendar button.
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();

    await expect(canvas.getByText(/Date is out of range/u)).toBeVisible();
    await expect(input).toHaveAttribute('aria-invalid', 'true');
  }
};

export const InvalidRequired: StoryObj<typeof InvalidRequiredStory> = {
  render: () => <InvalidRequiredStory />,
  name: 'Invalid required',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    await userEvent.click(input);
    // No clear button while empty: settling only requires tabbing past the calendar button.
    await userEvent.tab();
    await userEvent.tab();

    await expect(canvas.getByText(/cannot be blank/u)).toBeVisible();
    await expect(input).toHaveAttribute('aria-invalid', 'true');
  }
};
