/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import useFieldContext from '../utils/useFieldContext';
import { RadioContext } from '../utils/useRadioContext';
import { StyledRadioInput } from '../styled';

/**
 * Must be rendered within a `<Field>` element; accepts all
 * `<input type="radio">` attributes and events.
 */
const Radio = React.forwardRef(({ children, ...props }, ref) => {
  const { getInputProps } = useFieldContext();

  return (
    <RadioContext.Provider value={{}}>
      <StyledRadioInput
        {...getInputProps({
          ref,
          ...props
        })}
      />
      {children}
    </RadioContext.Provider>
  );
});

export default Radio;
