/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import { addMonths } from 'date-fns/addMonths';
import '../../../styled/StyledMenu.js';
import '../../../styled/StyledMenuWrapper.js';
import '../../../styled/StyledDatePicker.js';
import { StyledRangeCalendar } from '../../../styled/StyledRangeCalendar.js';
import '../../../styled/StyledHeader.js';
import '../../../styled/StyledHeaderPaddle.js';
import '../../../styled/StyledHeaderLabel.js';
import '../../../styled/StyledCalendar.js';
import '../../../styled/StyledCalendarItem.js';
import '../../../styled/StyledDayLabel.js';
import '../../../styled/StyledHighlight.js';
import '../../../styled/StyledDay.js';
import useDatePickerContext from '../utils/useDatePickerRangeContext.js';
import { Month } from './Month.js';

const Calendar = forwardRef((props, ref) => {
  const {
    state
  } = useDatePickerContext();
  return React__default.createElement(StyledRangeCalendar, Object.assign({
    ref: ref,
    "data-garden-id": "datepickers.range",
    "data-garden-version": '9.12.3'
  }, props), React__default.createElement(Month, {
    displayDate: state.previewDate,
    isNextHidden: true
  }), React__default.createElement(Month, {
    displayDate: addMonths(state.previewDate, 1),
    isPreviousHidden: true
  }));
});
Calendar.displayName = 'DatePickerRange.Calendar';

export { Calendar };
