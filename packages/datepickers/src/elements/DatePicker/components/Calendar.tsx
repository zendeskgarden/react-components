/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import { StyledCalendarGrid } from '../../../styled';
import { Toolbar } from '../../../components/Toolbar';
import useDatePickerContext from '../utils/useDatePickerContext';
import { IDatePickerCalendarProps } from '../../../types';
import { Month } from './Month';

export const Calendar = forwardRef<HTMLDivElement, IDatePickerCalendarProps>(
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
      getCalendarProps,
      focusPreviousMonth,
      focusNextMonth,
      focusPreviousYear,
      focusNextYear
    } = useDatePickerContext();

    return (
      <StyledCalendarGrid
        ref={ref}
        $isCompact={isCompact}
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
        <Month
          value={value}
          minValue={minValue}
          maxValue={maxValue}
          isCompact={isCompact}
          locale={locale}
          weekStartsOn={weekStartsOn}
        />
      </StyledCalendarGrid>
    );
  }
);

Calendar.displayName = 'Calendar';
