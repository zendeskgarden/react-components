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
import { IDatepickerRangeProps } from '../../types';
import { datepickerRangeReducer, retrieveInitialState } from './utils/datepicker-range-reducer';
import { DatepickerRangeContext } from './utils/useDatepickerRangeContext';
import { Start } from './components/Start';
import { End } from './components/End';
import { Calendar } from './components/Calendar';

const DatepickerRangeComponent = (props: PropsWithChildren<IDatepickerRangeProps>) => {
  const {
    startValue,
    locale,
    weekStartsOn,
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
      weekStartsOn,
      minValue,
      maxValue,
      startValue,
      endValue,
      onChange,
      startInputRef,
      endInputRef,
      customParseDate
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
      startInputRef,
      endInputRef,
      customParseDate
    ]
  );

  return (
    <DatepickerRangeContext.Provider value={value}>{children}</DatepickerRangeContext.Provider>
  );
};

DatepickerRangeComponent.propTypes = {
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

DatepickerRangeComponent.defaultProps = {
  locale: 'en-US',
  isCompact: false
};

export const DatepickerRange = DatepickerRangeComponent as typeof DatepickerRangeComponent & {
  Calendar: typeof Calendar;
  End: typeof End;
  Start: typeof Start;
};

DatepickerRange.Calendar = Calendar;
DatepickerRange.End = End;
DatepickerRange.Start = Start;
