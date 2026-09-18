/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { addDays } from 'date-fns/addDays';
import { subDays } from 'date-fns/subDays';
import { DatePicker, DatePickerInvalidReason } from '@zendeskgarden/react-datepickers';
import { ClearableInput, Field } from '@zendeskgarden/react-forms';
import { customParseShortDate, formatShortDate } from './utils';

const TODAY = new Date();
const MIN_VALUE = subDays(TODAY, 7);
const MAX_VALUE = addDays(TODAY, 7);

export const DatePickerOutOfRangeStory: StoryFn = () => {
  const [value, setValue] = useState<Date | undefined>(TODAY);
  const [reason, setReason] = useState<DatePickerInvalidReason | undefined>(undefined);

  return (
    <Field>
      <Field.Label>Date</Field.Label>
      <Field.Hint>
        Must be between {formatShortDate(MIN_VALUE)} and {formatShortDate(MAX_VALUE)}, in M/D/YYYY
        format
      </Field.Hint>
      <DatePicker
        value={value}
        onChange={setValue}
        minValue={MIN_VALUE}
        maxValue={MAX_VALUE}
        formatDate={formatShortDate}
        customParseDate={customParseShortDate}
        onValueSettled={({ reason: nextReason }) => setReason(nextReason)}
      >
        <ClearableInput
          validation={reason ? 'error' : undefined}
          buttonProps={{ onClick: () => setReason(undefined) }}
          wrapperProps={{ role: undefined, 'aria-labelledby': undefined }}
        />
      </DatePicker>
      {reason === 'out-of-range' && (
        <Field.Message validation="error">
          Date is out of range. Please enter a date between {formatShortDate(MIN_VALUE)} and{' '}
          {formatShortDate(MAX_VALUE)}.
        </Field.Message>
      )}
    </Field>
  );
};
