/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback } from 'react';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import addDays from 'date-fns/addDays';
import isToday from 'date-fns/isToday';
import isSameDay from 'date-fns/isSameDay';
import isSameMonth from 'date-fns/isSameMonth';
import isBefore from 'date-fns/isBefore';
import isAfter from 'date-fns/isAfter';
import getDate from 'date-fns/getDate';
import {
  StyledDatepicker,
  StyledCalendar,
  StyledCalendarItem,
  StyledDayLabel,
  StyledDay
} from '../../../styled';
import useDatepickerContext from '../utils/useDatepickerContext';
import { getStartOfWeek } from '../../../utils/calendar-utils';
import MonthSelector from './MonthSelector';

interface ICalendarProps {
  value?: Date;
  minValue?: Date;
  maxValue?: Date;
  isCompact?: boolean;
  locale?: string;
}

const Calendar: React.FunctionComponent<ICalendarProps> = ({
  value,
  minValue,
  maxValue,
  isCompact,
  locale
}) => {
  const { state, dispatch } = useDatepickerContext();

  const weekStartsOn = getStartOfWeek(locale);
  const monthStartDate = startOfMonth(state.previewDate);
  const monthEndDate = endOfMonth(monthStartDate);
  const startDate = startOfWeek(monthStartDate, {
    weekStartsOn
  });
  const endDate = endOfWeek(monthEndDate, {
    weekStartsOn
  });

  const dayLabelFormatter = useCallback(
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
        <StyledCalendarItem key={`day-label-${formattedDayLabel}`} isCompact={isCompact}>
          <StyledDayLabel isCompact={isCompact!}>{formattedDayLabel}</StyledDayLabel>
        </StyledCalendarItem>
      );
    }
  );

  const items = eachDayOfInterval({ start: startDate, end: endDate }).map((date, itemsIndex) => {
    const formattedDayLabel = getDate(date);
    const isCurrentDate = isToday(date);
    const isPreviousMonth = !isSameMonth(date, state.previewDate);
    const isSelected = value && isSameDay(date, value);

    let isDisabled = false;

    if (minValue !== undefined) {
      isDisabled = isBefore(date, minValue) && !isSameDay(date, minValue);
    }

    if (maxValue !== undefined) {
      isDisabled = isDisabled || (isAfter(date, maxValue) && !isSameDay(date, maxValue));
    }

    return (
      <StyledCalendarItem key={`day-${itemsIndex}`} isCompact={isCompact}>
        <StyledDay
          isToday={isCurrentDate}
          isPreviousMonth={isPreviousMonth}
          isSelected={isSelected}
          isDisabled={isDisabled}
          isCompact={isCompact!}
          onClick={() => {
            if (!isDisabled) {
              dispatch({ type: 'SELECT_DATE', value: date });
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
    <StyledDatepicker
      isCompact={isCompact!}
      data-test-id="calendar-wrapper"
      onMouseDown={e => {
        /** Stop focus from escaping input */
        e.preventDefault();
      }}
    >
      <MonthSelector locale={locale} isCompact={isCompact!} />
      <StyledCalendar isCompact={isCompact!}>
        {dayLabels}
        {items}
      </StyledCalendar>
    </StyledDatepicker>
  );
};

export default Calendar;
