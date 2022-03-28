/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import addMonths from 'date-fns/addMonths';

import { StyledRangeCalendar } from '../../../styled';
import useDatepickerRangeContext from '../utils/useDatepickerRangeContext';
import { Month } from './Month';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Calendar = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { state, dispatch, locale, isCompact, minValue, maxValue, startValue, endValue } =
    useDatepickerRangeContext();

  return (
    <StyledRangeCalendar
      ref={ref}
      data-garden-id="datepickers.range"
      data-garden-version={PACKAGE_VERSION}
      data-test-id="range-calendar"
      {...props}
    >
      <Month
        locale={locale}
        displayDate={state.previewDate}
        isCompact={isCompact}
        isNextHidden
        dispatch={dispatch}
        minValue={minValue}
        maxValue={maxValue}
        startValue={startValue}
        endValue={endValue}
        hoverDate={state.hoverDate}
      />
      <Month
        locale={locale}
        displayDate={addMonths(state.previewDate, 1)}
        isCompact={isCompact}
        isPreviousHidden
        dispatch={dispatch}
        minValue={minValue}
        maxValue={maxValue}
        startValue={startValue}
        endValue={endValue}
        hoverDate={state.hoverDate}
      />
    </StyledRangeCalendar>
  );
});

Calendar.displayName = 'DatepickerRange.Calendar';
