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
  StyledCalendarRow,
  StyledDayLabel,
  StyledDayButton
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
  previousMonthLabel?: string;
  nextMonthLabel?: string;
  headingId: string;
}

export const Calendar = forwardRef<HTMLDivElement, ICalendarProps>(
  (
    {
      value,
      minValue,
      maxValue,
      isCompact,
      locale,
      weekStartsOn,
      onChange,
      inputRef,
      previousMonthLabel,
      nextMonthLabel,
      headingId
    },
    ref
  ) => {
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

    const fullDayLabelFormatter = useCallback<(date: Date) => string>(
      date => {
        const formatter = new Intl.DateTimeFormat(locale, {
          weekday: 'long'
        });

        return formatter.format(date);
      },
      [locale]
    );

    const dayLabels = eachDayOfInterval({ start: startDate, end: addDays(startDate, 6) }).map(
      date => {
        const formattedDayLabel = dayLabelFormatter(date);

        return (
          <th key={`day-label-${formattedDayLabel}`} scope="col" abbr={fullDayLabelFormatter(date)}>
            <StyledDayLabel $isCompact={isCompact!} data-test-id="day-label">
              {formattedDayLabel}
            </StyledDayLabel>
          </th>
        );
      }
    );

    const days = eachDayOfInterval({ start: startDate, end: endDate }).map(date => {
      const formattedDayLabel = getDate(date);
      const isCurrentDate = isToday(date);
      const isPreviousMonth = !isSameMonth(date, state.previewDate);
      const isSelected = value && isSameDay(date, value);

      const isDisabled = !isDateWithinRange(date, minValue, maxValue);

      return (
        <td key={date.toISOString()} role="gridcell">
          <StyledDayButton
            $isCompact={isCompact!}
            $isPreviousMonth={isPreviousMonth}
            isPressed={!!isSelected}
            isPill
            isBasic={!isSelected}
            isNeutral={!isSelected}
            isPrimary={!!isSelected}
            disabled={isDisabled}
            aria-current={isCurrentDate ? 'date' : undefined}
            tabIndex={isSameDay(date, state.focusedDate) ? 0 : -1}
            onClick={() => {
              if (onChange && !isSameDay(value!, date)) {
                onChange(date);
              }

              dispatch({ type: 'SELECT_DATE', value: date });
              inputRef?.current?.focus();
            }}
            data-test-id="day"
            data-test-previous={isPreviousMonth}
            data-test-selected={isSelected}
            data-test-disabled={isDisabled}
            data-test-today={isCurrentDate}
          >
            {formattedDayLabel}
          </StyledDayButton>
        </td>
      );
    });

    const weeks = Array.from({ length: Math.ceil(days.length / 7) }, (_, weekIndex) => ({
      key: addDays(startDate, weekIndex * 7).toISOString(),
      days: days.slice(weekIndex * 7, weekIndex * 7 + 7)
    }));

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
        <MonthSelector
          locale={locale}
          isCompact={isCompact!}
          previousMonthLabel={previousMonthLabel}
          nextMonthLabel={nextMonthLabel}
          headingId={headingId}
        />
        <StyledCalendar as="table" $isCompact={isCompact!} role="grid" aria-labelledby={headingId}>
          <tbody>
            <StyledCalendarRow>{dayLabels}</StyledCalendarRow>
            {weeks.map(week => (
              <StyledCalendarRow key={week.key}>{week.days}</StyledCalendarRow>
            ))}
          </tbody>
        </StyledCalendar>
      </StyledDatePicker>
    );
  }
);

Calendar.displayName = 'Calendar';
