/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes, useCallback } from 'react';
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
import subDays from 'date-fns/subDays';
import compareAsc from 'date-fns/compareAsc';
import ChevronLeftStrokeIcon from '@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg';
import ChevronRightStrokeIcon from '@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg';
import {
  StyledDatepicker,
  StyledCalendar,
  StyledCalendarItem,
  StyledDayLabel,
  StyledDay,
  StyledHeaderPaddle,
  StyledHeader,
  StyledHeaderLabel,
  StyledHighlight
} from '../../../styled';
import { getStartOfWeek } from '../../../utils/calendar-utils';
import useDatepickerRangeContext from '../utils/useDatepickerRangeContext';

interface IMonthProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  displayDate: Date;
  isPreviousHidden?: boolean;
  isNextHidden?: boolean;
}

export const Month = forwardRef<HTMLDivElement, IMonthProps>(
  ({ displayDate, isPreviousHidden, isNextHidden }, ref) => {
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
    } = useDatepickerRangeContext();

    const headerLabelFormatter = useCallback(
      date => {
        const formatter = new Intl.DateTimeFormat(locale, {
          month: 'long',
          year: 'numeric'
        });

        return formatter.format(date);
      },
      [locale]
    );

    const dayLabelFormatter = useCallback(
      date => {
        const formatter = new Intl.DateTimeFormat(locale, {
          weekday: 'short'
        });

        return formatter.format(date);
      },
      [locale]
    );

    const dayFormatter = useCallback(
      date => {
        const formatter = new Intl.DateTimeFormat(locale, {
          day: 'numeric'
        });

        return formatter.format(date);
      },
      [locale]
    );

    const preferredWeekStartsOn = weekStartsOn || getStartOfWeek(locale);
    const monthStartDate = startOfMonth(displayDate);
    const monthEndDate = endOfMonth(monthStartDate);
    const startDate = startOfWeek(monthStartDate, {
      weekStartsOn: preferredWeekStartsOn
    });
    const endDate = endOfWeek(monthEndDate, {
      weekStartsOn: preferredWeekStartsOn
    });

    const dayLabels = eachDayOfInterval({ start: startDate, end: addDays(startDate, 6) }).map(
      date => {
        const formattedDayLabel = dayLabelFormatter(date);

        return (
          <StyledCalendarItem key={`day-label-${formattedDayLabel}`} isCompact={isCompact}>
            <StyledDayLabel isCompact={isCompact!} data-test-id="day-label">
              {formattedDayLabel}
            </StyledDayLabel>
          </StyledCalendarItem>
        );
      }
    );

    const items = eachDayOfInterval({ start: startDate, end: endDate }).map((date, itemsIndex) => {
      const formattedDayLabel = dayFormatter(date);
      const isCurrentDate = isToday(date);
      const isPreviousMonth = !isSameMonth(date, displayDate);

      if (isPreviousMonth) {
        return (
          <StyledCalendarItem key={`day-${itemsIndex}`} isCompact={isCompact}>
            <StyledDay
              isCompact={isCompact!}
              isPreviousMonth
              isDisabled
              data-test-id="day"
              data-test-hidden="true"
            >
              &nbsp;
            </StyledDay>
          </StyledCalendarItem>
        );
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
        isDisabled = isDisabled || (isAfter(date, maxValue) && !isSameDay(date, maxValue));
      }

      let isHighlighted = false;

      if (startValue !== undefined && endValue !== undefined) {
        isHighlighted =
          (isAfter(date, startValue) || isSameDay(date, startValue)) &&
          (isBefore(date, endValue) || isSameDay(date, endValue)) &&
          !isSameDay(startValue, endValue);
      } else if (startValue !== undefined && state.hoverDate !== undefined) {
        isHighlighted =
          (isAfter(date, startValue) || isSameDay(date, startValue)) &&
          (isBefore(date, state.hoverDate) || isSameDay(date, state.hoverDate));
      }

      const isHighlightStart =
        (isHighlighted && startValue && isSameDay(date, startValue)) || false;

      const isHighlightEnd =
        (isHighlighted && endValue && isSameDay(date, endValue)) ||
        (state.hoverDate && isSameDay(date, state.hoverDate) && !isBefore(date, endValue!)) ||
        false;

      let isInvalidDateRange =
        (endValue && startValue && compareAsc(endValue, startValue) === -1) || false;

      if (minValue) {
        if (startValue) {
          isInvalidDateRange =
            isInvalidDateRange || compareAsc(startValue, subDays(minValue, 1)) === -1;
        }

        if (endValue) {
          isInvalidDateRange =
            isInvalidDateRange || compareAsc(endValue, subDays(minValue, 1)) === -1;
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

      return (
        <StyledCalendarItem key={`day-${itemsIndex}`} isCompact={isCompact}>
          <StyledHighlight
            isHighlighted={!isInvalidDateRange && isHighlighted && !isDisabled}
            isStart={!isInvalidDateRange && isHighlightStart}
            isEnd={!isInvalidDateRange && isHighlightEnd}
            data-test-id="highlight"
            data-test-highlighted={!isInvalidDateRange && isHighlighted && !isDisabled}
            data-test-start={!isInvalidDateRange && isHighlightStart}
            data-test-end={!isInvalidDateRange && isHighlightEnd}
          />
          <StyledDay
            isToday={isCurrentDate}
            isPreviousMonth={isPreviousMonth}
            isSelected={!isInvalidDateRange && isSelected}
            isDisabled={isDisabled}
            isCompact={isCompact!}
            onClick={() => {
              if (!isDisabled) {
                dispatch({ type: 'CLICK_DATE', value: date });
                if (onChange) {
                  if (state.isStartFocused) {
                    if (
                      endValue !== undefined &&
                      (isBefore(date, endValue) || isSameDay(date, endValue))
                    ) {
                      onChange({ startValue: date, endValue });
                    } else {
                      onChange({ startValue: date, endValue: undefined });
                    }
                  } else if (state.isEndFocused) {
                    if (
                      startValue !== undefined &&
                      (isAfter(date, startValue) || isSameDay(date, startValue))
                    ) {
                      onChange({ startValue, endValue: date });
                    } else {
                      onChange({ startValue: date, endValue: undefined });
                    }
                  } else if (startValue === undefined) {
                    onChange({ startValue: date, endValue: undefined });
                  } else if (endValue === undefined) {
                    if (isBefore(date, startValue)) {
                      onChange({ startValue: date, endValue: undefined });
                    } else {
                      onChange({ startValue, endValue: date });
                    }
                  } else {
                    onChange({ startValue: date, endValue: undefined });
                  }
                }
              }
            }}
            onMouseEnter={() => {
              if (!isSelected) {
                dispatch({ type: 'HOVER_DATE', value: date });
              }
            }}
            data-test-id="day"
            data-test-previous={isPreviousMonth}
            data-test-selected={!isInvalidDateRange && isSelected}
            data-test-disabled={isDisabled}
            data-test-today={isCurrentDate}
            data-test-hidden="false"
          >
            {formattedDayLabel}
          </StyledDay>
        </StyledCalendarItem>
      );
    });

    return (
      <StyledDatepicker
        ref={ref}
        isCompact={isCompact!}
        data-test-id="calendar-wrapper"
        onMouseDown={e => {
          /** Stop focus from escaping input */
          /* istanbul ignore next */
          e.preventDefault();
        }}
      >
        <StyledHeader isCompact={isCompact!}>
          <StyledHeaderPaddle
            isCompact={isCompact!}
            onClick={() => {
              dispatch({
                type: 'PREVIEW_PREVIOUS_MONTH'
              });
            }}
            isHidden={isPreviousHidden}
            data-test-id="previous-month"
          >
            <ChevronLeftStrokeIcon />
          </StyledHeaderPaddle>
          <StyledHeaderLabel isCompact={isCompact!} data-test-id="month-display">
            {headerLabelFormatter(displayDate)}
          </StyledHeaderLabel>
          <StyledHeaderPaddle
            isCompact={isCompact!}
            isHidden={isNextHidden}
            onClick={() => {
              dispatch({
                type: 'PREVIEW_NEXT_MONTH'
              });
            }}
            data-test-id="next-month"
          >
            <ChevronRightStrokeIcon />
          </StyledHeaderPaddle>
        </StyledHeader>
        <StyledCalendar
          isCompact={isCompact!}
          data-test-id="calendar-internal-wrapper"
          onMouseLeave={() => {
            dispatch({ type: 'HOVER_DATE', value: undefined });
          }}
        >
          {dayLabels}
          {items}
        </StyledCalendar>
      </StyledDatepicker>
    );
  }
);

Month.displayName = 'Month';
