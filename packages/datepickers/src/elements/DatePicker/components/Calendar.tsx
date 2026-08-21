/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes, useCallback } from 'react';
import { startOfMonth } from 'date-fns/startOfMonth';
import { endOfMonth } from 'date-fns/endOfMonth';
import { startOfWeek } from 'date-fns/startOfWeek';
import { endOfWeek } from 'date-fns/endOfWeek';
import { eachDayOfInterval } from 'date-fns/eachDayOfInterval';
import { addDays } from 'date-fns/addDays';
import { isToday } from 'date-fns/isToday';
import { isSameDay } from 'date-fns/isSameDay';
import { isSameMonth } from 'date-fns/isSameMonth';
import { getDate } from 'date-fns/getDate';
import {
  StyledDatePicker,
  StyledCalendar,
  StyledCalendarItem,
  StyledDayLabel,
  StyledDay
} from '../../../styled';
import useDatePickerContext from '../utils/useDatePickerContext';
import { DateFnsIndex, getStartOfWeek, isDateWithinRange } from '../../../utils/calendar-utils';
import { MonthSelector } from './MonthSelector';

interface ICalendarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: Date;
  minValue?: Date;
  maxValue?: Date;
  isCompact?: boolean;
  locale?: string;
  weekStartsOn?: DateFnsIndex;
  onChange?: (date: Date) => void;
  inputRef?: React.RefObject<HTMLInputElement | null>;
}

export const Calendar = forwardRef<HTMLDivElement, ICalendarProps>(
  ({ value, minValue, maxValue, isCompact, locale, weekStartsOn, onChange, inputRef }, ref) => {
    const { state, dispatch } = useDatePickerContext();

    const preferredWeekStartsOn = weekStartsOn || getStartOfWeek(locale);
    const monthStartDate = startOfMonth(state.previewDate);
    const monthEndDate = endOfMonth(monthStartDate);
    const startDate = startOfWeek(monthStartDate, {
      weekStartsOn: preferredWeekStartsOn
    });
    const endDate = endOfWeek(monthEndDate, {
      weekStartsOn: preferredWeekStartsOn
    });

    const dayLabelFormatter = useCallback<(date: Date) => string>(
      date => {
        const formatter = new Intl.DateTimeFormat(locale, {
          weekday: 'short'
        });

        return formatter.format(date);
      },
      [locale]
    );

    const dayLabels = eachDayOfInterval({ start: startDate, end: addDays(startDate, 6) }).map(
      date => {
        const formattedDayLabel = dayLabelFormatter(date);

        return (
          <StyledCalendarItem key={`day-label-${formattedDayLabel}`} $isCompact={isCompact}>
            <StyledDayLabel $isCompact={isCompact!} data-test-id="day-label">
              {formattedDayLabel}
            </StyledDayLabel>
          </StyledCalendarItem>
        );
      }
    );

    const items = eachDayOfInterval({ start: startDate, end: endDate }).map(date => {
      const formattedDayLabel = getDate(date);
      const isCurrentDate = isToday(date);
      const isPreviousMonth = !isSameMonth(date, state.previewDate);
      const isSelected = value && isSameDay(date, value);

      const isDisabled = !isDateWithinRange(date, minValue, maxValue);

      return (
        <StyledCalendarItem key={date.toISOString()} $isCompact={isCompact}>
          <StyledDay
            $isToday={isCurrentDate}
            $isPreviousMonth={isPreviousMonth}
            $isCompact={isCompact!}
            aria-selected={isSelected || undefined}
            aria-disabled={isDisabled || undefined}
            tabIndex={-1}
            onClick={() => {
              if (!isDisabled) {
                if (onChange && !isSameDay(value!, date)) {
                  onChange(date);
                }

                dispatch({ type: 'SELECT_DATE', value: date });
                inputRef?.current?.focus();
              }
            }}
            data-test-id="day"
            data-test-previous={isPreviousMonth}
            data-test-selected={isSelected}
            data-test-disabled={isDisabled}
            data-test-today={isCurrentDate}
          >
            {formattedDayLabel}
          </StyledDay>
        </StyledCalendarItem>
      );
    });

    return (
      <StyledDatePicker
        ref={ref}
        $isCompact={isCompact!}
        data-test-id="calendar-wrapper"
        onMouseDown={e => {
          /** Stop focus from escaping input */
          e.preventDefault();
        }}
      >
        <MonthSelector locale={locale} isCompact={isCompact!} />
        <StyledCalendar $isCompact={isCompact!}>
          {dayLabels}
          {items}
        </StyledCalendar>
      </StyledDatePicker>
    );
  }
);

Calendar.displayName = 'Calendar';
