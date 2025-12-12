/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react';
import { Grid } from '@zendeskgarden/react-grid';
import { Field, Input } from '@zendeskgarden/react-forms';
import { DatePicker, IDatePickerProps } from '@zendeskgarden/react-datepickers';
import { DATE_STYLE } from './types';

interface IArgs extends IDatePickerProps {
  dateStyle: DATE_STYLE;
  hasMessage?: boolean;
  message?: string;
  validation?: 'success' | 'warning' | 'error';
  validationLabel?: string;
}

export const DatePickerStory: StoryFn<IArgs> = ({
  dateStyle,
  isCompact,
  hasMessage,
  message,
  validation,
  validationLabel,
  ...args
}) => {
  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat(args.locale, { dateStyle }).format(date);

  return (
    <Grid>
      <Grid.Row justifyContent="center" style={{ height: 'calc(100vh - 80px)' }}>
        <Grid.Col alignSelf="center">
          <Field>
            <Field.Label hidden>{DatePicker.displayName}</Field.Label>
            <DatePicker {...args} formatDate={formatDate} isCompact={isCompact}>
              <Input isCompact={isCompact} validation={validation} />
            </DatePicker>
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
