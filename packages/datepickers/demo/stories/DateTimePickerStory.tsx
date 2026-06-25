/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react-vite';
import { Grid } from '@zendeskgarden/react-grid';
import { Field, Input } from '@zendeskgarden/react-forms';
import { DateTimePicker, IDateTimePickerProps } from '@zendeskgarden/react-datepickers';

interface IArgs extends IDateTimePickerProps {
  hasMessage?: boolean;
  message?: string;
  validation?: 'success' | 'warning' | 'error';
  validationLabel?: string;
}

export const DateTimePickerStory: StoryFn<IArgs> = ({
  isCompact,
  hasMessage,
  message,
  validation,
  validationLabel,
  ...args
}) => {
  const value = args.value ? new Date(args.value) : undefined;
  const minValue = args.minValue ? new Date(args.minValue) : undefined;
  const maxValue = args.maxValue ? new Date(args.maxValue) : undefined;

  return (
    <Grid>
      <Grid.Row justifyContent="center" style={{ height: 'calc(100vh - 80px)' }}>
        <Grid.Col alignSelf="center">
          <Field>
            <Field.Label hidden>{DateTimePicker.displayName}</Field.Label>
            <DateTimePicker
              {...args}
              value={value}
              minValue={minValue}
              maxValue={maxValue}
              isCompact={isCompact}
            >
              <Input isCompact={isCompact} validation={validation} />
            </DateTimePicker>
            {!!hasMessage && (
              <Field.Message validation={validation} validationLabel={validationLabel}>
                {message}
              </Field.Message>
            )}
          </Field>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  );
};
