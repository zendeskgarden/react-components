/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, useContext, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { IDatePickerRangeProps, WEEK_STARTS_ON } from '../../types';
import { DatePickerRangeContext } from './utils/useDatePickerRangeContext';
import { useDatePickerRange } from './utils/useDatePickerRange';
import { Start } from './components/Start';
import { End } from './components/End';
import { Calendar } from './components/Calendar';
import { Trigger } from './components/Trigger';
import { Dialog } from './components/Dialog';

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
    inRangeLabel,
    startOfRangeLabel,
    endOfRangeLabel,
    children
  } = props;

  const startInputRef = useRef<HTMLInputElement>(null);
  const endInputRef = useRef<HTMLInputElement>(null);
  const theme = useContext(ThemeContext) || DEFAULT_THEME;

  const datePickerRange = useDatePickerRange({
    startValue,
    endValue,
    minValue,
    maxValue,
    locale,
    weekStartsOn,
    rtl: theme.rtl,
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
      toolbarLabel,
      inRangeLabel,
      startOfRangeLabel,
      endOfRangeLabel
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
      toolbarLabel,
      inRangeLabel,
      startOfRangeLabel,
      endOfRangeLabel
    ]
  );

  return (
    <DatePickerRangeContext.Provider value={value}>{children}</DatePickerRangeContext.Provider>
  );
};

DatePickerRangeComponent.propTypes = {
  locale: PropTypes.string,
  weekStartsOn: PropTypes.oneOf(WEEK_STARTS_ON),
  startValue: PropTypes.instanceOf(Date),
  endValue: PropTypes.instanceOf(Date),
  minValue: PropTypes.instanceOf(Date),
  maxValue: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  onValueSettled: PropTypes.func,
  formatDate: PropTypes.func,
  customParseDate: PropTypes.func,
  isCompact: PropTypes.bool,
  previousMonthLabel: PropTypes.string,
  nextMonthLabel: PropTypes.string,
  previousYearLabel: PropTypes.string,
  nextYearLabel: PropTypes.string,
  toolbarLabel: PropTypes.string,
  inRangeLabel: PropTypes.string,
  startOfRangeLabel: PropTypes.string,
  endOfRangeLabel: PropTypes.string
};

export const DatePickerRange = DatePickerRangeComponent as typeof DatePickerRangeComponent & {
  Calendar: typeof Calendar;
  End: typeof End;
  Start: typeof Start;
  Trigger: typeof Trigger;
  Dialog: typeof Dialog;
};

DatePickerRange.Calendar = Calendar;
DatePickerRange.End = End;
DatePickerRange.Start = Start;
DatePickerRange.Trigger = Trigger;
DatePickerRange.Dialog = Dialog;
