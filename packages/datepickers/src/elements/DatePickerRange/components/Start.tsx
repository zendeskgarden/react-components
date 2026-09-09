/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, HTMLAttributes, useCallback, useRef } from 'react';
import useDatePickerContext from '../utils/useDatePickerRangeContext';
import { KEYS, composeEventHandlers } from '@zendeskgarden/container-utilities';
import { isValid } from 'date-fns/isValid';
import { isSameDay } from 'date-fns/isSameDay';
import { parseInputValue, resolveSettledValue } from '../utils/date-picker-range-reducer';

export const Start = ({ children }: PropsWithChildren<HTMLAttributes<HTMLInputElement>>) => {
  const {
    state,
    dispatch,
    onChange,
    onValueSettled,
    startValue,
    endValue,
    startInputRef,
    getInputProps,
    minValue,
    maxValue,
    customParseDate
  } = useDatePickerContext();

  const childElement = React.Children.only(children as React.ReactElement);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isBlurPendingRef = useRef(false);

  /**
   * Resolves and reports the settled value for a given (or, by default, the
   * current) input value, without any of commitBlur's other side effects -
   * used both by commitBlur itself and by onChangeCallback below, which
   * needs to report immediately when the field becomes empty, before its
   * own MANUALLY_UPDATE_INPUT-equivalent dispatch is reflected in state.
   */
  const reportSettled = useCallback(
    (inputValue: string = state.startInputValue) => {
      const settled = resolveSettledValue({
        inputValue,
        required: childElement.props.required,
        minValue,
        maxValue,
        notAfter: endValue,
        customParseDate
      });

      onValueSettled?.({ field: 'start', ...settled });
    },
    [
      onValueSettled,
      endValue,
      minValue,
      maxValue,
      customParseDate,
      childElement.props.required,
      state.startInputValue
    ]
  );

  /**
   * Reports an empty field as settled immediately, since a ClearableInput's
   * clear button never blurs the input (it clears the value then calls
   * focus() to keep focus on the input) - without this, clearing the field
   * that way would never be reported at all.
   */
  const onChangeCallback = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      dispatch({ type: 'START_INPUT_ONCHANGE', value: inputValue });

      if (inputValue === '' && state.startInputValue !== '') {
        reportSettled(inputValue);
      }

      childElement.props.onChange && childElement.props.onChange(e);
    },
    [dispatch, childElement, reportSettled, state.startInputValue]
  );

  const onFocusCallback = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      dispatch({ type: 'START_FOCUS' });

      childElement.props.onFocus && childElement.props.onFocus(e);
    },
    [dispatch, childElement]
  );

  /**
   * Reparses the typed value, reformats/reverts it via START_BLUR, fires
   * onChange for a valid new value, and reports the settled result - the
   * full set of "the field is truly done being edited" side effects. Reads
   * state.startInputValue live, so it must only run once we know focus has
   * actually left this field's own composed group (see handleBlur and
   * onWrapperBlur below) - committing early, while focus is still moving
   * within the same ClearableInput, would revert the typed text (and
   * potentially unmount a just-focused clear button) out from under the
   * user before they're done interacting with the field.
   */
  const commitBlur = useCallback(() => {
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

    reportSettled();
  }, [
    dispatch,
    onChange,
    startValue,
    endValue,
    customParseDate,
    state.startInputValue,
    reportSettled
  ]);

  const handleBlur = useCallback(
    (relatedTarget: Element | null = null) => {
      const stillInsideOwnGroup = !!relatedTarget && !!wrapperRef.current?.contains(relatedTarget);

      if (stillInsideOwnGroup) {
        isBlurPendingRef.current = true;
      } else {
        isBlurPendingRef.current = false;
        commitBlur();
      }
    },
    [commitBlur]
  );

  const onKeyDownCallback = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === KEYS.ENTER) {
        e.preventDefault();
        handleBlur();
      }

      childElement.props.onKeyDown && childElement.props.onKeyDown(e);
    },
    [handleBlur, childElement]
  );

  const onBlurCallback = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      handleBlur(e.relatedTarget as Element | null);

      childElement.props.onBlur && childElement.props.onBlur(e);
    },
    [handleBlur, childElement]
  );

  /**
   * Catches blur events from any other focusable descendant the child renders
   * (e.g. a ClearableInput's clear button) via bubbling, since only the input
   * itself has the above onBlurCallback wired up directly. Skips the input's
   * own blur, already handled by onBlurCallback, to avoid double-committing.
   */
  const onWrapperBlur = useCallback(
    (e: React.FocusEvent<HTMLDivElement>) => {
      if (e.target === startInputRef.current || !isBlurPendingRef.current) {
        return;
      }

      const relatedTarget = e.relatedTarget as Element | null;
      const stillInsideOwnGroup = !!relatedTarget && !!wrapperRef.current?.contains(relatedTarget);

      if (!stillInsideOwnGroup) {
        isBlurPendingRef.current = false;
        commitBlur();
      }
    },
    [startInputRef, commitBlur]
  );

  return (
    <div ref={wrapperRef} style={{ display: 'contents' }} onBlur={onWrapperBlur}>
      {React.cloneElement(
        childElement,
        getInputProps({
          ...childElement.props,
          value: state.startInputValue || '',
          ref: startInputRef,
          onChange: composeEventHandlers(childElement.props.onChange, onChangeCallback),
          onFocus: composeEventHandlers(childElement.props.onFocus, onFocusCallback),
          onKeyDown: composeEventHandlers(childElement.props.onKeyDown, onKeyDownCallback),
          onBlur: composeEventHandlers(childElement.props.onBlur, onBlurCallback)
        })
      )}
    </div>
  );
};

Start.displayName = 'DatePickerRange.Start';
