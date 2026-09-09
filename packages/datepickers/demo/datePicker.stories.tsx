/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useRef } from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { ClearableInput, Field } from '@zendeskgarden/react-forms';
import { Grid } from '@zendeskgarden/react-grid';
import { DatePicker } from '@zendeskgarden/react-datepickers';
import { DatePickerStory } from './stories/DatePickerStory';
import { DATE_STYLE_OPTIONS } from './stories/data';

export default {
  title: 'Packages/Datepickers/DatePicker',
  component: DatePicker
};

export const Example: StoryObj<typeof DatePickerStory> = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = (value: any) =>
      updateArgs({
        value
      });

    const handleValueSettled = (result: { date?: Date; valid: boolean }) => {
      if (result.valid) {
        updateArgs({ value: result.date });
      }
    };

    return (
      <DatePickerStory {...args} onChange={handleChange} onValueSettled={handleValueSettled} />
    );
  },
  name: 'DatePicker',
  args: {
    dateStyle: DATE_STYLE_OPTIONS[1],
    isAnimated: true,
    message: 'Message'
  },
  argTypes: {
    appendToNode: { control: false },
    value: { control: 'date' },
    minValue: { control: 'date' },
    maxValue: { control: 'date' },
    dateStyle: {
      control: 'radio',
      options: DATE_STYLE_OPTIONS,
      table: { category: 'Story' }
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
  },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=134%3A32'
    }
  }
};

const ForcedOpenDatePicker = ({ isCompact }: { isCompact?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    const openCalendar = () => {
      container.querySelector<HTMLButtonElement>('[data-test-id="calendar-button"]')?.click();
    };

    openCalendar();

    const menu = container.querySelector('[data-test-id="datepicker-menu"]');

    if (!menu) {
      return undefined;
    }

    // Keep the calendar open for inspection, even though clicking anywhere
    // else in the Storybook UI would normally close it.
    const observer = new MutationObserver(() => {
      if (menu.getAttribute('data-test-open') === 'false') {
        openCalendar();
      }
    });

    observer.observe(menu, { attributes: true, attributeFilter: ['data-test-open'] });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      <Field>
        <Field.Label hidden>{DatePicker.displayName}</Field.Label>
        <DatePicker value={new Date()} isAnimated={false} isCompact={isCompact}>
          <ClearableInput isCompact={isCompact} />
        </DatePicker>
      </Field>
    </div>
  );
};

export const OpenCalendar: StoryObj<typeof ForcedOpenDatePicker> = {
  render: args => (
    <Grid>
      <Grid.Row justifyContent="center" style={{ height: 'calc(100vh - 80px)' }}>
        <Grid.Col alignSelf="center">
          <ForcedOpenDatePicker {...args} />
        </Grid.Col>
      </Grid.Row>
    </Grid>
  ),
  name: 'DatePicker (calendar forced open)',
  args: {
    isCompact: false
  }
};
