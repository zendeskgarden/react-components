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

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Set
   * [indeterminate](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes)
   * checkbox state
   */
  indeterminate?: boolean;
}

/**
 * Must be rendered within a `<Field>` element; accepts all
 * `<input type="checkbox">` attributes and events.
 */
export const Checkbox = React.forwardRef<HTMLInputElement, ICheckboxProps>(
  ({ indeterminate, children, ...props }, ref) => {
    const { getInputProps } = useFieldContext();
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

    return (
      <InputContext.Provider value="checkbox">
        <StyledCheckInput
          {...(getInputProps({
            ref: combinedRef,
            ...props
          }) as any)}
        />
        {children}
      </InputContext.Provider>
    );
  }
);
