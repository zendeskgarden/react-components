/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { DatePicker, DatePickerInvalidReason } from '@zendeskgarden/react-datepickers';
import { ClearableInput, Field } from '@zendeskgarden/react-forms';
import { customParseShortDate, formatShortDate } from './utils';

export const DatePickerInvalidRequiredStory: StoryFn = () => {
  const [value, setValue] = useState<Date | undefined>(undefined);
  const [reason, setReason] = useState<DatePickerInvalidReason | undefined>(undefined);

  return (
    <Field>
      <Field.Label>
        Date<span aria-hidden="true">*</span>
      </Field.Label>
      <Field.Hint>Must be M/D/YYYY format</Field.Hint>
      <DatePicker
        value={value}
        onChange={setValue}
        formatDate={formatShortDate}
        customParseDate={customParseShortDate}
        onValueSettled={({ reason: nextReason }) => setReason(nextReason)}
      >
        <ClearableInput
          required
          validation={reason ? 'error' : undefined}
          buttonProps={{ onClick: () => setReason(undefined) }}
          wrapperProps={{ role: null, 'aria-labelledby': null } as any}
        />
      </DatePicker>
      {reason === 'required' && (
        <Field.Message validation="error">Date cannot be blank.</Field.Message>
      )}
    </Field>
  );
};
