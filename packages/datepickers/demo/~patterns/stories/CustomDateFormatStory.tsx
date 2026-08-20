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

const DATE_PATTERN = /^(?<day>\d{2})\.(?<month>\d{2})\.(?<year>\d{4})$/u;

/**
 * formatDate and customParseDate are a matched pair: formatDate controls how
 * the committed value is displayed, and customParseDate controls how typed
 * text is read back into a Date. They must agree on the same shape, or typed
 * input stops parsing once the field reformats to the committed value.
 */
const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');

  return `${day}.${month}.${date.getFullYear()}`;
};

const customParseDate = (value: string) => {
  const match = DATE_PATTERN.exec(value);

  if (!match?.groups) {
    return new Date(NaN);
  }

  const { day, month, year } = match.groups;

  return new Date(Number(year), Number(month) - 1, Number(day));
};

export const CustomDateFormatStory: StoryFn = () => {
  const [value, setValue] = useState<Date | undefined>(new Date());

  return (
    <Field>
      <Field.Label>Select a date</Field.Label>
      <Field.Hint>Expects DD.MM.YYYY, e.g. 25.12.2026</Field.Hint>
      <DatePicker
        value={value}
        onChange={setValue}
        formatDate={formatDate}
        customParseDate={customParseDate}
      >
        <Input />
      </DatePicker>
    </Field>
  );
};
