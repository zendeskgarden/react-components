/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { InputHTMLAttributes } from 'react';
import useFieldContext from '../utils/useFieldContext';
import { InputContext } from '../utils/useInputContext';
import { StyledCheckInput } from '../styled';
import useFieldsetContext from '../utils/useFieldsetContext';

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Sets the checkbox state to
   * [indeterminate](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes)
   */
  indeterminate?: boolean;
  /** Applies compact styling */
  isCompact?: boolean;
}

/**
 * @extends InputHTMLAttributes<HTMLInputElement>
 */
export const Checkbox = React.forwardRef<HTMLInputElement, ICheckboxProps>(
  ({ indeterminate, children, ...props }, ref) => {
    const fieldsetContext = useFieldsetContext();
    const fieldContext = useFieldContext();

    const inputRef = (inputElement: HTMLInputElement) => {
      inputElement && ((inputElement as any).indeterminate = indeterminate);
    };

    const combinedRef = (inputElement: HTMLInputElement) => {
      [inputRef, ref].forEach(targetRef => {
        if (targetRef) {
          if (typeof targetRef === 'function') {
            targetRef(inputElement);
          } else {
            (targetRef as any).current = inputElement;
          }
        }
      });
    };

    let combinedProps = {
      ref: combinedRef,
      ...props,
      ...fieldsetContext
    };

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps(combinedProps);
    }

    return (
      <InputContext.Provider value="checkbox">
        <StyledCheckInput {...(combinedProps as any)} />
        {children}
      </InputContext.Provider>
    );
  }
);

Checkbox.displayName = 'Checkbox';
