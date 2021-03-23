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
import { datepickerRangeReducer, retrieveInitialState } from './utils/datepicker-range-reducer';
import { DatepickerRangeContext } from './utils/useDatepickerRangeContext';
import Start from './components/Start';
import End from './components/End';
import Calendar from './components/Calendar';

export interface IDatepickerRangeProps {
  /**
   * Applies locale-based formatting.
   * Accepts all valid `Intl` [locales](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).
   */
  locale?: string;
  /**
   * Sets the start date
   */
  startValue?: Date;
  /**
   * Sets the end date
   */
  endValue?: Date;
  /**
   * Disables dates before this value on the calendar
   */
  minValue?: Date;
  /**
   * Disables dates after this value on the calendar
   */
  maxValue?: Date;
  /**
   * Handles start and end date changes
   *
   * @param {Object} values The selected dates
   * @param {Date} [values.startValue] Optional start date
   * @param {Date} [values.endValue] Optional end date
   */
  onChange?: (values: { startValue?: Date; endValue?: Date }) => void;
  /**
   * Adjusts the input element's date formatting
   *
   *  @param {Date} date The selected date
   *  @returns {string} a formatted date string
   */
  formatDate?: (date: Date) => string;
  /**
   * Overrides the default date parsing
   *
   * @param {string} inputValue A date string
   * @returns {Date} the parsed date
   */
  customParseDate?: (inputValue?: string) => Date;
  /**
   * Applies compact styling
   */
  isCompact?: boolean;
}

export const DatepickerRange = (props: PropsWithChildren<IDatepickerRangeProps>) => {
  const {
    startValue,
    locale,
    formatDate,
    endValue,
    onChange,
    customParseDate,
    isCompact,
    minValue,
    maxValue,
    children
  } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const reducer = useCallback(
    datepickerRangeReducer({
      startValue,
      locale,
      formatDate,
      endValue,
      onChange,
      customParseDate
    }),
    [startValue, endValue, locale, formatDate, onChange, customParseDate]
  );

  const [state, dispatch] = useReducer(reducer, retrieveInitialState(props));
  const previousStartValue = useRef(startValue);
  const previousEndValue = useRef(endValue);
  const startInputRef = useRef<HTMLInputElement>();
  const endInputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    dispatch({
      type: 'CONTROLLED_START_VALUE_CHANGE',
      value: startValue
    });

    if (
      endInputRef.current &&
      previousStartValue.current !== startValue &&
      startValue !== undefined
    ) {
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

  const value = useMemo(
    () => ({
      state,
      dispatch,
      isCompact,
      locale,
      minValue,
      maxValue,
      startValue,
      endValue,
      onChange,
      startInputRef,
      endInputRef
    }),
    [
      state,
      dispatch,
      isCompact,
      locale,
      minValue,
      maxValue,
      startValue,
      endValue,
      onChange,
      startInputRef,
      endInputRef
    ]
  );

  return (
    <DatepickerRangeContext.Provider value={value}>{children}</DatepickerRangeContext.Provider>
  );
};

DatepickerRange.Start = Start;
DatepickerRange.End = End;
DatepickerRange.Calendar = Calendar;

DatepickerRange.propTypes = {
  locale: PropTypes.string,
  startValue: PropTypes.instanceOf(Date),
  endValue: PropTypes.instanceOf(Date),
  minValue: PropTypes.instanceOf(Date),
  maxValue: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  formatDate: PropTypes.func,
  customParseDate: PropTypes.func,
  isCompact: PropTypes.bool
};

DatepickerRange.defaultProps = {
  locale: 'en-US',
  isCompact: false
};
