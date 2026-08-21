/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { DatePicker } from '@zendeskgarden/react-datepickers';
import { Field, Input } from '@zendeskgarden/react-forms';

export const InvalidDateStory: StoryFn = () => {
  const [value, setValue] = useState<Date | undefined>(undefined);
  const [validation, setValidation] = useState<'error' | undefined>(undefined);

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
        onValueSettled={({ valid }) => setValidation(valid ? undefined : 'error')}
      >
        <Input validation={validation} />
      </DatePicker>
      {validation === 'error' && (
        <Field.Message validation="error">
          Date must be in &quot;M/D/YYYY&quot;, &quot;Mon D, YYYY&quot;, or &quot;Month D,
          YYYY&quot; format.
        </Field.Message>
      )}
    </Field>
  );
};
