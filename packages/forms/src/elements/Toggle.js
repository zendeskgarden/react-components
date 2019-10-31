/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import useFieldContext from '../utils/useFieldContext';
import { ToggleContext } from '../utils/useToggleContext';
import { StyledToggleInput } from '../styled';

/**
 * Must be rendered within a `<Field>` element; accepts all
 * `<input type="checkbox">` attributes and events.
 */
const Toggle = React.forwardRef(({ children, ...props }, ref) => {
  const { getInputProps } = useFieldContext();

  return (
    <ToggleContext.Provider value={{}}>
      <StyledToggleInput
        {...getInputProps({
          ref,
          ...props
        })}
      />
      {children}
    </ToggleContext.Provider>
  );
});

export default Toggle;
