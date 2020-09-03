/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, HTMLAttributes, useCallback } from 'react';
import { KEY_CODES, composeEventHandlers } from '@zendeskgarden/container-utilities';
import useDatepickerRangeContext from '../utils/useDatepickerRangeContext';

const End = (props: PropsWithChildren<HTMLAttributes<HTMLInputElement>>) => {
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

  const childElement = React.Children.only(props.children as React.ReactElement);

  return React.cloneElement(childElement, {
    value: state.endInputValue,
    ref: endInputRef,
    onChange: composeEventHandlers(childElement.props.onChange, onChangeCallback),
    onFocus: composeEventHandlers(childElement.props.onFocus, onFocusCallback),
    onKeyDown: composeEventHandlers(childElement.props.onKeyDown, onKeydownCallback),
    onBlur: composeEventHandlers(childElement.props.onBlur, onBlurCallback)
  });
};

export default End;
