/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLProps } from 'react';
import addMonths from 'date-fns/addMonths';

import { StyledRangeCalendar } from '../../styled';
import useDatepickerRangeContext from '../utils/useDatepickerRangeContext';
import Month from './Month';

const Calendar: React.FunctionComponent<HTMLProps<HTMLDivElement>> = props => {
  const {
    state,
    dispatch,
    locale,
    small,
    minValue,
    maxValue,
    startValue,
    endValue,
    onChange
  } = useDatepickerRangeContext();

  return (
    <StyledRangeCalendar
      data-garden-id="datepickers.range"
      data-garden-version={PACKAGE_VERSION}
      data-test-id="range-calendar"
      {...(props as any)}
    >
      <Month
        locale={locale}
        displayDate={state.previewDate}
        small={small}
        isNextHidden
        dispatch={dispatch}
        minValue={minValue}
        maxValue={maxValue}
        startValue={startValue}
        endValue={endValue}
        onChange={onChange}
        hoverDate={state.hoverDate}
      />
      <Month
        locale={locale}
        displayDate={addMonths(state.previewDate, 1)}
        small={small}
        isPreviousHidden
        isNextHidden
        dispatch={dispatch}
        minValue={minValue}
        maxValue={maxValue}
        startValue={startValue}
        endValue={endValue}
        onChange={onChange}
        hoverDate={state.hoverDate}
      />
      <Month
        locale={locale}
        displayDate={addMonths(state.previewDate, 2)}
        small={small}
        isPreviousHidden
        dispatch={dispatch}
        minValue={minValue}
        maxValue={maxValue}
        startValue={startValue}
        endValue={endValue}
        onChange={onChange}
        hoverDate={state.hoverDate}
      />
    </StyledRangeCalendar>
  );
};

export default Calendar;
