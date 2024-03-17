/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Field, Input } from '@zendeskgarden/react-forms';
import { Grid } from '@zendeskgarden/react-grid';
import { DatePicker, IDatePickerProps } from '@zendeskgarden/react-datepickers';
import { DATE_STYLE } from './types';

interface IArgs extends IDatePickerProps {
  dateStyle: DATE_STYLE;
}

export const DatePickerStory: Story<IArgs> = ({ dateStyle, isCompact, ...args }) => {
  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat(args.locale, { dateStyle }).format(date);

  return (
    <Grid>
      <Grid.Row style={{ height: 'calc(100vh - 80px)' }}>
        <Grid.Col textAlign="center" alignSelf="center">
          <Field>
            <Field.Label hidden>{DatePicker.displayName}</Field.Label>
            <DatePicker {...args} formatDate={formatDate} isCompact={isCompact}>
              <Input isCompact={isCompact} style={{ width: isCompact ? 256 : 320 }} />
            </DatePicker>
          </Field>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  );
};
