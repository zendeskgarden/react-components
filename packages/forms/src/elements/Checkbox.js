/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import useFieldContext from '../utils/useFieldContext';
import { CheckboxContext } from '../utils/useCheckboxContext';
import { StyledCheckInput } from '../styled';

/**
 * Accepts all `<input type="checkbox" />` props
 */
const Checkbox = React.forwardRef(({ indeterminate, children, ...props }, ref) => {
  const { getInputProps } = useFieldContext();
  const inputRef = inputElement => {
    inputElement && (inputElement.indeterminate = indeterminate);

    if (ref) {
      if (typeof ref === 'function') {
        ref(inputRef);
      } else {
        ref.current = inputRef;
      }
    }
  };

  return (
    <CheckboxContext.Provider value={{}}>
      <StyledCheckInput
        {...getInputProps(
          {
            ref: inputRef,
            ...props
          },
          { isDescribed: true }
        )}
      />
      {children}
    </CheckboxContext.Provider>
  );
});

Checkbox.propTypes = {
  indeterminate: PropTypes.bool,
  children: PropTypes.node
};

export default Checkbox;
