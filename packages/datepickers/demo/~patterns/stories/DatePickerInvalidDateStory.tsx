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

export const DatePickerInvalidDateStory: StoryFn = () => {
  const [value, setValue] = useState<Date | undefined>(undefined);
  const [reason, setReason] = useState<DatePickerInvalidReason | undefined>(undefined);

  return (
    <Field>
      <Field.Label>Date</Field.Label>
      <Field.Hint>
        3 accepted formats: &quot;M/D/YYYY&quot;, &quot;Mon D, YYYY&quot;, or &quot;Month D,
        YYYY&quot;
      </Field.Hint>
      <DatePicker
        value={value}
        onChange={setValue}
        onValueSettled={({ reason: nextReason }) => setReason(nextReason)}
      >
        <ClearableInput
          validation={reason ? 'error' : undefined}
          buttonProps={{ onClick: () => setReason(undefined) }}
          wrapperProps={{ role: undefined, 'aria-labelledby': undefined }}
        />
      </DatePicker>
      {reason === 'malformed' && (
        <Field.Message validation="error">
          Date must be in &quot;M/D/YYYY&quot;, &quot;Mon D, YYYY&quot;, or &quot;Month D,
          YYYY&quot; format.
        </Field.Message>
      )}
    </Field>
  );
};
