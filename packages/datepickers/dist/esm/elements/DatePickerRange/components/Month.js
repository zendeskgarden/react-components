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
import { subDays } from 'date-fns/subDays';
import { compareAsc } from 'date-fns/compareAsc';
import SvgChevronLeftStroke from '../../../node_modules/@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg.js';
import SvgChevronRightStroke from '../../../node_modules/@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg.js';
import '../../../styled/StyledMenu.js';
import '../../../styled/StyledMenuWrapper.js';
import { StyledDatePicker } from '../../../styled/StyledDatePicker.js';
import '../../../styled/StyledRangeCalendar.js';
import { StyledHeader } from '../../../styled/StyledHeader.js';
import { StyledHeaderPaddle } from '../../../styled/StyledHeaderPaddle.js';
import { StyledHeaderLabel } from '../../../styled/StyledHeaderLabel.js';
import { StyledCalendar } from '../../../styled/StyledCalendar.js';
import { StyledCalendarItem } from '../../../styled/StyledCalendarItem.js';
import { StyledDayLabel } from '../../../styled/StyledDayLabel.js';
import { StyledHighlight } from '../../../styled/StyledHighlight.js';
import { StyledDay } from '../../../styled/StyledDay.js';
import { getStartOfWeek } from '../../../utils/calendar-utils.js';
import useDatePickerContext from '../utils/useDatePickerRangeContext.js';

