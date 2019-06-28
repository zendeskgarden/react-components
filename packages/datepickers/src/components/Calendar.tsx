/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Locale } from 'date-fns';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import addDays from 'date-fns/addDays';
import isToday from 'date-fns/isToday';
import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';
import isSameMonth from 'date-fns/isSameMonth';
import isBefore from 'date-fns/isBefore';
import isAfter from 'date-fns/isAfter';
import subDays from 'date-fns/subDays';
import {
  StyledDatepicker,
  StyledCalendar,
  StyledCalendarItem,
  StyledDayLabel,
  StyledDay
} from '../styled';
import useDatepickerContext from '../utils/useDatepickerContext';
import MonthSelector from './MonthSelector';

interface ICalendarProps {
  value?: Date;
  minValue?: Date;
  maxValue?: Date;
  small?: boolean;
  locale?: Locale;
}

const Calendar: React.FunctionComponent<ICalendarProps> = ({
  value,
  minValue,
  maxValue,
  small,
  locale
}) => {
  const { state, dispatch } = useDatepickerContext();

  const monthStartDate = startOfMonth(state.previewDate);
  const monthEndDate = endOfMonth(monthStartDate);
  const startDate = startOfWeek(monthStartDate, { locale });
  const endDate = endOfWeek(monthEndDate, { locale });

  const dayLabels = eachDayOfInterval({ start: startDate, end: addDays(startDate, 6) }).map(
    date => {
      const formattedDayLabel = format(date, 'E', { locale });

      return (
        <StyledCalendarItem key={`day-label-${formattedDayLabel}`} isSmall={small}>
          <StyledDayLabel isSmall={small!}>{formattedDayLabel}</StyledDayLabel>
        </StyledCalendarItem>
      );
    }
  );

  const items = eachDayOfInterval({ start: startDate, end: endDate }).map((date, itemsIndex) => {
    const formattedDayLabel = format(date, 'd', { locale });
    const isCurrentDate = isToday(date);
    const isPreviousMonth = !isSameMonth(date, state.previewDate);
    const isSelected = value && isSameDay(date, value);

    let isDisabled = false;

    if (minValue !== undefined) {
      isDisabled = isBefore(date, subDays(minValue, 1));
    }

    if (maxValue !== undefined) {
      isDisabled = isDisabled || isAfter(date, maxValue);
    }

    return (
      <StyledCalendarItem key={`day-${itemsIndex}`} isSmall={small}>
        <StyledDay
          isToday={isCurrentDate}
          isPreviousMonth={isPreviousMonth}
          isSelected={isSelected}
          isDisabled={isDisabled}
          small={small!}
          onClick={() => {
            if (!isDisabled) {
              dispatch({ type: 'select_date', value: date });
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
      isSmall={small!}
      data-test-id="calendar-wrapper"
      onMouseDown={e => {
        /** Stop focus from escaping input */
        e.preventDefault();
      }}
    >
      <MonthSelector locale={locale} small={small!} />
      <StyledCalendar isSmall={small!}>
        {dayLabels}
        {items}
      </StyledCalendar>
    </StyledDatepicker>
  );
};

export default Calendar;
