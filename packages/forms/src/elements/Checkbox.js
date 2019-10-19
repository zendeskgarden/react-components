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
const Checkbox = React.forwardRef(({ children, ...props }, ref) => {
  const { getInputProps } = useFieldContext();

  return (
    <CheckboxContext.Provider value={{}}>
      <StyledCheckInput
        {...getInputProps(
          {
            ref,
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
  children: PropTypes.node
};

export default Checkbox;
