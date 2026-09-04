/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ReactElement, RefAttributes, cloneElement, forwardRef } from 'react';
import { isValid } from 'date-fns/isValid';
import { isSameDay } from 'date-fns/isSameDay';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { parseInputValue } from '../utils/date-picker-reducer';
import useDatePickerContext from '../utils/useDatePickerContext';
import { isDateWithinRange } from '../../../utils/calendar-utils';

interface IInputProps {
  element: ReactElement & RefAttributes<HTMLInputElement>;
  refKey: string;
  value?: Date;
  minValue?: Date;
  maxValue?: Date;
  onChange?: (date: Date) => void;
  customParseDate?: (inputValue: string) => Date;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ element, refKey, value, minValue, maxValue, onChange, customParseDate }, ref) => {
    const { state, dispatch, getInputProps } = useDatePickerContext();

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

    const combinedProps = {
      [refKey!]: ref,
      onChange: composeEventHandlers(element.props.onChange, handleChange),
      autoComplete: 'off',
      value: state.inputValue
    };

    return cloneElement(element, getInputProps(combinedProps));
  }
);

Input.displayName = 'Input';
