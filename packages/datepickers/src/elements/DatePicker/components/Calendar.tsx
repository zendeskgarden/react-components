/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledCalendarGrid } from '../../../styled';
import { Toolbar } from '../../../components/Toolbar';
import useDatePickerContext from '../utils/useDatePickerContext';
import { DateFnsIndex } from '../../../types';
import { Month } from './Month';

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
