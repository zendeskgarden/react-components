/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes, MutableRefObject, useCallback } from 'react';
import { useText } from '@zendeskgarden/react-theming';
import { Span } from '@zendeskgarden/react-typography';
import { startOfMonth } from 'date-fns/startOfMonth';
import { endOfMonth } from 'date-fns/endOfMonth';
import { startOfWeek } from 'date-fns/startOfWeek';
import { endOfWeek } from 'date-fns/endOfWeek';
import { eachDayOfInterval } from 'date-fns/eachDayOfInterval';
import { addDays } from 'date-fns/addDays';
import { addMonths } from 'date-fns/addMonths';
import { subMonths } from 'date-fns/subMonths';
import { addYears } from 'date-fns/addYears';
import { subYears } from 'date-fns/subYears';
import { isToday } from 'date-fns/isToday';
import { isSameDay } from 'date-fns/isSameDay';
import { isSameMonth } from 'date-fns/isSameMonth';
import { isBefore } from 'date-fns/isBefore';
import { isAfter } from 'date-fns/isAfter';
import { subDays } from 'date-fns/subDays';
import { compareAsc } from 'date-fns/compareAsc';
import { KEYS } from '@zendeskgarden/container-utilities';
import ChevronLeftStrokeIcon from '@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg';
import ChevronRightStrokeIcon from '@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg';
import {
  StyledDatePicker,
  StyledCalendar,
  StyledCalendarRow,
  StyledDayLabel,
  StyledDayButton,
  StyledRangeDayCell,
  StyledHeaderPaddle,
  StyledHeader,
  StyledHeaderLabel
} from '../../../styled';
import { getStartOfWeek } from '../../../utils/calendar-utils';
import { useDatePicker } from '../../../utils/useDatePicker';
import useDatePickerContext from '../utils/useDatePickerRangeContext';

interface IMonthProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  displayDate: Date;
  isPreviousHidden?: boolean;
  isNextHidden?: boolean;
  previousMonthLabel?: string;
  nextMonthLabel?: string;
  pendingGridFocusRef: MutableRefObject<boolean>;
}

