/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes, useCallback } from 'react';
import { Span } from '@zendeskgarden/react-typography';
import { startOfMonth } from 'date-fns/startOfMonth';
import { endOfMonth } from 'date-fns/endOfMonth';
import { startOfWeek } from 'date-fns/startOfWeek';
import { endOfWeek } from 'date-fns/endOfWeek';
import { eachDayOfInterval } from 'date-fns/eachDayOfInterval';
import { addDays } from 'date-fns/addDays';
import { isSameDay } from 'date-fns/isSameDay';
import { isSameMonth } from 'date-fns/isSameMonth';
import { isBefore } from 'date-fns/isBefore';
import { isAfter } from 'date-fns/isAfter';
import { subDays } from 'date-fns/subDays';
import { compareAsc } from 'date-fns/compareAsc';
import {
  StyledCalendarMonth,
  StyledCalendarHeading,
  StyledCalendarTable,
  StyledCalendarRow,
  StyledDayLabelHeader,
  StyledDayLabel,
  StyledDayButton,
  StyledDayCell
} from '../../../styled';
import { getStartOfWeek } from '../../../utils/calendar-utils';
import useDatePickerContext from '../utils/useDatePickerRangeContext';

interface IMonthProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  displayDate: Date;
  offset: 0 | 1;
  gridColumn: string;
}

export const Month = forwardRef<HTMLDivElement, IMonthProps>(
  ({ displayDate, offset, gridColumn }, ref) => {
    const {
      locale,
      weekStartsOn,
      isCompact,
      minValue,
      maxValue,
      startValue,
      endValue,
      hoverDate,
      setHoverDate,
      getMonthProps,
      getGridProps,
      getHeadingProps,
      getDayProps
    } = useDatePickerContext();

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
          <StyledDayLabelHeader
            key={`day-label-${formattedDayLabel}`}
            $isCompact={isCompact}
            scope="col"
          >
            <StyledDayLabel $isCompact={isCompact!} data-test-id="day-label">
              {formattedDayLabel}
            </StyledDayLabel>
          </StyledDayLabelHeader>
        );
      }
    );

    const days = eachDayOfInterval({ start: startDate, end: endDate }).map(date => {
      const formattedDayLabel = dayFormatter(date);
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
      } else if (startValue !== undefined && hoverDate !== undefined) {
        isHighlighted =
          (isAfter(date, startValue) || isSameDay(date, startValue)) &&
          (isBefore(date, hoverDate) || isSameDay(date, hoverDate));
      } else if (endValue !== undefined && hoverDate !== undefined) {
        isHighlighted =
          (isAfter(date, hoverDate) || isSameDay(date, hoverDate)) &&
          (isBefore(date, endValue) || isSameDay(date, endValue));
      }

      const isHighlightStart =
        (isHighlighted && startValue && isSameDay(date, startValue)) ||
        (isHighlighted && startValue === undefined && !!hoverDate && isSameDay(date, hoverDate)) ||
        false;

      const isHighlightEnd =
        (isHighlighted && endValue && isSameDay(date, endValue)) ||
        (hoverDate && isSameDay(date, hoverDate) && !isBefore(date, endValue!)) ||
        false;

      /**
       * A hovered (not yet committed) boundary candidate tints the half of
       * its cell that continues into the range - but if that candidate lands
       * on the first or last day of its row, that tinted half has no
       * neighboring cell in the same row to blend into, and shows up as a
       * disconnected patch of color. There's no committed pin to anchor it
       * either, so the cell is left untinted entirely rather than falling
       * back to a solid fill.
       */
      const isRowStart = isSameDay(
        date,
        startOfWeek(date, { weekStartsOn: preferredWeekStartsOn })
      );
      const isRowEnd = isSameDay(date, endOfWeek(date, { weekStartsOn: preferredWeekStartsOn }));
      const suppressHighlight =
        (isHighlightEnd && endValue === undefined && isRowStart) ||
        (isHighlightStart && startValue === undefined && isRowEnd);

      const showHighlighted = isHighlighted && !suppressHighlight && !isDisabled;
      const showHighlightStartGradient = isHighlightStart && !suppressHighlight;
      const showHighlightEndGradient = isHighlightEnd && !suppressHighlight;

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
        // eslint-disable-next-line jsx-a11y/prefer-tag-over-role -- StyledDayCell already renders a <td>; eslint can't see through the styled-component wrapper
        <StyledDayCell
          key={date.toISOString()}
          role="gridcell"
          $isHighlighted={!isInvalidDateRange && showHighlighted}
          $isHighlightStart={!isInvalidDateRange && showHighlightStartGradient}
          $isHighlightEnd={!isInvalidDateRange && showHighlightEndGradient}
          data-test-id="day-cell"
          data-test-highlighted={!isInvalidDateRange && !!isHighlighted && !isDisabled}
          data-test-start={!isInvalidDateRange && isHighlightStart}
          data-test-end={!isInvalidDateRange && isHighlightEnd}
          onMouseEnter={() => {
            /**
             * Hovering an already-selected day has no candidate to preview,
             * but must still clear any stale hoverDate left over from
             * hovering a nearby day right before this one - otherwise the
             * highlight from that day lingers indefinitely.
             */
            setHoverDate(isSelected ? undefined : date);
          }}
        >
          <StyledDayButton
            $isCompact={isCompact!}
            $isPreviousMonth={isPreviousMonth}
            isPill
            isBasic
            isNeutral={!isSelected}
            isPressed={!!(!isInvalidDateRange && isSelected)}
            {...getDayProps({ date })}
            data-test-selected={!isInvalidDateRange && isSelected}
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
      <StyledCalendarMonth
        ref={ref}
        $isCompact={isCompact!}
        $gridColumn={gridColumn}
        data-test-id="calendar-wrapper"
        {...getMonthProps()}
      >
        <StyledCalendarHeading
          $isCompact={isCompact!}
          data-test-id="month-display"
          {...getHeadingProps({ offset })}
        >
          {headerLabelFormatter(displayDate)}
        </StyledCalendarHeading>
        <StyledCalendarTable as="table" $isCompact={isCompact!} {...getGridProps({ offset })}>
          <tbody>
            <StyledCalendarRow>{dayLabels}</StyledCalendarRow>
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
