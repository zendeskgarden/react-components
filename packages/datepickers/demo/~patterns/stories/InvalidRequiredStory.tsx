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
import { customParseShortDate, formatShortDate } from './utils';

export const InvalidRequiredStory: StoryFn = () => {
  const [value, setValue] = useState<Date | undefined>(undefined);
  const [validation, setValidation] = useState<'error' | undefined>(undefined);

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
        onValueSettled={({ valid }) => setValidation(valid ? undefined : 'error')}
      >
        <Input required validation={validation} />
      </DatePicker>
      {validation === 'error' && (
        <Field.Message validation="error">Date cannot be blank.</Field.Message>
      )}
    </Field>
  );
};