const Month = forwardRef(({
  displayDate,
  isPreviousHidden,
  isNextHidden
}, ref) => {
  const {
    state,
    dispatch,
    locale,
    weekStartsOn,
    isCompact,
    minValue,
    maxValue,
    startValue,
    endValue,
    onChange
  } = useDatePickerContext();
  const headerLabelFormatter = useCallback(date => {
    const formatter = new Intl.DateTimeFormat(locale, {
      month: 'long',
      year: 'numeric'
    });
    return formatter.format(date);
  }, [locale]);
  const dayLabelFormatter = useCallback(date => {
    const formatter = new Intl.DateTimeFormat(locale, {
      weekday: 'short'
    });
    return formatter.format(date);
  }, [locale]);
  const dayFormatter = useCallback(date => {
    const formatter = new Intl.DateTimeFormat(locale, {
      day: 'numeric'
    });
    return formatter.format(date);
  }, [locale]);
  const preferredWeekStartsOn = weekStartsOn || getStartOfWeek(locale);
  const monthStartDate = startOfMonth(displayDate);
  const monthEndDate = endOfMonth(monthStartDate);
  const startDate = startOfWeek(monthStartDate, {
    weekStartsOn: preferredWeekStartsOn
  });
  const endDate = endOfWeek(monthEndDate, {
    weekStartsOn: preferredWeekStartsOn
  });
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
    const formattedDayLabel = dayFormatter(date);
    const isCurrentDate = isToday(date);
    const isPreviousMonth = !isSameMonth(date, displayDate);
    if (isPreviousMonth) {
      return React__default.createElement(StyledCalendarItem, {
        key: date.toISOString(),
        $isCompact: isCompact
      }, React__default.createElement(StyledDay, {
        $isCompact: isCompact,
        $isPreviousMonth: true,
        "aria-disabled": true
      }, "\xA0"));
    }
    let isSelected = false;
    if (startValue !== undefined) {
      isSelected = isSameDay(date, startValue);
    }
    if (endValue !== undefined) {
      isSelected = isSelected || isSameDay(date, endValue);
    }
    let isDisabled = false;
    if (minValue !== undefined) {
      isDisabled = isBefore(date, minValue) && !isSameDay(date, minValue);
    }
    if (maxValue !== undefined) {
      isDisabled = isDisabled || isAfter(date, maxValue) && !isSameDay(date, maxValue);
    }
    let isHighlighted = false;
    if (startValue !== undefined && endValue !== undefined) {
      isHighlighted = (isAfter(date, startValue) || isSameDay(date, startValue)) && (isBefore(date, endValue) || isSameDay(date, endValue)) && !isSameDay(startValue, endValue);
    } else if (startValue !== undefined && state.hoverDate !== undefined) {
      isHighlighted = (isAfter(date, startValue) || isSameDay(date, startValue)) && (isBefore(date, state.hoverDate) || isSameDay(date, state.hoverDate));
    }
    const isHighlightStart = isHighlighted && startValue && isSameDay(date, startValue) || false;
    const isHighlightEnd = isHighlighted && endValue && isSameDay(date, endValue) || state.hoverDate && isSameDay(date, state.hoverDate) && !isBefore(date, endValue) || false;
    let isInvalidDateRange = endValue && startValue && compareAsc(endValue, startValue) === -1 || false;
    if (minValue) {
      if (startValue) {
        isInvalidDateRange = isInvalidDateRange || compareAsc(startValue, subDays(minValue, 1)) === -1;
      }
      if (endValue) {
        isInvalidDateRange = isInvalidDateRange || compareAsc(endValue, subDays(minValue, 1)) === -1;
      }
    }
    if (maxValue) {
      if (startValue) {
        isInvalidDateRange = isInvalidDateRange || compareAsc(startValue, maxValue) === 1;
      }
      if (endValue) {
        isInvalidDateRange = isInvalidDateRange || compareAsc(endValue, maxValue) === 1;
      }
    }
    return React__default.createElement(StyledCalendarItem, {
      key: date.toISOString(),
      $isCompact: isCompact
    }, React__default.createElement(StyledHighlight, {
      $isHighlighted: !isInvalidDateRange && !!isHighlighted && !isDisabled,
      $isStart: !isInvalidDateRange && isHighlightStart,
      $isEnd: !isInvalidDateRange && isHighlightEnd
    }), React__default.createElement(StyledDay, {
      $isToday: isCurrentDate,
      $isPreviousMonth: isPreviousMonth,
      "aria-selected": !isInvalidDateRange && isSelected || undefined,
      "aria-disabled": isDisabled || undefined,
      $isCompact: isCompact,
      onClick: () => {
        if (!isDisabled) {
          dispatch({
            type: 'CLICK_DATE',
            value: date
          });
          if (onChange) {
            if (state.isStartFocused) {
              if (endValue !== undefined && (isBefore(date, endValue) || isSameDay(date, endValue))) {
                onChange({
                  startValue: date,
                  endValue
                });
              } else {
                onChange({
                  startValue: date,
                  endValue: undefined
                });
              }
            } else if (state.isEndFocused) {
              if (startValue !== undefined && (isAfter(date, startValue) || isSameDay(date, startValue))) {
                onChange({
                  startValue,
                  endValue: date
                });
              } else {
                onChange({
                  startValue: date,
                  endValue: undefined
                });
              }
            } else if (startValue === undefined) {
              onChange({
                startValue: date,
                endValue: undefined
              });
            } else if (endValue === undefined) {
              if (isBefore(date, startValue)) {
                onChange({
                  startValue: date,
                  endValue: undefined
                });
              } else {
                onChange({
                  startValue,
                  endValue: date
                });
              }
            } else {
              onChange({
                startValue: date,
                endValue: undefined
              });
            }
          }
        }
      },
      onMouseEnter: () => {
        if (!isSelected) {
          dispatch({
            type: 'HOVER_DATE',
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
  }, React__default.createElement(StyledHeader, {
    $isCompact: isCompact
  }, React__default.createElement(StyledHeaderPaddle, {
    $isCompact: isCompact,
    onClick: () => {
      dispatch({
        type: 'PREVIEW_PREVIOUS_MONTH'
      });
    },
    "aria-hidden": isPreviousHidden || undefined
  }, React__default.createElement(SvgChevronLeftStroke, null)), React__default.createElement(StyledHeaderLabel, {
    $isCompact: isCompact
  }, headerLabelFormatter(displayDate)), React__default.createElement(StyledHeaderPaddle, {
    $isCompact: isCompact,
    "aria-hidden": isNextHidden || undefined,
    onClick: () => {
      dispatch({
        type: 'PREVIEW_NEXT_MONTH'
      });
    }
  }, React__default.createElement(SvgChevronRightStroke, null))), React__default.createElement(StyledCalendar, {
    $isCompact: isCompact,
    onMouseLeave: () => {
      dispatch({
        type: 'HOVER_DATE',
        value: undefined
      });
    }
  }, dayLabels, items));
});
Month.displayName = 'Month';

export { Month };
