/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, useReducer, useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { datepickerRangeReducer, retrieveInitialState } from './utils/datepicker-range-reducer';
import { DatepickerRangeContext } from './utils/useDatepickerRangeContext';
import Start from './components/Start';
import End from './components/End';
import Calendar from './components/Calendar';

export interface IDatepickerRangeProps {
  locale?: string;
  /** Sets the start date to display */
  startValue?: Date;
  /** Sets the end date to display */
  endValue?: Date;
  /** Sets the minimum date value. Note: users can still manually enter a date below this value. */
  minValue?: Date;
  /** Sets the maximum date value. Note: users can still manually enter a date above this value. */
  maxValue?: Date;
  /**
   * Handles changes to the start and end dates
   *
   * @param {Date} startValue The start date to use
   * @param {Date} endValue The end date to use
   */
  onChange?: (values: { startValue?: Date; endValue?: Date }) => void;
  /**
   * Formats the date
   *
   * @param {Date} date The date to format
   * @returns {string}
   */
  formatDate?: (date: Date) => string;
  /**
   * Parses the date with a custom format and returns a `Date` object
   *
   * @param {string} inputValue The format used for parsing
   * @returns {Date}
   */
  customParseDate?: (inputValue?: string) => Date;
  /** Applies if compact styling */
  isCompact?: boolean;
}

const DatepickerRange = (props: PropsWithChildren<IDatepickerRangeProps>) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const reducer = useCallback(
    datepickerRangeReducer({
      startValue: props.startValue,
      locale: props.locale,
      formatDate: props.formatDate,
      endValue: props.endValue,
      onChange: props.onChange,
      customParseDate: props.customParseDate
    }),
    [
      props.startValue,
      props.endValue,
      props.locale,
      props.formatDate,
      props.onChange,
      props.customParseDate
    ]
  );

  const [state, dispatch] = useReducer(reducer, retrieveInitialState(props));
  const previousStartValue = useRef(props.startValue);
  const previousEndValue = useRef(props.endValue);
  const startInputRef = useRef<HTMLInputElement>();
  const endInputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    dispatch({
      type: 'CONTROLLED_START_VALUE_CHANGE',
      value: props.startValue
    });

    if (previousStartValue.current !== props.startValue && props.startValue !== undefined) {
      endInputRef.current && endInputRef.current.focus();
    }

    previousStartValue.current = props.startValue;
  }, [props, props.startValue]);

  useEffect(() => {
    dispatch({
      type: 'CONTROLLED_END_VALUE_CHANGE',
      value: props.endValue
    });

    if (previousEndValue.current !== props.endValue && props.endValue !== undefined) {
      startInputRef.current && startInputRef.current.focus();
    }

    previousEndValue.current = props.endValue;
  }, [props, props.endValue]);

  return (
    <DatepickerRangeContext.Provider
      value={{
        state,
        dispatch,
        isCompact: props.isCompact,
        locale: props.locale,
        minValue: props.minValue,
        maxValue: props.maxValue,
        startValue: props.startValue,
        endValue: props.endValue,
        onChange: props.onChange,
        startInputRef,
        endInputRef
      }}
    >
      {props.children}
    </DatepickerRangeContext.Provider>
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

export default DatepickerRange;
