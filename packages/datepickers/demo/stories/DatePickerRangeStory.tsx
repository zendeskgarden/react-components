/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import styled from 'styled-components';
import { StoryFn } from '@storybook/react-vite';
import { focusStyles } from '@zendeskgarden/react-theming';
import { useScrollRegion } from '@zendeskgarden/container-scrollregion';
import { ClearableInput, Field } from '@zendeskgarden/react-forms';
import { DatePickerRange, IDatePickerRangeProps } from '@zendeskgarden/react-datepickers';
import { DATE_STYLE } from './types';

interface IArgs extends IDatePickerRangeProps {
  dateStyle: DATE_STYLE;
}

const StyledScrollRegion = styled.section`
  margin: -${p => p.theme.shadowWidths.md};
  padding: ${p => p.theme.shadowWidths.md};
  overflow: auto;
  ${p => focusStyles({ theme: p.theme })}
`;

const StyledGrid = styled.div<{ isCompact?: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, ${p => (p.isCompact ? '224px' : '280px')});
  grid-template-rows: auto auto;
  gap: ${p => (p.isCompact ? '16px' : '20px')};
`;

const StyledCalendar = styled(DatePickerRange.Calendar)`
  grid-column: 1 / -1;
  margin: -${p => p.theme.shadowWidths.md};
  padding: ${p => p.theme.shadowWidths.md};
`;

export const DatePickerRangeStory: StoryFn<IArgs> = ({ dateStyle, isCompact, ...args }) => {
  const containerRef = useRef<HTMLElement>(null);
  const containerTabIndex = useScrollRegion({ containerRef, dependency: isCompact });

  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat(args.locale, { dateStyle }).format(date);

  return (
    <DatePickerRange {...args} formatDate={formatDate} isCompact={isCompact}>
      <StyledScrollRegion
        ref={containerRef}
        tabIndex={containerTabIndex}
        aria-label="Date range picker"
      >
        <StyledGrid isCompact={isCompact}>
          <Field>
            <Field.Label>Start date</Field.Label>
            <DatePickerRange.Start>
              <ClearableInput isCompact={isCompact} />
            </DatePickerRange.Start>
          </Field>
          <Field>
            <Field.Label>End date</Field.Label>
            <DatePickerRange.End>
              <ClearableInput isCompact={isCompact} />
            </DatePickerRange.End>
          </Field>
          <StyledCalendar />
        </StyledGrid>
      </StyledScrollRegion>
    </DatePickerRange>
  );
};
