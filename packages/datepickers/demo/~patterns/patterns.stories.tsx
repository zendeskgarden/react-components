/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { expect, fireEvent, userEvent, within } from 'storybook/test';
import { CalendarStory } from './stories/CalendarStory';
import { CustomDateFormatStory } from './stories/CustomDateFormatStory';
import { DatePickerInvalidDateStory } from './stories/DatePickerInvalidDateStory';
import { DatePickerOutOfRangeStory } from './stories/DatePickerOutOfRangeStory';
import { DatePickerInvalidRequiredStory } from './stories/DatePickerInvalidRequiredStory';
import { DatePickerRangeInvalidDateStory } from './stories/DatePickerRangeInvalidDateStory';
import { DatePickerRangeOutOfRangeStory } from './stories/DatePickerRangeOutOfRangeStory';
import { DatePickerRangeInvalidRequiredStory } from './stories/DatePickerRangeInvalidRequiredStory';
import { DatePickerRangeOutOfOrderStory } from './stories/DatePickerRangeOutOfOrderStory';

export default {
  title: 'Packages/DatePickers/[patterns]'
};

export const Example: StoryObj<typeof CalendarStory> = {
  render: args => <CalendarStory {...args} />,
  name: 'DatePicker: Calendar portal',
  args: { appendToNode: false },
  argTypes: { appendToNode: { control: 'boolean' } }
};

export const CustomDateFormat: StoryObj<typeof CustomDateFormatStory> = {
  render: () => <CustomDateFormatStory />,
  name: 'DatePicker: Custom date format'
};

export const DatePickerInvalidDate: StoryObj<typeof DatePickerInvalidDateStory> = {
  render: () => <DatePickerInvalidDateStory />,
  name: 'DatePicker: Invalid date',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');

    input.focus();
    fireEvent.change(input, { target: { value: 'not a date' } });
    await userEvent.tab();
    await userEvent.tab();

    await expect(canvas.getByText(/Date must be in/u)).toBeVisible();
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(input).toHaveValue('not a date');
  }
};

export const DatePickerOutOfRange: StoryObj<typeof DatePickerOutOfRangeStory> = {
  render: () => <DatePickerOutOfRangeStory />,
  name: 'DatePicker: Out of range',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');

    input.focus();
    fireEvent.change(input, { target: { value: '1/1/2000' } });
    await userEvent.tab();
    await userEvent.tab();

    await expect(canvas.getByText(/Date is out of range/u)).toBeVisible();
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(input).toHaveValue('1/1/2000');
  }
};

export const DatePickerInvalidRequired: StoryObj<typeof DatePickerInvalidRequiredStory> = {
  render: () => <DatePickerInvalidRequiredStory />,
  name: 'DatePicker: Invalid required',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');

    input.focus();
    await userEvent.tab();

    await expect(canvas.getByText(/cannot be blank/u)).toBeVisible();
    await expect(input).toHaveAttribute('aria-invalid', 'true');
  }
};

export const DatePickerRangeInvalidDate: StoryObj<typeof DatePickerRangeInvalidDateStory> = {
  render: () => <DatePickerRangeInvalidDateStory />,
  name: 'DatePickerRange: Invalid date',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [startInput] = canvas.getAllByRole('textbox');

    await userEvent.type(startInput, 'not a date');
    await userEvent.tab();
    await userEvent.tab();

    await expect(canvas.getByText(/Date must be in/u)).toBeVisible();
    await expect(startInput).toHaveAttribute('aria-invalid', 'true');
    await expect(startInput).toHaveValue('not a date');
  }
};

export const DatePickerRangeOutOfRange: StoryObj<typeof DatePickerRangeOutOfRangeStory> = {
  render: () => <DatePickerRangeOutOfRangeStory />,
  name: 'DatePickerRange: Out of range',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [startInput] = canvas.getAllByRole('textbox');

    await userEvent.clear(startInput);
    await userEvent.type(startInput, '1/1/2000');
    await userEvent.tab();
    await userEvent.tab();

    await expect(canvas.getByText(/Date is out of range/u)).toBeVisible();
    await expect(startInput).toHaveAttribute('aria-invalid', 'true');
    await expect(startInput).toHaveValue('1/1/2000');
  }
};

export const DatePickerRangeInvalidRequired: StoryObj<typeof DatePickerRangeInvalidRequiredStory> =
  {
    render: () => <DatePickerRangeInvalidRequiredStory />,
    name: 'DatePickerRange: Invalid required',
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      const [startInput] = canvas.getAllByRole('textbox');

      await userEvent.click(startInput);
      await userEvent.tab();

      await expect(canvas.getByText(/cannot be blank/u)).toBeVisible();
      await expect(startInput).toHaveAttribute('aria-invalid', 'true');
    }
  };

export const DatePickerRangeOutOfOrder: StoryObj<typeof DatePickerRangeOutOfOrderStory> = {
  render: () => <DatePickerRangeOutOfOrderStory />,
  name: 'DatePickerRange: Out of order',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, endInput] = canvas.getAllByRole('textbox');

    await userEvent.clear(endInput);
    await userEvent.type(endInput, '1/1/2000');
    await userEvent.tab();
    await userEvent.tab();

    await expect(canvas.getByText(/must be on or after/u)).toBeVisible();
    await expect(endInput).toHaveAttribute('aria-invalid', 'true');
    await expect(endInput).toHaveValue('1/1/2000');
  }
};
