/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { KEYS, composeEventHandlers } from '@zendeskgarden/container-utilities';
import { isSameDay } from 'date-fns/isSameDay';
import { isValid } from 'date-fns/isValid';
import {
  PropsWithChildren,
  HTMLAttributes,
  useCallback,
  ChangeEvent,
  Children,
  FocusEvent,
  KeyboardEvent,
  ReactElement,
  cloneElement
} from 'react';

import { parseInputValue } from './date-picker-range-reducer';
import { useDatePickerRangeContext as useDatePickerContext } from './useDatePickerRangeContext';

export const Start = (props: PropsWithChildren<HTMLAttributes<HTMLInputElement>>) => {
  const { state, dispatch, onChange, startValue, endValue, startInputRef, customParseDate } =
    useDatePickerContext();

  const onChangeCallback = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'START_INPUT_ONCHANGE', value: e.target.value });

      (props.children as any).props.onChange && (props.children as any).props.onChange(e);
    },
    [dispatch, props.children]
  );

  const onFocusCallback = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      dispatch({ type: 'START_FOCUS' });

      (props.children as any).props.onFocus && (props.children as any).props.onFocus(e);
    },
    [dispatch, props.children]
  );

  const handleBlur = useCallback(() => {
    let parsedDate;

    if (customParseDate) {
      parsedDate = customParseDate(state.startInputValue);
    } else {
      parsedDate = parseInputValue({
        inputValue: state.startInputValue
      });
    }

    dispatch({ type: 'START_BLUR' });

    if (parsedDate && isValid(parsedDate) && !isSameDay(parsedDate, startValue!)) {
      onChange && onChange({ startValue: parsedDate, endValue });
    }
  }, [dispatch, onChange, startValue, endValue, customParseDate, state.startInputValue]);

  const onKeyDownCallback = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === KEYS.ENTER) {
        e.preventDefault();
        handleBlur();
      }

      (props.children as any).props.onKeyDown && (props.children as any).props.onKeyDown(e);
    },
    [handleBlur, props.children]
  );

  const onBlurCallback = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      handleBlur();

      (props.children as any).props.onBlur && (props.children as any).props.onBlur(e);
    },
    [handleBlur, props.children]
  );

  const childElement = Children.only(props.children as ReactElement);

  return cloneElement(childElement, {
    value: state.startInputValue || '',
    ref: startInputRef,
    onChange: composeEventHandlers(childElement.props.onChange, onChangeCallback),
    onFocus: composeEventHandlers(childElement.props.onFocus, onFocusCallback),
    onKeyDown: composeEventHandlers(childElement.props.onKeyDown, onKeyDownCallback),
    onBlur: composeEventHandlers(childElement.props.onBlur, onBlurCallback)
  });
};

Start.displayName = 'DatePickerRange.Start';
