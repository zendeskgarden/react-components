/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { eachDayOfInterval } from 'date-fns/eachDayOfInterval';
import { addDays } from 'date-fns/addDays';
import { isSameDay } from 'date-fns/isSameDay';
import { isSameMonth } from 'date-fns/isSameMonth';
import { getDate } from 'date-fns/getDate';
import {
  StyledCalendarMonth,
  StyledCalendarHeading,
  StyledCalendarTable,
  StyledCalendarRow,
  StyledDayCell,
  StyledDayButton
} from '../../../styled';
import { WeekdayHeaderRow } from '../../../components/WeekdayHeaderRow';
import useDatePickerContext from '../utils/useDatePickerContext';
import {
  formatMonthHeading,
  getMonthDateRange,
  isDateWithinRange
} from '../../../utils/calendar-utils';
import { DateFnsIndex } from '../../../types';

interface IMonthProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: Date;
  minValue?: Date;
  maxValue?: Date;
  isCompact?: boolean;
  locale?: string;
  weekStartsOn?: DateFnsIndex;
}

export const Month = forwardRef<HTMLDivElement, IMonthProps>(
  ({ value, minValue, maxValue, isCompact = false, locale, weekStartsOn }, ref) => {
    const { previewDate, isValueInvalid, getGridProps, getHeadingProps, getDayProps } =
      useDatePickerContext();

    const { startDate, endDate } = getMonthDateRange(previewDate, weekStartsOn, locale);

    const days = eachDayOfInterval({ start: startDate, end: endDate }).map(date => {
      const formattedDayLabel = getDate(date);
      const isPreviousMonth = !isSameMonth(date, previewDate);
      const isSelected = !!(value && !isValueInvalid && isSameDay(date, value));
      const isDisabled = !isDateWithinRange(date, minValue, maxValue);

      return (
        // eslint-disable-next-line jsx-a11y/prefer-tag-over-role -- StyledDayCell already renders a <td>; eslint can't see through the styled-component wrapper
        <StyledDayCell key={date.toISOString()} role="gridcell">
          <StyledDayButton
            $isCompact={isCompact}
            $isPreviousMonth={isPreviousMonth}
            isPressed={!!(isSelected && !isDisabled)}
            isPill
            isBasic
            isNeutral={!isSelected}
            data-test-previous={isPreviousMonth}
            {...getDayProps({ date })}
          >
            {formattedDayLabel}
          </StyledDayButton>
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
