/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Span } from '@zendeskgarden/react-typography';
import { eachDayOfInterval } from 'date-fns/eachDayOfInterval';
import { addDays } from 'date-fns/addDays';
import { StyledCalendarRow, StyledDayLabel, StyledDayLabelHeader } from '../styled';
import { formatFullWeekdayLabel, formatWeekdayLabel } from '../utils/calendar-utils';

export interface IWeekdayHeaderRowProps {
  /** The grid's first displayed date (a week-start date) - used to derive all seven weekday labels **/
  startDate: Date;
  locale?: string;
  isCompact?: boolean;
}

/**
 * Shared by `DatePicker` and `DatePickerRange`'s own `Month` - the row of
 * abbreviated weekday labels (each paired with a visually-hidden full-name
 * span) above the day grid. Identical in both regardless of single- vs
 * range-selection, since it depends only on locale and the grid's start
 * date.
 */
export const WeekdayHeaderRow = ({
  startDate,
  locale,
  isCompact = false
}: IWeekdayHeaderRowProps) => {
  const dayLabels = eachDayOfInterval({ start: startDate, end: addDays(startDate, 6) }).map(
    date => {
      const formattedDayLabel = formatWeekdayLabel(date, locale);

      return (
        <StyledDayLabelHeader
          key={`day-label-${formattedDayLabel}`}
          $isCompact={isCompact}
          scope="col"
        >
          <StyledDayLabel $isCompact={isCompact} aria-hidden="true" data-test-id="day-label">
            {formattedDayLabel}
          </StyledDayLabel>
          <Span hidden data-test-id="day-label-full">
            {formatFullWeekdayLabel(date, locale)}
          </Span>
        </StyledDayLabelHeader>
      );
    }
  );

  return <StyledCalendarRow>{dayLabels}</StyledCalendarRow>;
};

WeekdayHeaderRow.displayName = 'WeekdayHeaderRow';
