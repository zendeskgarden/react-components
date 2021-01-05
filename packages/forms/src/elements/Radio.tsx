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
 * @extends InputHTMLAttributes<HTMLInputElement>
 */
export const Radio = React.forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ children, ...props }, ref) => {
    const fieldContext = useFieldContext();

    let combinedProps = {
      ref,
      ...props
    };

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps(combinedProps);
    }

    return (
      <InputContext.Provider value="radio">
        <StyledRadioInput {...(combinedProps as any)} />
        {children}
      </InputContext.Provider>
    );
  }
);

Radio.displayName = 'Radio';
