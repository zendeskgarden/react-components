/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes, useEffect, useRef } from 'react';
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
    state,
    dispatch,
    isCompact,
    previousMonthLabel,
    nextMonthLabel,
    previousYearLabel,
    nextYearLabel,
    toolbarLabel,
    calendarId
  } = useDatePickerContext();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pendingGridFocusRef = useRef(false);

  useEffect(() => {
    /**
     * Only follow a focusedDate change with real DOM focus when it was
     * triggered by keyboard navigation from within one of the two grids
     * themselves (flagged by Month's handleDayKeyDown) - the two grids
     * share this one focus-follow effect since arrow-key navigation can
     * cross from one month's grid into the other's.
     */
    if (!pendingGridFocusRef.current) {
      return;
    }

    pendingGridFocusRef.current = false;
    wrapperRef.current
      ?.querySelector<HTMLButtonElement>('[data-test-id="day"][tabindex="0"]')
      ?.focus();
  }, [state.focusedDate]);

  return (
    <StyledRangeCalendar
      ref={mergeRefs([ref, wrapperRef])}
      id={calendarId}
      $isCompact={isCompact}
      data-garden-id="datepickers.range"
      data-garden-version={PACKAGE_VERSION}
      data-test-id="range-calendar"
      {...props}
    >
      <Toolbar
        isCompact={isCompact}
        previousMonthLabel={previousMonthLabel}
        nextMonthLabel={nextMonthLabel}
        previousYearLabel={previousYearLabel}
        nextYearLabel={nextYearLabel}
        toolbarLabel={toolbarLabel}
        onPreviousYear={() => {
          dispatch({ type: 'PREVIEW_PREVIOUS_YEAR' });
        }}
        onPreviousMonth={() => {
          dispatch({ type: 'PREVIEW_PREVIOUS_MONTH' });
        }}
        onNextMonth={() => {
          dispatch({ type: 'PREVIEW_NEXT_MONTH' });
        }}
        onNextYear={() => {
          dispatch({ type: 'PREVIEW_NEXT_YEAR' });
        }}
      />
      <Month
        displayDate={state.previewDate}
        gridColumn="1 / 8"
        pendingGridFocusRef={pendingGridFocusRef}
      />
      <Month
        displayDate={addMonths(state.previewDate, 1)}
        gridColumn="9 / 16"
        pendingGridFocusRef={pendingGridFocusRef}
      />
    </StyledRangeCalendar>
  );
});

Calendar.displayName = 'DatePickerRange.Calendar';
