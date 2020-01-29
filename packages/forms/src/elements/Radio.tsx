/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { InputHTMLAttributes } from 'react';
import useFieldContext from '../utils/useFieldContext';
import { InputContext } from '../utils/useInputContext';
import { StyledRadioInput } from '../styled';

/**
 * Must be rendered within a `<Field>` element; accepts all
 * `<input type="radio">` attributes and events.
 */
export const Radio = React.forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ children, ...props }, ref) => {
    const { getInputProps } = useFieldContext();

    return (
      <InputContext.Provider value="radio">
        <StyledRadioInput
          {...(getInputProps({
            ref,
            ...props
          }) as any)}
        />
        {children}
      </InputContext.Provider>
    );
  }
);
