/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import { useText } from '@zendeskgarden/react-theming';
import { Span } from '@zendeskgarden/react-typography';
import { eachDayOfInterval } from 'date-fns/eachDayOfInterval';
import { addDays } from 'date-fns/addDays';
import { isSameMonth } from 'date-fns/isSameMonth';
import { getDate } from 'date-fns/getDate';
import {
  StyledCalendarMonth,
  StyledCalendarHeading,
  StyledCalendarTable,
  StyledCalendarRow,
  StyledDayCell,
  StyledDayNumber
} from '../../../styled';
import { WeekdayHeaderRow } from '../../../components/WeekdayHeaderRow';
import useDatePickerContext from '../utils/useDatePickerContext';
import {
  formatFullDate,
  formatMonthHeading,
  getMonthDateRange
} from '../../../utils/calendar-utils';
import { IDatePickerMonthProps } from '../../../types';

export const Month = forwardRef<HTMLDivElement, IDatePickerMonthProps>(
  ({ isCompact = false, locale, weekStartsOn, selectableCellRoleDescription }, ref) => {
    const { previewDate, getGridProps, getHeadingProps, getCellProps } = useDatePickerContext();

    const selectableCellRoleDescriptionText = useText(
      Month,
      { selectableCellRoleDescription },
      'selectableCellRoleDescription',
      'selectable cell'
    );

    const { startDate, endDate } = getMonthDateRange(previewDate, weekStartsOn, locale);

    const days = eachDayOfInterval({ start: startDate, end: endDate }).map(date => {
      const formattedDayLabel = getDate(date);
      const isPreviousMonth = !isSameMonth(date, previewDate);

      return (
        // eslint-disable-next-line jsx-a11y/prefer-tag-over-role -- StyledDayCell already renders a <td>; eslint can't see through the styled-component wrapper
        <StyledDayCell
          key={date.toISOString()}
          role="gridcell"
          data-test-previous={isPreviousMonth}
          aria-roledescription={selectableCellRoleDescriptionText}
          {...getCellProps({ date })}
        >
          <StyledDayNumber
            $isCompact={isCompact}
            $isPreviousMonth={isPreviousMonth}
            aria-hidden="true"
          >
            {formattedDayLabel}
          </StyledDayNumber>
          <Span hidden data-test-id="full-date">
            {formatFullDate(date, locale)}
          </Span>
        </StyledDayCell>
      );
    });

    const weeks = Array.from({ length: Math.ceil(days.length / 7) }, (_, weekIndex) => ({
      key: addDays(startDate, weekIndex * 7).toISOString(),
      days: days.slice(weekIndex * 7, weekIndex * 7 + 7)
    }));

    return (
      <StyledCalendarMonth ref={ref} $isCompact={isCompact}>
        <StyledCalendarHeading
          $isCompact={isCompact}
          data-test-id="month-display"
          {...getHeadingProps()}
        >
          {formatMonthHeading(previewDate, locale)}
        </StyledCalendarHeading>
        <StyledCalendarTable as="table" $isCompact={isCompact} {...getGridProps()}>
          <tbody>
            <WeekdayHeaderRow startDate={startDate} locale={locale} isCompact={isCompact} />
            {weeks.map(week => (
              <StyledCalendarRow key={week.key}>{week.days}</StyledCalendarRow>
            ))}
          </tbody>
        </StyledCalendarTable>
      </StyledCalendarMonth>
    );
  }
);

Month.displayName = 'Month';
