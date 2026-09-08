/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  PropsWithChildren,
  useReducer,
  useCallback,
  useEffect,
  useRef,
  useMemo
} from 'react';
import PropTypes from 'prop-types';
import { IDatePickerRangeProps } from '../../types';
import { datepickerRangeReducer, retrieveInitialState } from './utils/date-picker-range-reducer';
import { DatePickerRangeContext } from './utils/useDatePickerRangeContext';
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
    children
  } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const reducer = useCallback(
    datepickerRangeReducer({
      startValue,
      locale,
      formatDate,
      endValue
    }),
    [startValue, endValue, locale, formatDate, onChange]
  );

  const [state, dispatch] = useReducer(reducer, retrieveInitialState(props));
  const startInputRef = useRef<HTMLInputElement>();
  const endInputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    dispatch({
      type: 'CONTROLLED_START_VALUE_CHANGE',
      value: startValue
    });
  }, [startValue]);

  useEffect(() => {
    dispatch({
      type: 'CONTROLLED_END_VALUE_CHANGE',
      value: endValue
    });
  }, [endValue]);

  const value = useMemo(
    () => ({
      state,
      dispatch,
      isCompact,
      locale,
      weekStartsOn,
      minValue,
      maxValue,
      startValue,
      endValue,
      onChange,
      onValueSettled,
      startInputRef,
      endInputRef,
      customParseDate,
      previousMonthLabel,
      nextMonthLabel
    }),
    [
      state,
      dispatch,
      isCompact,
      locale,
      weekStartsOn,
      minValue,
      maxValue,
      startValue,
      endValue,
      onChange,
      onValueSettled,
      startInputRef,
      endInputRef,
      customParseDate,
      previousMonthLabel,
      nextMonthLabel
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
