/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react-vite';
import { Field, Input } from '@zendeskgarden/react-forms';
import { DatePickerRange, IDatePickerRangeProps } from '@zendeskgarden/react-datepickers';
import { DATE_STYLE } from './types';

interface IArgs extends IDatePickerRangeProps {
  dateStyle: DATE_STYLE;
}

export const DatePickerRangeStory: StoryFn<IArgs> = ({ dateStyle, isCompact, ...args }) => {
  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat(args.locale, { dateStyle }).format(date);

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: `repeat(2, ${isCompact ? '224px' : '280px'})`,
    gridTemplateRows: `${isCompact ? '32px' : '40px'} auto`,
    gap: isCompact ? '16px' : '20px'
  };

  return (
    <DatePickerRange {...args} formatDate={formatDate} isCompact={isCompact}>
      <div style={gridStyles}>
        <Field>
          <Field.Label hidden>{(DatePickerRange.Start as any).displayName}</Field.Label>
          <DatePickerRange.Start>
            <Input isCompact={isCompact} />
          </DatePickerRange.Start>
        </Field>
        <Field>
          <Field.Label hidden>{(DatePickerRange.End as any).displayName}</Field.Label>
          <DatePickerRange.End>
            <Input isCompact={isCompact} />
          </DatePickerRange.End>
        </Field>
        <DatePickerRange.Calendar style={{ gridColumn: '1 / -1', padding: 0 }} />
      </div>
    </DatePickerRange>
  );
};
