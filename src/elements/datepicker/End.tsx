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
  InputHTMLAttributes,
  KeyboardEvent,
  ReactElement,
  RefAttributes,
  RefObject,
  cloneElement
} from 'react';

import { useDatePickerRangeContext as useDatePickerContext } from '../../hooks/datepicker/useDatePickerRangeContext';
import { parseInputValue } from './date-picker-range-reducer';

export const End = (props: PropsWithChildren<HTMLAttributes<HTMLInputElement>>) => {
  const { state, dispatch, onChange, startValue, endValue, endInputRef, customParseDate } =
    useDatePickerContext();

  const onChangeCallback = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'END_INPUT_ONCHANGE', value: e.target.value });

      (props.children as any).props.onChange && (props.children as any).props.onChange(e);
    },
    [dispatch, props.children]
  );

  const onFocusCallback = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      dispatch({ type: 'END_FOCUS' });

      (props.children as any).props.onFocus && (props.children as any).props.onFocus(e);
    },
    [dispatch, props.children]
  );

  const handleBlur = useCallback(() => {
    dispatch({ type: 'END_BLUR' });
    let parsedDate;

    if (customParseDate) {
      parsedDate = customParseDate(state.endInputValue);
    } else {
      parsedDate = parseInputValue({
        inputValue: state.endInputValue
      });
    }

    if (onChange && parsedDate && isValid(parsedDate) && !isSameDay(parsedDate, endValue!)) {
      onChange && onChange({ startValue, endValue: parsedDate });
    }
  }, [dispatch, onChange, startValue, endValue, customParseDate, state.endInputValue]);

  const onKeydownCallback = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === KEYS.ENTER) {
        handleBlur();

        e.preventDefault();
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

  const childElement = Children.only(
    props.children as ReactElement<
      InputHTMLAttributes<HTMLInputElement> & RefAttributes<HTMLInputElement>
    >
  );

  return cloneElement(childElement, {
    value: state.endInputValue || '',
    ref: endInputRef as RefObject<HTMLInputElement | null>,
    onChange: composeEventHandlers(childElement.props.onChange, onChangeCallback),
    onFocus: composeEventHandlers(childElement.props.onFocus, onFocusCallback),
    onKeyDown: composeEventHandlers(childElement.props.onKeyDown, onKeydownCallback),
    onBlur: composeEventHandlers(childElement.props.onBlur, onBlurCallback)
  });
};

End.displayName = 'DatePickerRange.End';
