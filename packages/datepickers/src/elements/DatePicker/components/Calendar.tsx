/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes, useCallback, useEffect, useRef } from 'react';
import { startOfMonth } from 'date-fns/startOfMonth';
import { endOfMonth } from 'date-fns/endOfMonth';
import { startOfWeek } from 'date-fns/startOfWeek';
import { endOfWeek } from 'date-fns/endOfWeek';
import { eachDayOfInterval } from 'date-fns/eachDayOfInterval';
import { addDays } from 'date-fns/addDays';
import { subDays } from 'date-fns/subDays';
import { addMonths } from 'date-fns/addMonths';
import { subMonths } from 'date-fns/subMonths';
import { addYears } from 'date-fns/addYears';
import { subYears } from 'date-fns/subYears';
import { isToday } from 'date-fns/isToday';
import { isSameDay } from 'date-fns/isSameDay';
import { isSameMonth } from 'date-fns/isSameMonth';
import { getDate } from 'date-fns/getDate';
import { KEYS } from '@zendeskgarden/container-utilities';
import {
  StyledCalendarGrid,
  StyledCalendarMonth,
  StyledCalendarHeading,
  StyledCalendarTable,
  StyledCalendarRow,
  StyledDayLabelHeader,
  StyledDayLabel,
  StyledCalendarGridCell,
  StyledDayButton
} from '../../../styled';
import { Toolbar } from '../../../components/Toolbar';
import useDatePickerContext from '../utils/useDatePickerContext';
import { DateFnsIndex, getStartOfWeek, isDateWithinRange } from '../../../utils/calendar-utils';

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
  previousYearLabel?: string;
  nextYearLabel?: string;
  toolbarLabel?: string;
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
      previousYearLabel,
      nextYearLabel,
      toolbarLabel,
      headingId
    },
    ref
  ) => {
    const { state, dispatch } = useDatePickerContext();
    const tableRef = useRef<HTMLTableElement>(null);

    const preferredWeekStartsOn = weekStartsOn || getStartOfWeek(locale);

    const pendingGridFocusRef = useRef(false);

    useEffect(() => {
      /**
       * Only follow a focusedDate change with real DOM focus when it was
       * triggered by keyboard navigation from within the grid itself (flagged
       * by handleDayKeyDown below) - month/year paddle clicks also update
       * focusedDate (so the roving tabindex stays correct), but deliberately
       * leave real focus on the paddle button that was clicked.
       */
      if (!pendingGridFocusRef.current) {
        return;
      }

      pendingGridFocusRef.current = false;
      tableRef.current?.querySelector<HTMLButtonElement>('[tabindex="0"]')?.focus();
    }, [state.focusedDate]);

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
      [dispatch, preferredWeekStartsOn]
    );
    const monthStartDate = startOfMonth(state.previewDate);
    const monthEndDate = endOfMonth(monthStartDate);
    const startDate = startOfWeek(monthStartDate, {
      weekStartsOn: preferredWeekStartsOn
    });
    const endDate = endOfWeek(monthEndDate, {
      weekStartsOn: preferredWeekStartsOn
    });

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
          <StyledDayLabelHeader
            key={`day-label-${formattedDayLabel}`}
            scope="col"
            abbr={fullDayLabelFormatter(date)}
          >
            <StyledDayLabel $isCompact={isCompact!} data-test-id="day-label">
              {formattedDayLabel}
            </StyledDayLabel>
          </StyledDayLabelHeader>
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
        // eslint-disable-next-line jsx-a11y/prefer-tag-over-role -- StyledCalendarGridCell already renders a <td>; eslint can't see through the styled-component wrapper
        <StyledCalendarGridCell key={date.toISOString()} role="gridcell">
          <StyledDayButton
            $isCompact={isCompact!}
            $isPreviousMonth={isPreviousMonth}
            isPressed={!!(isSelected && !isDisabled)}
            isPill
            isBasic={!isSelected}
            isNeutral={!isSelected}
            isPrimary={!!(isSelected && !isDisabled)}
            aria-disabled={isDisabled || undefined}
            aria-current={isCurrentDate ? 'date' : undefined}
            tabIndex={isSameDay(date, state.focusedDate) ? 0 : -1}
            onClick={() => {
              if (!isDisabled) {
                if (onChange && !isSameDay(value!, date)) {
                  onChange(date);
                }

                dispatch({ type: 'SELECT_DATE', value: date });
                inputRef?.current?.focus();
              }
            }}
            onKeyDown={event => handleDayKeyDown(event, date)}
            data-test-id="day"
            data-test-previous={isPreviousMonth}
            data-test-selected={isSelected}
            data-test-disabled={isDisabled}
            data-test-today={isCurrentDate}
          >
            {formattedDayLabel}
          </StyledDayButton>
        </StyledCalendarGridCell>
      );
    });

    const weeks = Array.from({ length: Math.ceil(days.length / 7) }, (_, weekIndex) => ({
      key: addDays(startDate, weekIndex * 7).toISOString(),
      days: days.slice(weekIndex * 7, weekIndex * 7 + 7)
    }));

    return (
      <StyledCalendarGrid
        ref={ref}
        data-test-id="calendar-wrapper"
        onMouseDown={(e: React.MouseEvent) => {
          /** Stop focus from escaping input */
          e.preventDefault();
        }}
      >
        <Toolbar
          isCompact={isCompact}
          isGrid
          previousMonthLabel={previousMonthLabel}
          nextMonthLabel={nextMonthLabel}
          previousYearLabel={previousYearLabel}
          nextYearLabel={nextYearLabel}
          toolbarLabel={toolbarLabel}
          onPreviousYear={() => {
            dispatch({ type: 'FOCUS_DATE', value: subYears(state.focusedDate, 1) });
          }}
          onPreviousMonth={() => {
            dispatch({ type: 'FOCUS_DATE', value: subMonths(state.focusedDate, 1) });
          }}
          onNextMonth={() => {
            dispatch({ type: 'FOCUS_DATE', value: addMonths(state.focusedDate, 1) });
          }}
          onNextYear={() => {
            dispatch({ type: 'FOCUS_DATE', value: addYears(state.focusedDate, 1) });
          }}
        />
        <StyledCalendarMonth $isCompact={isCompact!}>
          <StyledCalendarHeading
            id={headingId}
            aria-live="polite"
            $isCompact={isCompact!}
            data-test-id="month-display"
          >
            {headerLabelFormatter(state.previewDate)}
          </StyledCalendarHeading>
          <StyledCalendarTable
            as="table"
            ref={tableRef}
            $isCompact={isCompact!}
            role="grid"
            aria-labelledby={headingId}
          >
            <tbody>
              <StyledCalendarRow>{dayLabels}</StyledCalendarRow>
              {weeks.map(week => (
                <StyledCalendarRow key={week.key}>{week.days}</StyledCalendarRow>
              ))}
            </tbody>
          </StyledCalendarTable>
        </StyledCalendarMonth>
      </StyledCalendarGrid>
    );
  }
);

Calendar.displayName = 'Calendar';
