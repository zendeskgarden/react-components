/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ReactElement, RefAttributes, cloneElement, forwardRef } from 'react';
import useDatePickerContext from '../utils/useDatePickerContext';

interface IInputProps {
  element: ReactElement & RefAttributes<HTMLInputElement>;
  refKey: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(({ element, refKey }, ref) => {
  const { getInputProps } = useDatePickerContext();

  return cloneElement(
    element,
    getInputProps({
      [refKey]: ref,
      onChange: element.props.onChange,
      onKeyDown: element.props.onKeyDown,
      onMouseDown: element.props.onMouseDown,
      onFocus: element.props.onFocus,
      onClick: element.props.onClick
    })
  );
});

Input.displayName = 'Input';
