/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useCallback } from 'react';
import { Span } from '@zendeskgarden/react-typography';
import { useText } from '@zendeskgarden/react-theming';
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
  StyledDayButton,
  StyledDayCell
} from '../../../styled';
import { WeekdayHeaderRow } from '../../../components/WeekdayHeaderRow';
import {
  formatFullDate,
  formatMonthHeading,
  getMonthDateRange,
  getStartOfWeek,
  isDateWithinRange
} from '../../../utils/calendar-utils';
import useDatePickerContext from '../utils/useDatePickerRangeContext';
import { IDatePickerRangeMonthProps } from '../../../types';

export const Month = forwardRef<HTMLDivElement, IDatePickerRangeMonthProps>(
  ({ displayDate, offset, gridColumn }, ref) => {
    const {
      locale,
      weekStartsOn,
      isCompact,
      minValue,
      maxValue,
      startValue,
      endValue,
      isStartValueInvalid,
      isEndValueInvalid,
      hoverDate,
      setHoverDate,
      getGridProps,
      getHeadingProps,
      getDayProps,
      inRangeLabel,
      startOfRangeLabel,
      endOfRangeLabel,
      getInRangeDescriptionProps
    } = useDatePickerContext();

    // A rejected blur leaves startValue/endValue pointing at the stale, last-committed date -
    // suppress its calendar selection until a new value actually commits.
    const effectiveStartValue = isStartValueInvalid ? undefined : startValue;
    const effectiveEndValue = isEndValueInvalid ? undefined : endValue;

    const inRangeText = useText(Month, { inRangeLabel }, 'inRangeLabel', '(included in range)');
    const startOfRangeText = useText(
      Month,
      { startOfRangeLabel },
      'startOfRangeLabel',
      '(start of range)'
    );
    const endOfRangeText = useText(Month, { endOfRangeLabel }, 'endOfRangeLabel', '(end of range)');

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
    const { startDate, endDate } = getMonthDateRange(displayDate, weekStartsOn, locale);

    const days = eachDayOfInterval({ start: startDate, end: endDate }).map(date => {
      const formattedDayLabel = dayFormatter(date);
      const isPreviousMonth = !isSameMonth(date, displayDate);

      if (isPreviousMonth) {
        return (
          <td key={date.toISOString()} role="gridcell">
            <Span hidden data-test-id="day" data-test-hidden="true">
              {formattedDayLabel}, {formatMonthHeading(date, locale)}
            </Span>
          </td>
        );
      }

      let isSelected = false;

      if (effectiveStartValue !== undefined) {
        isSelected = isSameDay(date, effectiveStartValue);
      }

      if (effectiveEndValue !== undefined) {
        isSelected = isSelected || isSameDay(date, effectiveEndValue);
      }

      const isDisabled = !isDateWithinRange(date, minValue, maxValue);

      let isHighlighted = false;

      if (effectiveStartValue !== undefined && effectiveEndValue !== undefined) {
        isHighlighted =
          (isAfter(date, effectiveStartValue) || isSameDay(date, effectiveStartValue)) &&
          (isBefore(date, effectiveEndValue) || isSameDay(date, effectiveEndValue)) &&
          !isSameDay(effectiveStartValue, effectiveEndValue);
      } else if (effectiveStartValue !== undefined && hoverDate !== undefined) {
        isHighlighted =
          (isAfter(date, effectiveStartValue) || isSameDay(date, effectiveStartValue)) &&
          (isBefore(date, hoverDate) || isSameDay(date, hoverDate));
      } else if (effectiveEndValue !== undefined && hoverDate !== undefined) {
        isHighlighted =
          (isAfter(date, hoverDate) || isSameDay(date, hoverDate)) &&
          (isBefore(date, effectiveEndValue) || isSameDay(date, effectiveEndValue));
      }

      const isHighlightStart =
        (isHighlighted && effectiveStartValue && isSameDay(date, effectiveStartValue)) ||
        (isHighlighted &&
          effectiveStartValue === undefined &&
          !!hoverDate &&
          isSameDay(date, hoverDate)) ||
        false;

      const isHighlightEnd =
        (isHighlighted && effectiveEndValue && isSameDay(date, effectiveEndValue)) ||
        (isHighlighted &&
          effectiveEndValue === undefined &&
          !!hoverDate &&
          isSameDay(date, hoverDate)) ||
        false;

      // A hovered boundary candidate at the start/end of a row has no neighbor to blend its tint
      // into and no committed pin to anchor it, so it's left untinted rather than showing a
      // disconnected patch of color.
      const isRowStart = isSameDay(
        date,
        startOfWeek(date, { weekStartsOn: preferredWeekStartsOn })
      );
      const isRowEnd = isSameDay(date, endOfWeek(date, { weekStartsOn: preferredWeekStartsOn }));
      const suppressHighlight =
        (isHighlightEnd && effectiveEndValue === undefined && isRowStart) ||
        (isHighlightStart && effectiveStartValue === undefined && isRowEnd);

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

      const isRangeCommitted = effectiveStartValue !== undefined && effectiveEndValue !== undefined;
      const isCommittedStart =
        effectiveStartValue !== undefined && isSameDay(date, effectiveStartValue);
      const isCommittedEnd = effectiveEndValue !== undefined && isSameDay(date, effectiveEndValue);

      const isStartOfRange =
        !isInvalidDateRange &&
        (isCommittedStart || (isRangeCommitted && showHighlightStartGradient));
      const isEndOfRange =
        !isInvalidDateRange && (isCommittedEnd || (isRangeCommitted && showHighlightEndGradient));
      const isDescribedAsInRange =
        isStartOfRange ||
        isEndOfRange ||
        (isRangeCommitted && !isInvalidDateRange && showHighlighted);

      let inRangeDescriptionLabel = inRangeLabel;
      let inRangeDescriptionText = inRangeText;

      if (isStartOfRange) {
        inRangeDescriptionLabel = startOfRangeLabel;
        inRangeDescriptionText = startOfRangeText;
      } else if (isEndOfRange) {
        inRangeDescriptionLabel = endOfRangeLabel;
        inRangeDescriptionText = endOfRangeText;
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
            // Still clears any stale hoverDate left from a previously-hovered neighbor.
            setHoverDate(isSelected ? undefined : date);
          }}
        >
          <StyledDayButton
            $isCompact={isCompact}
            $isPreviousMonth={isPreviousMonth}
            isPill
            isBasic
            isNeutral={!isSelected}
            isPressed={!!(!isInvalidDateRange && isSelected)}
            {...getDayProps({ date, isHighlighted: isDescribedAsInRange })}
            aria-label={`${formattedDayLabel}: ${formatFullDate(date, locale)}`}
            data-test-selected={!isInvalidDateRange && isSelected}
          >
            {formattedDayLabel}
          </StyledDayButton>
          {isDescribedAsInRange ? (
            <Span
              {...getInRangeDescriptionProps({ date })}
              lang={inRangeDescriptionLabel === undefined ? 'en' : undefined}
              data-test-id="in-range-description"
            >
              {inRangeDescriptionText}
            </Span>
          ) : null}
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
        $isCompact={isCompact}
        $gridColumn={gridColumn}
        data-test-id="calendar-wrapper"
      >
        <StyledCalendarHeading
          $isCompact={isCompact}
          data-test-id="month-display"
          {...getHeadingProps({ offset })}
        >
          {formatMonthHeading(displayDate, locale)}
        </StyledCalendarHeading>
        <StyledCalendarTable as="table" $isCompact={isCompact} {...getGridProps({ offset })}>
          <tbody>
            <WeekdayHeaderRow startDate={startDate} locale={locale} isCompact={isCompact} />
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
