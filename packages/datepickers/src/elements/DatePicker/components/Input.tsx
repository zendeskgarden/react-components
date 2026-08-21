/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Dispatch, ReactElement, RefAttributes, cloneElement, forwardRef } from 'react';
import { isValid } from 'date-fns/isValid';
import { isSameDay } from 'date-fns/isSameDay';
import { KEYS, composeEventHandlers } from '@zendeskgarden/container-utilities';
import { DatePickerAction, IDatePickerState, parseInputValue } from '../utils/date-picker-reducer';

interface IInputProps {
  dispatch: Dispatch<DatePickerAction>;
  element: ReactElement & RefAttributes<HTMLInputElement>;
  refKey: string;
  state: IDatePickerState;
  value?: Date;
  onChange?: (date: Date) => void;
  customParseDate?: (inputValue: string) => Date;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ element, dispatch, state, refKey, value, onChange, customParseDate }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const currentDate = parseInputValue({ inputValue, customParseDate });

      if (onChange && currentDate && isValid(currentDate) && !isSameDay(value!, currentDate)) {
        onChange(currentDate);
      }

      dispatch({ type: 'MANUALLY_UPDATE_INPUT', value: inputValue });
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case KEYS.ESCAPE:
        case KEYS.ENTER:
          dispatch({ type: 'CLOSE' });
          break;
      }
    };

    return cloneElement(element, {
      [refKey!]: ref,
      onChange: composeEventHandlers(element.props.onChange, handleChange),
      onKeyDown: composeEventHandlers(element.props.onKeyDown, handleKeyDown),
      autoComplete: 'off',
      value: state.inputValue
    });
  }
);

Input.displayName = 'Input';
