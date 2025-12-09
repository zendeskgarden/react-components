/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useCallback } from 'react';
import useDatePickerContext from '../utils/useDatePickerRangeContext.js';
import { KEYS, composeEventHandlers } from '@zendeskgarden/container-utilities';
import { isValid } from 'date-fns/isValid';
import { isSameDay } from 'date-fns/isSameDay';
import { parseInputValue } from '../utils/date-picker-range-reducer.js';

const Start = props => {
  const {
    state,
    dispatch,
    onChange,
    startValue,
    endValue,
    startInputRef,
    customParseDate
  } = useDatePickerContext();
  const onChangeCallback = useCallback(e => {
    dispatch({
      type: 'START_INPUT_ONCHANGE',
      value: e.target.value
    });
    props.children.props.onChange && props.children.props.onChange(e);
  }, [dispatch, props.children]);
  const onFocusCallback = useCallback(e => {
    dispatch({
      type: 'START_FOCUS'
    });
    props.children.props.onFocus && props.children.props.onFocus(e);
  }, [dispatch, props.children]);
  const handleBlur = useCallback(() => {
    let parsedDate;
    if (customParseDate) {
      parsedDate = customParseDate(state.startInputValue);
    } else {
      parsedDate = parseInputValue({
        inputValue: state.startInputValue
      });
    }
    dispatch({
      type: 'START_BLUR'
    });
    if (parsedDate && isValid(parsedDate) && !isSameDay(parsedDate, startValue)) {
      onChange && onChange({
        startValue: parsedDate,
        endValue
      });
    }
  }, [dispatch, onChange, startValue, endValue, customParseDate, state.startInputValue]);
  const onKeyDownCallback = useCallback(e => {
    if (e.key === KEYS.ENTER) {
      e.preventDefault();
      handleBlur();
    }
    props.children.props.onKeyDown && props.children.props.onKeyDown(e);
  }, [handleBlur, props.children]);
  const onBlurCallback = useCallback(e => {
    handleBlur();
    props.children.props.onBlur && props.children.props.onBlur(e);
  }, [handleBlur, props.children]);
  const childElement = React__default.Children.only(props.children);
  return React__default.cloneElement(childElement, {
    value: state.startInputValue || '',
    ref: startInputRef,
    onChange: composeEventHandlers(childElement.props.onChange, onChangeCallback),
    onFocus: composeEventHandlers(childElement.props.onFocus, onFocusCallback),
    onKeyDown: composeEventHandlers(childElement.props.onKeyDown, onKeyDownCallback),
    onBlur: composeEventHandlers(childElement.props.onBlur, onBlurCallback)
  });
};
Start.displayName = 'DatePickerRange.Start';

export { Start };
