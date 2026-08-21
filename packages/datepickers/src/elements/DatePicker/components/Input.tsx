/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Dispatch, ReactElement, RefAttributes, cloneElement, forwardRef } from 'react';
import { isValid } from 'date-fns/isValid';
import { isSameDay } from 'date-fns/isSameDay';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { DatePickerAction, IDatePickerState, parseInputValue } from '../utils/date-picker-reducer';
import { isDateWithinRange } from '../../../utils/calendar-utils';

interface IInputProps {
  dispatch: Dispatch<DatePickerAction>;
  element: ReactElement & RefAttributes<HTMLInputElement>;
  refKey: string;
  state: IDatePickerState;
  value?: Date;
  minValue?: Date;
  maxValue?: Date;
  onChange?: (date: Date) => void;
  onValueSettled?: (result: { date?: Date; inputValue: string; valid: boolean }) => void;
  customParseDate?: (inputValue: string) => Date;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      element,
      dispatch,
      state,
      refKey,
      value,
      minValue,
      maxValue,
      onChange,
      onValueSettled,
      customParseDate
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const currentDate = parseInputValue({ inputValue, customParseDate });

      if (
        onChange &&
        currentDate &&
        isValid(currentDate) &&
        isDateWithinRange(currentDate, minValue, maxValue) &&
        !isSameDay(value!, currentDate)
      ) {
        onChange(currentDate);
      }

      dispatch({ type: 'MANUALLY_UPDATE_INPUT', value: inputValue });
    };

    const handleBlur = () => {
      if (!onValueSettled) {
        return;
      }

      const { inputValue } = state;

      if (inputValue === '') {
        onValueSettled({ date: undefined, inputValue, valid: !element.props.required });

        return;
      }

      const currentDate = parseInputValue({ inputValue, customParseDate });
      const valid = isValid(currentDate) && isDateWithinRange(currentDate, minValue, maxValue);

      onValueSettled({ date: valid ? currentDate : undefined, inputValue, valid });
    };

    return cloneElement(element, {
      [refKey!]: ref,
      onChange: composeEventHandlers(element.props.onChange, handleChange),
      onBlur: composeEventHandlers(element.props.onBlur, handleBlur),
      autoComplete: 'off',
      value: state.inputValue
    });
  }
);

Input.displayName = 'Input';
