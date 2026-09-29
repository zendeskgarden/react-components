/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { cloneElement, forwardRef } from 'react';
import { ClearableInput } from '@zendeskgarden/react-forms';
import useDatePickerContext from '../utils/useDatePickerContext';
import { NESTED_GROUP_PROPS } from '../../../utils/nested-group-utils';
import { IDatePickerInputProps } from '../../../types';

export const Input = forwardRef<HTMLInputElement, IDatePickerInputProps>(
  ({ element, refKey }, ref) => {
    const { getInputProps } = useDatePickerContext();
    const inputProps = getInputProps({
      [refKey]: ref,
      onChange: element.props.onChange,
      onKeyDown: element.props.onKeyDown,
      onMouseDown: element.props.onMouseDown,
      onFocus: element.props.onFocus,
      onClick: element.props.onClick,
      autoComplete: element.props.autoComplete
    });

    // DatePicker always wraps its child in its own labelled group, so a ClearableInput's doesn't repeat it.
    return cloneElement(
      element,
      element.type === ClearableInput
        ? { ...inputProps, wrapperProps: { ...NESTED_GROUP_PROPS, ...element.props.wrapperProps } }
        : inputProps
    );
  }
);

Input.displayName = 'Input';
