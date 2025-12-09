/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useCallback } from 'react';
import { startOfMonth } from 'date-fns/startOfMonth';
import { endOfMonth } from 'date-fns/endOfMonth';
import { startOfWeek } from 'date-fns/startOfWeek';
import { endOfWeek } from 'date-fns/endOfWeek';
import { eachDayOfInterval } from 'date-fns/eachDayOfInterval';
import { addDays } from 'date-fns/addDays';
import { isToday } from 'date-fns/isToday';
import { isSameDay } from 'date-fns/isSameDay';
import { isSameMonth } from 'date-fns/isSameMonth';
import { isBefore } from 'date-fns/isBefore';
import { isAfter } from 'date-fns/isAfter';
import { getDate } from 'date-fns/getDate';
import '../../../styled/StyledMenu.js';
import '../../../styled/StyledMenuWrapper.js';
import { StyledDatePicker } from '../../../styled/StyledDatePicker.js';
import '../../../styled/StyledRangeCalendar.js';
import '../../../styled/StyledHeader.js';
import '../../../styled/StyledHeaderPaddle.js';
import '../../../styled/StyledHeaderLabel.js';
import { StyledCalendar } from '../../../styled/StyledCalendar.js';
import { StyledCalendarItem } from '../../../styled/StyledCalendarItem.js';
import { StyledDayLabel } from '../../../styled/StyledDayLabel.js';
import '../../../styled/StyledHighlight.js';
import { StyledDay } from '../../../styled/StyledDay.js';
import useDatePickerContext from '../utils/useDatePickerContext.js';
import { getStartOfWeek } from '../../../utils/calendar-utils.js';
import { MonthSelector } from './MonthSelector.js';

const Calendar = forwardRef((_ref, ref) => {
  let {
    value,
    minValue,
    maxValue,
    isCompact,
    locale,
    weekStartsOn
  } = _ref;
  const {
    state,
    dispatch
  } = useDatePickerContext();
  const preferredWeekStartsOn = weekStartsOn || getStartOfWeek(locale);
  const monthStartDate = startOfMonth(state.previewDate);
  const monthEndDate = endOfMonth(monthStartDate);
  const startDate = startOfWeek(monthStartDate, {
    weekStartsOn: preferredWeekStartsOn
  });
  const endDate = endOfWeek(monthEndDate, {
    weekStartsOn: preferredWeekStartsOn
  });
  const dayLabelFormatter = useCallback(date => {
    const formatter = new Intl.DateTimeFormat(locale, {
      weekday: 'short'
    });
    return formatter.format(date);
  }, [locale]);
  const dayLabels = eachDayOfInterval({
    start: startDate,
    end: addDays(startDate, 6)
  }).map(date => {
    const formattedDayLabel = dayLabelFormatter(date);
    return React__default.createElement(StyledCalendarItem, {
      key: `day-label-${formattedDayLabel}`,
      $isCompact: isCompact
    }, React__default.createElement(StyledDayLabel, {
      $isCompact: isCompact
    }, formattedDayLabel));
  });
  const items = eachDayOfInterval({
    start: startDate,
    end: endDate
  }).map(date => {
    const formattedDayLabel = getDate(date);
    const isCurrentDate = isToday(date);
    const isPreviousMonth = !isSameMonth(date, state.previewDate);
    const isSelected = value && isSameDay(date, value);
    let isDisabled = false;
    if (minValue !== undefined) {
      isDisabled = isBefore(date, minValue) && !isSameDay(date, minValue);
    }
    if (maxValue !== undefined) {
      isDisabled = isDisabled || isAfter(date, maxValue) && !isSameDay(date, maxValue);
    }
    return React__default.createElement(StyledCalendarItem, {
      key: date.toISOString(),
      $isCompact: isCompact
    }, React__default.createElement(StyledDay, {
      $isToday: isCurrentDate,
      $isPreviousMonth: isPreviousMonth,
      $isCompact: isCompact,
      "aria-selected": isSelected || undefined,
      "aria-disabled": isDisabled || undefined,
      onClick: () => {
        if (!isDisabled) {
          dispatch({
            type: 'SELECT_DATE',
            value: date
          });
        }
      }
    }, formattedDayLabel));
  });
  return React__default.createElement(StyledDatePicker, {
    ref: ref,
    $isCompact: isCompact,
    onMouseDown: e => {
      e.preventDefault();
    }
  }, React__default.createElement(MonthSelector, {
    locale: locale,
    isCompact: isCompact
  }), React__default.createElement(StyledCalendar, {
    $isCompact: isCompact
  }, dayLabels, items));
});
Calendar.displayName = 'Calendar';

export { Calendar };
