/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { cloneElement, forwardRef } from 'react';
import useDatePickerContext from '../utils/useDatePickerContext';
import { IDatePickerInputProps } from '../../../types';

export const Input = forwardRef<HTMLInputElement, IDatePickerInputProps>(
  ({ element, refKey }, ref) => {
    const { getInputProps } = useDatePickerContext();

    return cloneElement(
      element,
      getInputProps({
        [refKey]: ref,
        onChange: element.props.onChange,
        onKeyDown: element.props.onKeyDown,
        onMouseDown: element.props.onMouseDown,
        onFocus: element.props.onFocus,
        onClick: element.props.onClick,
        autoComplete: element.props.autoComplete
      })
    );
  }
);

Input.displayName = 'Input';
