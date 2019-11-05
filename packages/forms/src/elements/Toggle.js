/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import useFieldContext from '../utils/useFieldContext';
import { InputContext } from '../utils/useInputContext';
import { StyledToggleInput } from '../styled';

/**
 * Must be rendered within a `<Field>` element; accepts all
 * `<input type="checkbox">` attributes and events.
 */
const Toggle = React.forwardRef(({ children, ...props }, ref) => {
  const { getInputProps } = useFieldContext();

  return (
    <InputContext.Provider value={'toggle'}>
      <StyledToggleInput
        {...getInputProps({
          ref,
          ...props
        })}
      />
      {children}
    </InputContext.Provider>
  );
});

export default Toggle;
