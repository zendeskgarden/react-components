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
import { subDays } from 'date-fns/subDays';
import {
  DatePickerRange,
  DatePickerRangeInvalidReason,
  IDatePickerRangeValueSettledResult
} from '@zendeskgarden/react-datepickers';
import { ClearableInput, Field } from '@zendeskgarden/react-forms';
import { customParseShortDate, formatShortDate } from './utils';

const TODAY = new Date();
const MIN_VALUE = subDays(TODAY, 7);
const MAX_VALUE = addDays(TODAY, 7);

const gridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 280px)',
  gridTemplateRows: 'auto auto',
  gap: '20px'
};

export const DatePickerRangeOutOfRangeStory: StoryFn = () => {
  const [startValue, setStartValue] = useState<Date | undefined>(TODAY);
  const [endValue, setEndValue] = useState<Date | undefined>(addDays(TODAY, 3));
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
      minValue={MIN_VALUE}
      maxValue={MAX_VALUE}
      formatDate={formatShortDate}
      customParseDate={customParseShortDate}
      onChange={handleChange}
      onValueSettled={handleValueSettled}
    >
      <div style={gridStyles}>
        <Field>
          <Field.Label>Start date</Field.Label>
          <Field.Hint>
            Must be between {formatShortDate(MIN_VALUE)} and {formatShortDate(MAX_VALUE)}, in
            M/D/YYYY format
          </Field.Hint>
          <DatePickerRange.Start>
            <ClearableInput
              validation={startReason ? 'error' : undefined}
              buttonProps={{ onClick: () => setStartReason(undefined) }}
            />
          </DatePickerRange.Start>
          {startReason === 'out-of-range' && (
            <Field.Message validation="error">
              Date is out of range. Please enter a date between {formatShortDate(MIN_VALUE)} and{' '}
              {formatShortDate(MAX_VALUE)}.
            </Field.Message>
          )}
        </Field>
        <Field>
          <Field.Label>End date</Field.Label>
          <Field.Hint>
            Must be between {formatShortDate(MIN_VALUE)} and {formatShortDate(MAX_VALUE)}, in
            M/D/YYYY format
          </Field.Hint>
          <DatePickerRange.End>
            <ClearableInput
              validation={endReason ? 'error' : undefined}
              buttonProps={{ onClick: () => setEndReason(undefined) }}
            />
          </DatePickerRange.End>
          {endReason === 'out-of-range' && (
            <Field.Message validation="error">
              Date is out of range. Please enter a date between {formatShortDate(MIN_VALUE)} and{' '}
              {formatShortDate(MAX_VALUE)}.
            </Field.Message>
          )}
        </Field>
        <DatePickerRange.Calendar style={{ gridColumn: '1 / -1', padding: 0 }} />
      </div>
    </DatePickerRange>
  );
};
