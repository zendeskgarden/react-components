/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useCallback, useReducer, useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { datepickerRangeReducer, retrieveInitialState } from './utils/date-picker-range-reducer.js';
import { DatePickerRangeContext } from './utils/useDatePickerRangeContext.js';
import { Start } from './components/Start.js';
import { End } from './components/End.js';
import { Calendar } from './components/Calendar.js';

const DatePickerRangeComponent = props => {
  const {
    startValue,
    locale = 'en-US',
    weekStartsOn,
    formatDate,
    endValue,
    onChange,
    customParseDate,
    isCompact = false,
    minValue,
    maxValue,
    children
  } = props;
  const reducer = useCallback(datepickerRangeReducer({
    startValue,
    locale,
    formatDate,
    endValue,
    customParseDate
  }), [startValue, endValue, locale, formatDate, onChange, customParseDate]);
  const [state, dispatch] = useReducer(reducer, retrieveInitialState(props));
  const previousStartValue = useRef(startValue);
  const previousEndValue = useRef(endValue);
  const startInputRef = useRef();
  const endInputRef = useRef();
  useEffect(() => {
    dispatch({
      type: 'CONTROLLED_START_VALUE_CHANGE',
      value: startValue
    });
    if (endInputRef.current && previousStartValue.current !== startValue && startValue !== undefined) {
      endInputRef.current.focus();
    }
    previousStartValue.current = startValue;
  }, [props, startValue]);
  useEffect(() => {
    dispatch({
      type: 'CONTROLLED_END_VALUE_CHANGE',
      value: endValue
    });
    if (startInputRef.current && previousEndValue.current !== endValue && endValue !== undefined) {
      startInputRef.current.focus();
    }
    previousEndValue.current = endValue;
  }, [props, endValue]);
  const value = useMemo(() => ({
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
    startInputRef,
    endInputRef,
    customParseDate
  }), [state, dispatch, isCompact, locale, weekStartsOn, minValue, maxValue, startValue, endValue, onChange, startInputRef, endInputRef, customParseDate]);
  return React__default.createElement(DatePickerRangeContext.Provider, {
    value: value
  }, children);
};
DatePickerRangeComponent.propTypes = {
  locale: PropTypes.string,
  weekStartsOn: PropTypes.number,
  startValue: PropTypes.instanceOf(Date),
  endValue: PropTypes.instanceOf(Date),
  minValue: PropTypes.instanceOf(Date),
  maxValue: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  formatDate: PropTypes.func,
  customParseDate: PropTypes.func,
  isCompact: PropTypes.bool
};
const DatePickerRange = DatePickerRangeComponent;
DatePickerRange.Calendar = Calendar;
DatePickerRange.End = End;
DatePickerRange.Start = Start;

export { DatePickerRange };
