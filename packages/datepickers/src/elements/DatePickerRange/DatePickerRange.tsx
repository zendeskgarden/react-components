/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { IDatePickerRangeProps } from '../../types';
import { DatePickerRangeContext } from './utils/useDatePickerRangeContext';
import { useDatePickerRange } from './utils/useDatePickerRange';
import { Start } from './components/Start';
import { End } from './components/End';
import { Calendar } from './components/Calendar';

const DatePickerRangeComponent = (props: PropsWithChildren<IDatePickerRangeProps>) => {
  const {
    startValue,
    locale = 'en-US',
    weekStartsOn,
    formatDate,
    endValue,
    onChange,
    onValueSettled,
    customParseDate,
    isCompact = false,
    minValue,
    maxValue,
    previousMonthLabel,
    nextMonthLabel,
    previousYearLabel,
    nextYearLabel,
    toolbarLabel,
    children
  } = props;

  const startInputRef = useRef<HTMLInputElement>(null);
  const endInputRef = useRef<HTMLInputElement>(null);

  const datePickerRange = useDatePickerRange({
    startValue,
    endValue,
    minValue,
    maxValue,
    locale,
    weekStartsOn,
    formatDate,
    customParseDate,
    onChange,
    onValueSettled,
    startInputRef,
    endInputRef
  });

  const value = useMemo(
    () => ({
      ...datePickerRange,
      isCompact,
      locale,
      weekStartsOn,
      minValue,
      maxValue,
      startValue,
      endValue,
      previousMonthLabel,
      nextMonthLabel,
      previousYearLabel,
      nextYearLabel,
      toolbarLabel
    }),
    [
      datePickerRange,
      isCompact,
      locale,
      weekStartsOn,
      minValue,
      maxValue,
      startValue,
      endValue,
      previousMonthLabel,
      nextMonthLabel,
      previousYearLabel,
      nextYearLabel,
      toolbarLabel
    ]
  );

  return (
    <DatePickerRangeContext.Provider value={value}>{children}</DatePickerRangeContext.Provider>
  );
};

DatePickerRangeComponent.propTypes = {
  locale: PropTypes.string,
  weekStartsOn: PropTypes.number,
  startValue: PropTypes.instanceOf(Date),
  endValue: PropTypes.instanceOf(Date),
  minValue: PropTypes.instanceOf(Date),
  maxValue: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  onValueSettled: PropTypes.func,
  formatDate: PropTypes.func,
  customParseDate: PropTypes.func,
  isCompact: PropTypes.bool
};

export const DatePickerRange = DatePickerRangeComponent as typeof DatePickerRangeComponent & {
  Calendar: typeof Calendar;
  End: typeof End;
  Start: typeof Start;
};

DatePickerRange.Calendar = Calendar;
DatePickerRange.End = End;
DatePickerRange.Start = Start;
