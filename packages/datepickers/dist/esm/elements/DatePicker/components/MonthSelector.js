/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useCallback } from 'react';
import '../../../styled/StyledMenu.js';
import '../../../styled/StyledMenuWrapper.js';
import '../../../styled/StyledDatePicker.js';
import '../../../styled/StyledRangeCalendar.js';
import { StyledHeader } from '../../../styled/StyledHeader.js';
import { StyledHeaderPaddle } from '../../../styled/StyledHeaderPaddle.js';
import { StyledHeaderLabel } from '../../../styled/StyledHeaderLabel.js';
import '../../../styled/StyledCalendar.js';
import '../../../styled/StyledCalendarItem.js';
import '../../../styled/StyledDayLabel.js';
import '../../../styled/StyledHighlight.js';
import '../../../styled/StyledDay.js';
import useDatePickerContext from '../utils/useDatePickerContext.js';
import SvgChevronLeftStroke from '../../../node_modules/@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg.js';
import SvgChevronRightStroke from '../../../node_modules/@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg.js';

const MonthSelector = _ref => {
  let {
    locale,
    isCompact
  } = _ref;
  const {
    state,
    dispatch
  } = useDatePickerContext();
  const headerLabelFormatter = useCallback(date => {
    const formatter = new Intl.DateTimeFormat(locale, {
      month: 'long',
      year: 'numeric'
    });
    return formatter.format(date);
  }, [locale]);
  return React__default.createElement(StyledHeader, {
    $isCompact: isCompact
  }, React__default.createElement(StyledHeaderPaddle, {
    $isCompact: isCompact,
    onClick: () => {
      dispatch({
        type: 'PREVIEW_PREVIOUS_MONTH'
      });
    }
  }, React__default.createElement(SvgChevronLeftStroke, null)), React__default.createElement(StyledHeaderLabel, {
    $isCompact: isCompact
  }, headerLabelFormatter(state.previewDate)), React__default.createElement(StyledHeaderPaddle, {
    $isCompact: isCompact,
    onClick: () => {
      dispatch({
        type: 'PREVIEW_NEXT_MONTH'
      });
    }
  }, React__default.createElement(SvgChevronRightStroke, null)));
};

export { MonthSelector };
