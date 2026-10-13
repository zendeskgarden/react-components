/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { addMonths } from 'date-fns/addMonths';
import { forwardRef, HTMLAttributes } from 'react';

import { useDatePickerRangeContext as useDatePickerContext } from '../../hooks/datepicker/useDatePickerRangeContext';
import { StyledRangeCalendar } from '../../views/datepicker/StyledRangeCalendar';
import { COMPONENT_IDS } from '../utils';
import { Month } from './Month';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Calendar = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { state } = useDatePickerContext();

  return (
    <StyledRangeCalendar
      ref={ref}
      data-test-id="range-calendar"
      {...props}
      data-garden-id={COMPONENT_IDS['datepickers.range_calendar']}
      data-garden-version={PACKAGE_VERSION}
    >
      <Month displayDate={state.previewDate} isNextHidden />
      <Month displayDate={addMonths(state.previewDate, 1)} isPreviousHidden />
    </StyledRangeCalendar>
  );
});

Calendar.displayName = 'DatePickerRange.Calendar';
