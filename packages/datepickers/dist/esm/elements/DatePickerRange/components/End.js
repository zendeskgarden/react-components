/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useCallback } from 'react';
import { KEYS, composeEventHandlers } from '@zendeskgarden/container-utilities';
import { isValid } from 'date-fns/isValid';
import { isSameDay } from 'date-fns/isSameDay';
import { parseInputValue } from '../utils/date-picker-range-reducer.js';
import useDatePickerContext from '../utils/useDatePickerRangeContext.js';

const End = props => {
  const {
    state,
    dispatch,
    onChange,
    startValue,
    endValue,
    endInputRef,
    customParseDate
  } = useDatePickerContext();
  const onChangeCallback = useCallback(e => {
    dispatch({
      type: 'END_INPUT_ONCHANGE',
      value: e.target.value
    });
    props.children.props.onChange && props.children.props.onChange(e);
  }, [dispatch, props.children]);
  const onFocusCallback = useCallback(e => {
    dispatch({
      type: 'END_FOCUS'
    });
    props.children.props.onFocus && props.children.props.onFocus(e);
  }, [dispatch, props.children]);
  const handleBlur = useCallback(() => {
    dispatch({
      type: 'END_BLUR'
    });
    let parsedDate;
    if (customParseDate) {
      parsedDate = customParseDate(state.endInputValue);
    } else {
      parsedDate = parseInputValue({
        inputValue: state.endInputValue
      });
    }
    if (onChange && parsedDate && isValid(parsedDate) && !isSameDay(parsedDate, endValue)) {
      onChange && onChange({
        startValue,
        endValue: parsedDate
      });
    }
  }, [dispatch, onChange, startValue, endValue, customParseDate, state.endInputValue]);
  const onKeydownCallback = useCallback(e => {
    if (e.key === KEYS.ENTER) {
      handleBlur();
      e.preventDefault();
    }
    props.children.props.onKeyDown && props.children.props.onKeyDown(e);
  }, [handleBlur, props.children]);
  const onBlurCallback = useCallback(e => {
    handleBlur();
    props.children.props.onBlur && props.children.props.onBlur(e);
  }, [handleBlur, props.children]);
  const childElement = React__default.Children.only(props.children);
  return React__default.cloneElement(childElement, {
    value: state.endInputValue || '',
    ref: endInputRef,
    onChange: composeEventHandlers(childElement.props.onChange, onChangeCallback),
    onFocus: composeEventHandlers(childElement.props.onFocus, onFocusCallback),
    onKeyDown: composeEventHandlers(childElement.props.onKeyDown, onKeydownCallback),
    onBlur: composeEventHandlers(childElement.props.onBlur, onBlurCallback)
  });
};
End.displayName = 'DatePickerRange.End';

export { End };
