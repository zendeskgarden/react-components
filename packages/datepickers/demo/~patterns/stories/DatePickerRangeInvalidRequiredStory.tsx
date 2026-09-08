/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import {
  DatePickerRange,
  DatePickerRangeInvalidReason,
  IDatePickerRangeValueSettledResult
} from '@zendeskgarden/react-datepickers';
import { ClearableInput, Field } from '@zendeskgarden/react-forms';
import { Grid } from '@zendeskgarden/react-grid';
import { customParseShortDate, formatShortDate } from './utils';

export const DatePickerRangeInvalidRequiredStory: StoryFn = () => {
  const [startValue, setStartValue] = useState<Date | undefined>(undefined);
  const [endValue, setEndValue] = useState<Date | undefined>(undefined);
  const [startReason, setStartReason] = useState<DatePickerRangeInvalidReason | undefined>(
    undefined
  );
  const [endReason, setEndReason] = useState<DatePickerRangeInvalidReason | undefined>(undefined);

  const handleChange = (values: { startValue?: Date; endValue?: Date }) => {
    action('onChange')(values);
    setStartValue(values.startValue);
    setEndValue(values.endValue);
  };

  const handleValueSettled = (result: IDatePickerRangeValueSettledResult) => {
    action('onValueSettled')(result);

    if (result.field === 'start') {
      setStartReason(result.reason);
    } else {
      setEndReason(result.reason);
    }
  };

  return (
    <DatePickerRange
      startValue={startValue}
      endValue={endValue}
      formatDate={formatShortDate}
      customParseDate={customParseShortDate}
      onChange={handleChange}
      onValueSettled={handleValueSettled}
    >
      <Grid>
        <Grid.Row>
          <Grid.Col size="auto">
            <Field>
              <Field.Label>
                Start date<span aria-hidden="true">*</span>
              </Field.Label>
              <Field.Hint>Must be M/D/YYYY format</Field.Hint>
              <DatePickerRange.Start>
                <ClearableInput
                  required
                  validation={startReason ? 'error' : undefined}
                  buttonProps={{ onClick: () => setStartReason(undefined) }}
                />
              </DatePickerRange.Start>
              {startReason === 'required' && (
                <Field.Message validation="error">Start date cannot be blank.</Field.Message>
              )}
            </Field>
          </Grid.Col>
          <Grid.Col size="auto">
            <Field>
              <Field.Label>
                End date<span aria-hidden="true">*</span>
              </Field.Label>
              <Field.Hint>Must be M/D/YYYY format</Field.Hint>
              <DatePickerRange.End>
                <ClearableInput
                  required
                  validation={endReason ? 'error' : undefined}
                  buttonProps={{ onClick: () => setEndReason(undefined) }}
                />
              </DatePickerRange.End>
              {endReason === 'required' && (
                <Field.Message validation="error">End date cannot be blank.</Field.Message>
              )}
            </Field>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <DatePickerRange.Calendar />
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </DatePickerRange>
  );
};
