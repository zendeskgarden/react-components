/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, HTMLProps, useCallback } from 'react';
import { KEY_CODES } from '@zendeskgarden/container-utilities';
import useDatepickerRangeContext from '../utils/useDatepickerRangeContext';

const End = (props: PropsWithChildren<HTMLProps<HTMLInputElement>>) => {
  const { state, dispatch, endInputRef } = useDatepickerRangeContext();

  const onChangeCallback = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'END_INPUT_ONCHANGE', value: e.target.value });

      (props.children as any).props.onChange && (props.children as any).props.onChange(e);
    },
    [dispatch, props.children]
  );

  const onFocusCallback = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      dispatch({ type: 'END_FOCUS' });

      (props.children as any).props.onFocus && (props.children as any).props.onFocus(e);
    },
    [dispatch, props.children]
  );

  const onKeydownCallback = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === KEY_CODES.ENTER) {
        dispatch({ type: 'END_BLUR' });
        e.preventDefault();
      }

      (props.children as any).props.onKeyDown && (props.children as any).props.onKeyDown(e);
    },
    [dispatch, props.children]
  );

  const onBlurCallback = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      dispatch({ type: 'END_BLUR' });

      (props.children as any).props.onBlur && (props.children as any).props.onBlur(e);
    },
    [dispatch, props.children]
  );

  return React.cloneElement(React.Children.only(props.children as any), {
    value: state.endInputValue,
    ref: endInputRef,
    onChange: onChangeCallback,
    onFocus: onFocusCallback,
    onKeyDown: onKeydownCallback,
    onBlur: onBlurCallback
  });
};

export default End;
