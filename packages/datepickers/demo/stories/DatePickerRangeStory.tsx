/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { StoryFn } from '@storybook/react-vite';
import { Field, Input } from '@zendeskgarden/react-forms';
import { DatePickerRange, IDatePickerRangeProps } from '@zendeskgarden/react-datepickers';
import { DATE_STYLE } from './types';

interface IArgs extends IDatePickerRangeProps {
  dateStyle: DATE_STYLE;
}

const StyledGrid = styled.div<{ isCompact?: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, ${p => (p.isCompact ? '224px' : '280px')});
  grid-template-rows: ${p => (p.isCompact ? '32px' : '40px')} auto;
  gap: ${p => (p.isCompact ? '16px' : '20px')};
`;

const StyledCalendar = styled(DatePickerRange.Calendar)`
  grid-column: 1 / -1;
  margin: -${p => p.theme.shadowWidths.md};
  padding: ${p => p.theme.shadowWidths.md};
`;

export const DatePickerRangeStory: StoryFn<IArgs> = ({ dateStyle, isCompact, ...args }) => {
  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat(args.locale, { dateStyle }).format(date);

  return (
    <DatePickerRange {...args} formatDate={formatDate} isCompact={isCompact}>
      <StyledGrid isCompact={isCompact}>
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
        <StyledCalendar />
      </StyledGrid>
    </DatePickerRange>
  );
};