export const Month = forwardRef<HTMLDivElement, IMonthProps>(
  (
    {
      displayDate,
      isPreviousHidden,
      isNextHidden,
      previousMonthLabel,
      nextMonthLabel,
      pendingGridFocusRef
    },
    ref
  ) => {
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

    const { headingId } = useDatePicker({ isOpen: false });

    const previousMonthAriaLabel = useText(
      Month,
      { previousMonthLabel },
      'previousMonthLabel',
      'Previous month'
    );
    const nextMonthAriaLabel = useText(Month, { nextMonthLabel }, 'nextMonthLabel', 'Next month');

    const headerLabelFormatter = useCallback<(date: Date) => string>(
      date => {
        const formatter = new Intl.DateTimeFormat(locale, {
          month: 'long',
          year: 'numeric'
        });

        return formatter.format(date);
      },
      [locale]
    );

    const dayLabelFormatter = useCallback<(date: Date) => string>(
      date => {
        const formatter = new Intl.DateTimeFormat(locale, {
          weekday: 'short'
        });

        return formatter.format(date);
      },
      [locale]
    );

    const dayFormatter = useCallback<(date: Date) => string>(
      date => {
        const formatter = new Intl.DateTimeFormat(locale, {
          day: 'numeric'
        });

        return formatter.format(date);
      },
      [locale]
    );

    const preferredWeekStartsOn = weekStartsOn || getStartOfWeek(locale);

    const handleDayKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLButtonElement>, date: Date) => {
        let targetDate: Date;

        switch (event.key) {
          case KEYS.RIGHT:
            targetDate = addDays(date, 1);
            break;
          case KEYS.LEFT:
            targetDate = subDays(date, 1);
            break;
          case KEYS.DOWN:
            targetDate = addDays(date, 7);
            break;
          case KEYS.UP:
            targetDate = subDays(date, 7);
            break;
          case KEYS.HOME:
            targetDate = startOfWeek(date, { weekStartsOn: preferredWeekStartsOn });
            break;
          case KEYS.END:
            targetDate = endOfWeek(date, { weekStartsOn: preferredWeekStartsOn });
            break;
          case KEYS.PAGE_DOWN:
            targetDate = event.shiftKey ? addYears(date, 1) : addMonths(date, 1);
            break;
          case KEYS.PAGE_UP:
            targetDate = event.shiftKey ? subYears(date, 1) : subMonths(date, 1);
            break;
          default:
            return;
        }

        event.preventDefault();
        pendingGridFocusRef.current = true;
        dispatch({ type: 'FOCUS_DATE', value: targetDate });
      },
      [dispatch, pendingGridFocusRef, preferredWeekStartsOn]
    );

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
          <th key={`day-label-${formattedDayLabel}`} scope="col">
            <StyledDayLabel $isCompact={isCompact!} data-test-id="day-label">
              {formattedDayLabel}
            </StyledDayLabel>
          </th>
        );
      }
    );

    const days = eachDayOfInterval({ start: startDate, end: endDate }).map(date => {
      const formattedDayLabel = dayFormatter(date);
      const isCurrentDate = isToday(date);
      const isPreviousMonth = !isSameMonth(date, displayDate);

      if (isPreviousMonth) {
        return (
          <td key={date.toISOString()} role="gridcell">
            <Span hidden data-test-id="day" data-test-hidden="true">
              {formattedDayLabel}, {headerLabelFormatter(date)}
            </Span>
          </td>
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
        // eslint-disable-next-line jsx-a11y/prefer-tag-over-role -- StyledRangeDayCell already renders a <td>; eslint can't see through the styled-component wrapper
        <StyledRangeDayCell
          key={date.toISOString()}
          role="gridcell"
          $isHighlighted={!isInvalidDateRange && !!isHighlighted && !isDisabled}
          $isHighlightStart={!isInvalidDateRange && isHighlightStart}
          $isHighlightEnd={!isInvalidDateRange && isHighlightEnd}
          data-test-id="day-cell"
          data-test-highlighted={!isInvalidDateRange && !!isHighlighted && !isDisabled}
          data-test-start={!isInvalidDateRange && isHighlightStart}
          data-test-end={!isInvalidDateRange && isHighlightEnd}
        >
          <StyledDayButton
            $isCompact={isCompact!}
            $isPreviousMonth={isPreviousMonth}
            isPill
            isBasic={!isSelected}
            isNeutral={!isSelected}
            isPressed={!!(!isInvalidDateRange && isSelected)}
            isPrimary={!!(!isInvalidDateRange && isSelected)}
            aria-current={isCurrentDate ? 'date' : undefined}
            aria-disabled={isDisabled || undefined}
            tabIndex={isSameDay(date, state.focusedDate) ? 0 : -1}
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
            onKeyDown={event => handleDayKeyDown(event, date)}
            data-test-id="day"
            data-test-previous={isPreviousMonth}
            data-test-selected={!isInvalidDateRange && isSelected}
            data-test-disabled={isDisabled}
            data-test-today={isCurrentDate}
            data-test-hidden="false"
          >
            {formattedDayLabel}
          </StyledDayButton>
        </StyledRangeDayCell>
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
          /* istanbul ignore next */
          e.preventDefault();
        }}
      >
        <StyledHeader $isCompact={isCompact!}>
          {!isPreviousHidden && (
            <StyledHeaderPaddle
              type="button"
              isPill
              isBasic
              isNeutral
              lang={previousMonthLabel === undefined ? 'en' : undefined}
              aria-label={previousMonthAriaLabel}
              onClick={() => {
                dispatch({
                  type: 'PREVIEW_PREVIOUS_MONTH'
                });
              }}
              data-test-id="previous-month"
            >
              <ChevronLeftStrokeIcon />
            </StyledHeaderPaddle>
          )}
          <StyledHeaderLabel id={headingId} $isCompact={isCompact!} data-test-id="month-display">
            {headerLabelFormatter(displayDate)}
          </StyledHeaderLabel>
          {!isNextHidden && (
            <StyledHeaderPaddle
              type="button"
              isPill
              isBasic
              isNeutral
              lang={nextMonthLabel === undefined ? 'en' : undefined}
              aria-label={nextMonthAriaLabel}
              onClick={() => {
                dispatch({
                  type: 'PREVIEW_NEXT_MONTH'
                });
              }}
              data-test-id="next-month"
            >
              <ChevronRightStrokeIcon />
            </StyledHeaderPaddle>
          )}
        </StyledHeader>
        <StyledCalendar
          as="table"
          $isCompact={isCompact!}
          role="grid"
          aria-labelledby={headingId}
          data-test-id="calendar-internal-wrapper"
          onMouseLeave={() => {
            dispatch({ type: 'HOVER_DATE', value: undefined });
          }}
        >
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

Month.displayName = 'Month';
