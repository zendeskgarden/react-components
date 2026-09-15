/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes, useRef } from 'react';
import { mergeRefs } from 'react-merge-refs';
import { useScrollRegion } from '@zendeskgarden/container-scrollregion';
import { Span } from '@zendeskgarden/react-typography';
import { startOfMonth } from 'date-fns/startOfMonth';
import { endOfMonth } from 'date-fns/endOfMonth';
import { startOfWeek } from 'date-fns/startOfWeek';
import { endOfWeek } from 'date-fns/endOfWeek';
import { eachDayOfInterval } from 'date-fns/eachDayOfInterval';
import { addDays } from 'date-fns/addDays';
import { isSameDay } from 'date-fns/isSameDay';
import { isSameMonth } from 'date-fns/isSameMonth';
import { getDate } from 'date-fns/getDate';
import {
  StyledCalendarGrid,
  StyledCalendarMonth,
  StyledCalendarHeading,
  StyledCalendarTable,
  StyledCalendarRow,
  StyledDayLabelHeader,
  StyledDayLabel,
  StyledDayCell,
  StyledDayButton
} from '../../../styled';
import { Toolbar } from '../../../components/Toolbar';
import useDatePickerContext from '../utils/useDatePickerContext';
import { getStartOfWeek, isDateWithinRange } from '../../../utils/calendar-utils';
import { DateFnsIndex } from '../../../types';

interface ICalendarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: Date;
  minValue?: Date;
  maxValue?: Date;
  isCompact?: boolean;
  locale?: string;
  weekStartsOn?: DateFnsIndex;
  previousMonthLabel?: string;
  nextMonthLabel?: string;
  previousYearLabel?: string;
  nextYearLabel?: string;
  toolbarLabel?: string;
}

export const Calendar = forwardRef<HTMLDivElement, ICalendarProps>(
  (
    {
      value,
      minValue,
      maxValue,
      isCompact = false,
      locale,
      weekStartsOn,
      previousMonthLabel,
      nextMonthLabel,
      previousYearLabel,
      nextYearLabel,
      toolbarLabel
    },
    ref
  ) => {
    const {
      previewDate,
      isValueInvalid,
      buttonId,
      getCalendarProps,
      getGridProps,
      getHeadingProps,
      getDayProps,
      focusPreviousMonth,
      focusNextMonth,
      focusPreviousYear,
      focusNextYear
    } = useDatePickerContext();

    const containerRef = useRef<HTMLDivElement>(null);
    const containerTabIndex = useScrollRegion({ containerRef, dependency: isCompact });

    const preferredWeekStartsOn = weekStartsOn || getStartOfWeek(locale);

    const monthStartDate = startOfMonth(previewDate);
    const monthEndDate = endOfMonth(monthStartDate);
    const startDate = startOfWeek(monthStartDate, {
      weekStartsOn: preferredWeekStartsOn
    });
    const endDate = endOfWeek(monthEndDate, {
      weekStartsOn: preferredWeekStartsOn
    });

    const headerLabelFormatter = React.useCallback<(date: Date) => string>(
      date => {
        const formatter = new Intl.DateTimeFormat(locale, {
          month: 'long',
          year: 'numeric'
        });

        return formatter.format(date);
      },
      [locale]
    );

    const dayLabelFormatter = React.useCallback<(date: Date) => string>(
      date => {
        const formatter = new Intl.DateTimeFormat(locale, {
          weekday: 'short'
        });

        return formatter.format(date);
      },
      [locale]
    );

    const fullDayLabelFormatter = React.useCallback<(date: Date) => string>(
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
            $isCompact={isCompact}
            scope="col"
          >
            <StyledDayLabel $isCompact={isCompact} aria-hidden="true" data-test-id="day-label">
              {formattedDayLabel}
            </StyledDayLabel>
            <Span hidden data-test-id="day-label-full">
              {fullDayLabelFormatter(date)}
            </Span>
          </StyledDayLabelHeader>
        );
      }
    );

    const days = eachDayOfInterval({ start: startDate, end: endDate }).map(date => {
      const formattedDayLabel = getDate(date);
      const isPreviousMonth = !isSameMonth(date, previewDate);
      const isSelected = !!(value && !isValueInvalid && isSameDay(date, value));
      const isDisabled = !isDateWithinRange(date, minValue, maxValue);

      return (
        // eslint-disable-next-line jsx-a11y/prefer-tag-over-role -- StyledDayCell already renders a <td>; eslint can't see through the styled-component wrapper
        <StyledDayCell key={date.toISOString()} role="gridcell">
          <StyledDayButton
            $isCompact={isCompact}
            $isPreviousMonth={isPreviousMonth}
            isPressed={!!(isSelected && !isDisabled)}
            isPill
            isBasic
            isNeutral={!isSelected}
            data-test-previous={isPreviousMonth}
            {...getDayProps({ date })}
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
      // eslint-disable-next-line jsx-a11y/prefer-tag-over-role
      <StyledCalendarGrid
        ref={mergeRefs([ref, containerRef])}
        $isCompact={isCompact}
        role="region"
        aria-labelledby={buttonId}
        tabIndex={containerTabIndex}
        data-test-id="calendar-wrapper"
        {...getCalendarProps()}
      >
        <Toolbar
          isCompact={isCompact}
          previousMonthLabel={previousMonthLabel}
          nextMonthLabel={nextMonthLabel}
          previousYearLabel={previousYearLabel}
          nextYearLabel={nextYearLabel}
          toolbarLabel={toolbarLabel}
          onPreviousYear={focusPreviousYear}
          onPreviousMonth={focusPreviousMonth}
          onNextMonth={focusNextMonth}
          onNextYear={focusNextYear}
        />
        <StyledCalendarMonth $isCompact={isCompact}>
          <StyledCalendarHeading
            $isCompact={isCompact}
            data-test-id="month-display"
            {...getHeadingProps()}
          >
            {headerLabelFormatter(previewDate)}
          </StyledCalendarHeading>
          <StyledCalendarTable as="table" $isCompact={isCompact} {...getGridProps()}>
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
