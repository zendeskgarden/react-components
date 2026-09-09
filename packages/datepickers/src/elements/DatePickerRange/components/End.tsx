/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, HTMLAttributes, useCallback, useRef } from 'react';
import { KEYS, composeEventHandlers } from '@zendeskgarden/container-utilities';
import { isValid } from 'date-fns/isValid';
import { isSameDay } from 'date-fns/isSameDay';
import { parseInputValue, resolveSettledValue } from '../utils/date-picker-range-reducer';
import useDatePickerContext from '../utils/useDatePickerRangeContext';

export const End = ({ children }: PropsWithChildren<HTMLAttributes<HTMLInputElement>>) => {
  const {
    state,
    dispatch,
    onChange,
    onValueSettled,
    startValue,
    endValue,
    endInputRef,
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
    (inputValue: string = state.endInputValue) => {
      const settled = resolveSettledValue({
        inputValue,
        required: childElement.props.required,
        minValue,
        maxValue,
        notBefore: startValue,
        customParseDate
      });

      onValueSettled?.({ field: 'end', ...settled });
    },
    [
      onValueSettled,
      startValue,
      minValue,
      maxValue,
      customParseDate,
      childElement.props.required,
      state.endInputValue
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

      dispatch({ type: 'END_INPUT_ONCHANGE', value: inputValue });

      if (inputValue === '' && state.endInputValue !== '') {
        reportSettled(inputValue);
      }

      childElement.props.onChange && childElement.props.onChange(e);
    },
    [dispatch, childElement, reportSettled, state.endInputValue]
  );

  const onFocusCallback = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      dispatch({ type: 'END_FOCUS' });

      childElement.props.onFocus && childElement.props.onFocus(e);
    },
    [dispatch, childElement]
  );

  /**
   * Reparses the typed value, reformats/reverts it via END_BLUR, fires
   * onChange for a valid new value, and reports the settled result - the
   * full set of "the field is truly done being edited" side effects. Reads
   * state.endInputValue live, so it must only run once we know focus has
   * actually left this field's own composed group (see handleBlur and
   * onWrapperBlur below) - committing early, while focus is still moving
   * within the same ClearableInput, would revert the typed text (and
   * potentially unmount a just-focused clear button) out from under the
   * user before they're done interacting with the field.
   */
  const commitBlur = useCallback(() => {
    let parsedDate;

    if (customParseDate) {
      parsedDate = customParseDate(state.endInputValue);
    } else {
      parsedDate = parseInputValue({
        inputValue: state.endInputValue
      });
    }

    dispatch({ type: 'END_BLUR' });

    if (parsedDate && isValid(parsedDate) && !isSameDay(parsedDate, endValue!)) {
      onChange && onChange({ startValue, endValue: parsedDate });
    }

    reportSettled();
  }, [
    dispatch,
    onChange,
    startValue,
    endValue,
    customParseDate,
    state.endInputValue,
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

  const onKeydownCallback = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === KEYS.ENTER) {
        handleBlur();

        e.preventDefault();
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
      if (e.target === endInputRef.current || !isBlurPendingRef.current) {
        return;
      }

      const relatedTarget = e.relatedTarget as Element | null;
      const stillInsideOwnGroup = !!relatedTarget && !!wrapperRef.current?.contains(relatedTarget);

      if (!stillInsideOwnGroup) {
        isBlurPendingRef.current = false;
        commitBlur();
      }
    },
    [endInputRef, commitBlur]
  );

  return (
    <div ref={wrapperRef} style={{ display: 'contents' }} onBlur={onWrapperBlur}>
      {React.cloneElement(
        childElement,
        getInputProps({
          ...childElement.props,
          value: state.endInputValue || '',
          ref: endInputRef,
          onChange: composeEventHandlers(childElement.props.onChange, onChangeCallback),
          onFocus: composeEventHandlers(childElement.props.onFocus, onFocusCallback),
          onKeyDown: composeEventHandlers(childElement.props.onKeyDown, onKeydownCallback),
          onBlur: composeEventHandlers(childElement.props.onBlur, onBlurCallback)
        })
      )}
    </div>
  );
};

End.displayName = 'DatePickerRange.End';
