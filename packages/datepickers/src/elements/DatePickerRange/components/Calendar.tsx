/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { addMonths } from 'date-fns/addMonths';

import { StyledRangeCalendar } from '../../../styled';
import useDatePickerContext from '../utils/useDatePickerRangeContext';
import { Month } from './Month';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Calendar = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { state, previousMonthLabel, nextMonthLabel } = useDatePickerContext();

  return (
    <StyledRangeCalendar
      ref={ref}
      data-garden-id="datepickers.range"
      data-garden-version={PACKAGE_VERSION}
      data-test-id="range-calendar"
      {...props}
    >
      <Month
        displayDate={state.previewDate}
        isNextHidden
        previousMonthLabel={previousMonthLabel}
        nextMonthLabel={nextMonthLabel}
      />
      <Month
        displayDate={addMonths(state.previewDate, 1)}
        isPreviousHidden
        previousMonthLabel={previousMonthLabel}
        nextMonthLabel={nextMonthLabel}
      />
    </StyledRangeCalendar>
  );
});

Calendar.displayName = 'DatePickerRange.Calendar';
