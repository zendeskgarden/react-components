/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { mergeRefs } from 'react-merge-refs';
import { addMonths } from 'date-fns/addMonths';

import { StyledRangeCalendar } from '../../../styled';
import { Toolbar } from '../../../components/Toolbar';
import useDatePickerContext from '../utils/useDatePickerRangeContext';
import { Month } from './Month';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Calendar = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const {
    previewDate,
    locale,
    isCompact,
    previousMonthLabel,
    nextMonthLabel,
    previousYearLabel,
    nextYearLabel,
    toolbarLabel,
    calendarId,
    getCalendarProps,
    focusPreviousMonth,
    focusNextMonth,
    focusPreviousYear,
    focusNextYear
  } = useDatePickerContext();

  const { ref: calendarWrapperRef, ...calendarProps } = getCalendarProps();

  return (
    <StyledRangeCalendar
      ref={mergeRefs([ref, calendarWrapperRef])}
      id={calendarId}
      $isCompact={isCompact}
      data-garden-id="datepickers.range"
      data-garden-version={PACKAGE_VERSION}
      data-test-id="range-calendar"
      {...calendarProps}
      {...props}
    >
      <Toolbar
        previewDate={previewDate}
        locale={locale}
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
      <Month displayDate={previewDate} offset={0} gridColumn="1 / 8" />
      <Month displayDate={addMonths(previewDate, 1)} offset={1} gridColumn="9 / 16" />
    </StyledRangeCalendar>
  );
});

Calendar.displayName = 'DatePickerRange.Calendar';
