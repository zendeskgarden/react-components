/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { addDays } from 'date-fns/addDays';
import {
  DatePickerRange,
  DatePickerRangeInvalidReason,
  IDatePickerRangeValueSettledResult
} from '@zendeskgarden/react-datepickers';
import { ClearableInput, Field } from '@zendeskgarden/react-forms';
import { Grid } from '@zendeskgarden/react-grid';
import { customParseShortDate, formatShortDate } from './utils';

const TODAY = new Date();
const DEFAULT_END_VALUE = addDays(TODAY, 7);

export const DatePickerRangeOutOfOrderStory: StoryFn = () => {
  const [startValue, setStartValue] = useState<Date | undefined>(TODAY);
  const [endValue, setEndValue] = useState<Date | undefined>(DEFAULT_END_VALUE);
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
              <Field.Label>Start date</Field.Label>
              <Field.Hint>Must be M/D/YYYY format, on or before the end date</Field.Hint>
              <DatePickerRange.Start>
                <ClearableInput
                  validation={startReason ? 'error' : undefined}
                  buttonProps={{ onClick: () => setStartReason(undefined) }}
                />
              </DatePickerRange.Start>
              {startReason === 'out-of-order' && (
                <Field.Message validation="error">
                  Start date must be on or before {endValue ? formatShortDate(endValue) : ''}.
                </Field.Message>
              )}
            </Field>
          </Grid.Col>
          <Grid.Col size="auto">
            <Field>
              <Field.Label>End date</Field.Label>
              <Field.Hint>Must be M/D/YYYY format, on or after the start date</Field.Hint>
              <DatePickerRange.End>
                <ClearableInput
                  validation={endReason ? 'error' : undefined}
                  buttonProps={{ onClick: () => setEndReason(undefined) }}
                />
              </DatePickerRange.End>
              {endReason === 'out-of-order' && (
                <Field.Message validation="error">
                  End date must be on or after {startValue ? formatShortDate(startValue) : ''}.
                </Field.Message>
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
